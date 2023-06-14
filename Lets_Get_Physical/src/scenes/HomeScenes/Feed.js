import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons"
import CardsSwipe from 'react-native-cards-swipe'
import styles from '../../styles/Feed.screen.style'
import Profile from '../../components/Profile'
import addMatch from './Match'
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../../firebaseConfig"
//import getUsersList from '../../components/UserList'

const Users = []

// Class used to store all the information assocaited with a profile
// Everything in this class is needed to fill in the properties of the card
// One User instances representants one instance in the Users database collection
class User {
  /* One User instances representants one instance in the Users database collection
   * @param UID the unique UID associated with the user
   * @param firstName the first name of the user
   * @param lastName the last name of the user
   * @param pronouns the pronouns of the user
   * @param workouts the workouts the user likes to do 
   * @param availability the aviailabily the user has
   * @param length the length of workout the user likes to do 
   * @param gym the gym the user likes to use
   * @param frequency how often the user wants to attend the gym
   */
  constructor(UID,firstName, lastName, pronouns, workouts, availability, length, gym, frequency) {
    this.UID = UID
    this.firstName = firstName
    this.lastName = lastName
    this.pronouns = pronouns
    this.workouts = workouts
    this.availability = availability
    this.length = length
    this.gym = gym
    this.frequency = frequency
  }
}

  /* Function used to read all enteries in the users collection
   * addes them to one big array of User objects
   * @param db the database associated with our application
   */
async function getAllUsers(db) {
  // get the whole collection
  const snapshot = await getDocs(collection(db, "users"));
  // get each entry 
  snapshot.forEach(doc => {
    // data = doc.data() // get the data on each user
    // //create the user instance of the row
    // const user = new User(doc.id, data.firstname, data.lastname, data.pronouns, data.workouts,
    //                       data.availability, data.length, data.gym, data.frequency)
   // Users.push(user) // add to Users array
    Users.push(doc.data());
    //console.log(doc.id, '=>', doc.data()); //used to print output for debugging
  });
}

getAllUsers(db) // fills in the users array

// fake user image and name for later use
const cardsData = [
  {
    firstName: "Doreamon",
    src: require('../../assets/images/1.png')
  },
  {
    firstName: "Sue",
    src: require('../../assets/images/2.png')
  },
  {
    firstName: "Nobi",
    src: require('../../assets/images/3.png')
  },
  {
    firstName: "Takeshi",
    src: require('../../assets/images/4.png')
  },
];

export default function Feed({ navigation }) {
  //hiding header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  /**
   * ATTENTION:
   * 
   * Any function that returns a interactable component on screen must be 
   * enclosed in a GestureHandlerRootView component as shown below.
   */
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* the card swipping section
        each card is a profile
        all the informations about each card is in Profile.js */}
        <CardsSwipe
          cards={cardsData}
          cardContainerStyle={styles.cardContainer}
          // onSwipedRight={addMatch()}
          // onSwiped={generateUser()}
          renderCard={(card) => (
            <Profile />
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
