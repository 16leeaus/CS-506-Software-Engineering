import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { DatePicker } from 'react-native-date-picker'
import { React, useState } from 'react'
import styles from '../../styles/Login.screen.style'
import { Picker } from 'react-native-web'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../../../firebaseConfig.js"
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation, route }) => {

  //https://stackoverflow.com/questions/72651950/firebase-error-auth-invalid-value-email-starting-an-object-on-a-scalar-fiel

  /**
   * Method that will handle the registration and signin of a new user. Upon 
   * creating a new account the user will be logged in and information will
   * be written to the database.
   */
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Update new firebase user account with name:
        updateProfile(auth.currentUser, {
          displayName: userData.firstName
        }).then(() => {
          // Profile has been updated:
          console.log("Name added to profile: " + user.displayName);
        }).catch((error) => {
          // Profile has not been updated
          console.error("Error updating profile name: ", e);
          // still searching for documentation of error codes
          return e.code;
        });
        // CR: Edit format to be more readable and seperate the two sections
        try {
          // Add a new user doc in the database with respective information:
          const docRef = doc(db, 'users', user.uid);
          setDoc(docRef, {
            firstName: userData.firstName,
            // lastName: userData.lastName,  // currently not working
            DOB: userData.DOB,
            pronouns: userData.pronouns,
            usersSeen: {}, // keep track of users seen
            swipedRight: {}, // keep track of users swiped right on
            matches: {}
          }); // keep track of users matched with
          // intersection of swipedRight with usersSeen = swipedRight
          // intersection of matches with usersSeen = matches
          // intersection of matches with swipedRight is empty
          console.log("Document written with ID: ", auth.currentUser.uid);
        } catch (e) {
          //  Return Error Code
          console.error("Error adding document: ", e);
          //  error code documentation link
          //  https://firebase.google.com/docs/reference/js/auth#autherrorcodes
          //  tells you what error codes mean
          return e.code;
        }
      })
      .catch((error) => {
        //  User registration has failed:
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        //  error code documentation link
        //  https://firebase.google.com/docs/reference/js/auth#autherrorcodes
        //  tells you what error codes mean
        return error.code;

      });
    // CR: Edit format to be more readable and seperate the two sections
    try {
      // Add a new user doc in the database with respective information:
      const docRef = doc(db, 'users', user.uid);
      setDoc(docRef, {
        firstName: userData.firstName,
        //lastName: userData.lastName,
        DOB: userData.DOB,
        pronouns: userData.pronouns
      });
      console.log("Document written with ID: ", auth.currentUser.uid);
    } catch (e) {
      // CR: TODO return error code
      console.error("Error adding document: ", e);
    }
  }

  // page componenets
  return (
    // Keyboard avoiding view allows all components to move and be visible while keyboard visible
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">

      {/* Title of Page */}
      <View>
        <Text>Create Profile</Text>
      </View>

      {/********************************************************************************************************/}
      {/* Text input fields for user to fill in with profile information */}
      <View
        style={styles.inputContainer}>

        <TextInput
          placeholder="First Name"
          placeholderTextColor="#DEDEDE"
          value={userData.firstName}
          onChangeText={text => setUserData({ ...text, ['firstName']: text })}  // To Fix: doesnt function as expected
          style={styles.input}
        />

        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#DEDEDE"
          value={userData.lastName}
          onChangeText={text => setUserData({ ...text, ['lastName']: text })}  // To Fix: doesnt function as expected
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#DEDEDE"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#DEDEDE"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        {error.password && <span className='err'>{error.password}</span> // display error comment if applicable
        }

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#DEDEDE"
          style={styles.input}
          value={password}
          secureTextEntry
        />
        {/* TODO: {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}

        <TextInput
          placeholder="Date of Birth"
          placeholderTextColor="#DEDEDE"
          value={userData.DOB}
          onChangeText={text => setUserData({ ...userData, ['DOB']: text })}
          style={styles.input}
        />

        {/* <DatePicker 
                date={user.date}
                mode='date' 
                onDateChange={date => setUser({...user, DOB: date})} 
            /> CR: add comment*/}

        <TextInput
          placeholder="Preferred Pronouns"
          placeholderTextColor="#DEDEDE"
          value={userData.pronouns}
          onChangeText={text => setUserData({ ...userData, ['pronouns']: text })}
          style={styles.input}
        />
      </View>

      {/********************************************************************************************************/}
      {/* Button displayed at the bottom of the screen to CREATE PROFILE */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleSignUp(); // TODO: return error code and handle (CR)
            navigation.navigate('Survey', { name: userData.firstName }); // CR: combine this into a method
          }
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}> CREATE PROFILE </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen