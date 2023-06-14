import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { auth, db } from "../../../firebaseConfig.js";
import { arrayRemove, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { Feed } from "./Feed";
import { async } from '@firebase/util';

/**
 * This should be executed when a user is swiped right on. It adds the user previously
 * viewed in the feed to the "matches" component of the user's document in firestore if
 * the user is in the previously viewed user's "swipedRight" component, otherwise they're
 * added to the "swipedRight" component.
 * 
 * @param user - user in the app
 * @param likedUser - the user that was swiped right on by user in the feedPage
 */
const addMatch = (user, likedUser) => {
    /* In case we don't actually pass in user and likedUser this link may be helpful:
    https://firebase.google.com/docs/firestore/query-data/get-data */

    docRefUser = doc(db, "users", user.uid);
    docRefLikedUser = doc(db, "users", likedUser.uid);

    // first we see if the user we swiped right on has us in their swipedRight component
    if (docRefLikedUser.swipedRight.includes(user.uid)) { // includes is similar to contains
        // https://firebase.google.com/docs/firestore/manage-data/add-data
        async () => {
            // user gains a match
            await updateDoc(docRefUser, {
                "matches": arrayUnion(docRefLikedUser.uid)
            });
            // liked user gains a match
            await updateDoc(docRefLikedUser, {
                "matches": arrayUnion(docRefUser.uid)
            });
            // liked user has one less "swipedRight"
            await updateDoc(docRefLikedUser, {
                "swipedRight": arrayRemove(user.uid)
            });
        }
    } else {
        // only add to user's swipedRight component
        async () => {
            await updateDoc(docRefUser, {
                "swipedRight": arrayUnion(docRefLikedUser.uid)
            });
        }
    }
}

export default addMatch;