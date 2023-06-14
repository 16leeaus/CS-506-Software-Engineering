import { async } from "@firebase/util";
import { collection, onSnapshot, query, getDocs, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaViewComponent, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-web";
import tw from "tailwind-rn";
import ChatRow from "./ChatRow";
import { auth, db } from "../../firebaseConfig";

/**
 * The getUsersList component will get a list of all users (this will be updated
 * to users that have matched with the currently signed in user), this information
 * will then be formatted by being a parameter as a ChatRow object that will return 
 * the information in a horizontal and interactable item. This will then lead to
 * the messaging screen.
 * 
 * @author Austin Lee
 * @version 2022.12.14
 */
const getUsersList = () => {

    // Get the currently signed in user:
    const { currentUser } = auth.currentUser.uid;

    // Loading is initially set as false, and a activity indicator will be shown.
    const [loading, setLoading] = useState(true);

    // Create an array of users and use the useState that will load the data from 
    // the call to the database.
    const [users, setUsers] = useState([]);

    /**
     * Function used to fetch all users and subsequent required data from the
     * database. This information will then be added into an array called users.
     * 
     * TODO: This will need to be modified once the
     * matching component is completed and we get a list of matches for each user.
     * This would be a similar call to the database, however it will use 
     * "users/currentUser/matches" as the new input.
     */
    const fetchUsers = async () => {
        // Get all docs from the "users" collection in the database.
        await getDocs(collection(db, 'users'))
            .then((QuerySnapshot) => {
                // Create a userData object and load the query into it.
                const userData = QuerySnapshot.docs
                    // Map the documents id and associated data appropriately.
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setUsers(userData);

                // Set loading to false and turn off the activity indicator.
                setLoading(false)

                // Log the data to the console for sanity checking:
                console.log(users, userData);
            })
    }

    /**
     * The useEffect will call the fetchUsers function and will allow the useState
     * to load the data into the users array locally.
     */
    useEffect(() => {
        fetchUsers();
    }, [])

    /**
     * Return a flatList of the corresponding users pulled from the database.
     * This will be displayed in a vertical array
     */
    return loading ? (
        // If loading, an activity indicator will be presented to show the status
        // of getting the information.
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#FF5864" />
        </View>
      ) : users.length > 0 ? (
        // If the list of users is greater than 0, they will be displayed in a 
        // FlatList with formatted rows containing the assocaited information.
        // Information will be formatted by a ChatRow object and the return will
        // be displayed here.
        <FlatList
          style={tw("h-full")}
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow userDetails={item} />}
        />
      ) : (
        // If there are no users available, then display this message.
        <View style={tw("p-5")}>
          <Text style={tw("text-center text-lg")}>No matches at the moment 😢</Text>
        </View>
    );
};

export default getUsersList;