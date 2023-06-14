import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../../firebaseConfig.js';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

/** 
 * Simple implementation of the messaging api gifted chat using react native.
 * This currently operates as a open chat room, and will need to be refactored
 * into a new implementation that acts as a 1-on-1 messaging platform. 
 * 
 * This will take in a user uid as a parameter, this uid will function as the 
 * identifier for the second person in the chat. The first person's identifier
 * will be provided by the auth, based on the currently logged in person.
 * 
 * @author Austin Lee (Unit tests provided by Christopher Kennedy)
 * @version 2022.12.14
 */
const Chat = ({ user }) => {

    // Get the currently signed in user:
    const { currentUser } = auth.currentUser.uid;

    // Have the useState set the messages called from the database, and add them
    // to an array called messages.
    const [messages, setMessages] = useState([]);

    /**
     * TODO: Remove this function, the log out feature was moved to the settings page. 
     * 
     * Sign out function. Will get the current user from firebase auth and 
     * then log out the user that is returned.
     */
    /* const signOutNow = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace('Login');
        }).catch((error) => {
            // An error happened.
        });
    } */

    /**
     * Constructor for the first user in the conversation. This will use the current
     * user provided by the logged in user and the auth.
     */
    const user1 = {
        _id: currentUser.uid,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName
    }

    /**
     * Constructor for the second user in the conversation. This will use the user 
     * passed in from as part of the parameters from the ChatList item.
     */
    const user2 = {
        _id: user.uid,
        firstName: user.firstName,
        lastName: user.lastName
    }

    /**
     * Setup the header with a logout button (something I just needed to cram 
     * into a spot). Along with the user avatar that will be present in the chat.
     */
    useLayoutEffect(() => {
        /**
         * Query the database for all messages in a thread, including data like 
         * the sender, and timestamp. Messages are currently stored in the 
         */
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        // Unmount from the request to get messages from that database.
        return () => {
          unsubscribe();
        };

    }, [navigation]);

    /**
     * When the send button is clicked the content of the message is written
     * to the database, along with the user who sent it and a timestamp. This 
     * schema will be reworked in a later iteration of this module.
     */
    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user,} = messages[0]

        // When the send button is pressed add a new document to the collection.
        addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);

    /**
     * Return the complete chat module. Including a logout button (something I 
     * simply needed to add for testing), and a chat bar at the bottom. Once the
     * text box is clicked the keyboard will expand and a send button will appear.
     */
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    );
}

/**
 * This function checks to make sure the document is stored in the database correctly for a message.
 * Documents should be created according to user.uid that sent them (see RegisterScreen.js for a similar way this was done).
 * Nothing is returned, check console logs for result of test.
 * 
 * @param user - the user currently on the app, their information will be used to look up the document of the message in the db
 */
function documentCreatedSuccessfullyInDBTest(user) {
    // See https://firebase.google.com/docs/firestore/query-data/get-data for reference on how to get data
    const docRef = doc(db, 'chats', user.uid); // document reference from imported db
    try {
        const docCur = getDoc(docRef);
        if (docCur.exists()) { // meat of the test, we're checking if document exists
            console.log("Document exists, data returned:", docCur.data());
        } else {
            console.log("Document was not found");
        }
    } catch(e) {
        console.log("Error occurred trying to get the document" + e);
    }
}

/**
 * The purpose of this test is to ensure the message is being stored in the backend so that
 * users won't lose chats in logging off/logging back on.
 * This test should be called after storing the message in the database.
 * Nothing is returned, check console logs for result of test.
 * 
 * @param message - the string message we're looking for
 * @param userSending - the user sending the message
 * @param userSentTo - the user intended to receive the message
 */
function messageStoredInDBTest(message, userSending, userSentTo) {
    const docRefSend = doc(db, 'chats', userSending.uid); // these two lines serve to get information from db
    const docRefRec = doc(db, 'chats', userSentTo.uid);

    try {
        const docCur = getDoc(docRefSend); // this should succeed, see above test
        let messageFound = 0;
        for (let i = 0; i < docCur.usersMessaged.length; i++) { // iterate through users messaged
            if (docCur.usersMessaged[i] == userSentTo.uid) { // user found!
                console.log("User sending to found!");
                for (let j = 0; j < docCur.usersMessaged[i].length; j++) { // iterate through messages sent to that user
                    if (docCur.usersMessaged[i][j] == message) { // messages match?
                        console.log("Message found successfully!");
                        messageFound = 1;
                        break;
                    }
                }
            }
            if (messageFound == 1) { // no use to keep going
                break;
            }
        }
        if (messageFound == 0) {
            console.log("Message not found in userSending document, test failed");
            return;
        }
    } catch(e) {
        console.log("Error occurred trying to see if message matched" + e);
    }

    // do same as above but for other user now
    try {
        const docCur = getDoc(docRefRec); // get other user
        let messageFound = 0;
        for (let i = 0; i < docCur.usersMessaged.length; i++) {
            if (docCur.usersMessaged[i] == userSending.uid) { // looking for userSending.uid here instead
                console.log("User sending to found!");
                for (let j = 0; j < docCur.usersMessaged[i].length; j++) { // iterate through messages in the same way
                    if (docCur.usersMessaged[i][j] == message) {
                        console.log("Message found successfully!");
                        messageFound = 1;
                        break;
                    }
                }
            }
            if (messageFound == 1) {
                break;
            }
        }
        if (messageFound == 0) {
            console.log("Message not found in userSending document, test failed");
            return;
        }
    } catch(e) {
        console.log("Error occurred trying to see if message matched" + e);
    }
}

export default Chat;
