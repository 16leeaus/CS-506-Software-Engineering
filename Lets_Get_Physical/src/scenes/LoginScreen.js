import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'
import styles from '../styles/Login.screen.style'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./../../firebaseConfig.js"

/*
 * First page viewed upon opening of application
 */
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /* 
   * When called, this function passes a user's email and password 
   * authentication to the firebase database and logs when successful 
   */
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login sucessful: user uid = " + user.uid);
        navigation.navigate('Home') // successful now move to feed page
      })
      .catch((error) => {
        // user failed to sign in
        const errorCode = error.code; // CR: research error codes
        const errorMessage = error.message;
        console.log(errorMessage); // print error to console
        // display a toast message
        // 
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">

      {/* Input for user email and password *************************************/}
      <View
        style={styles.inputContainer}>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#DEDEDE"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#DEDEDE"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      {/* Buttons displayed at the bottom of the screen to LOG IN or REGISTER **********************************/}
      <View style={styles.buttonContainer}>

        {/* Select LOG IN -> flow to home page */}
        <TouchableOpacity
          onPress={() => {
            console.log("Button Pressed");
            signInUser(); // signs user in
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}> LOG IN </Text>
        </TouchableOpacity>

        {/* Select REGISTER -> flow to sign up and survey pages */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Survey', { email: email })}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}> REGISTER </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen
