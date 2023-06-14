import { Text, View, Image, TouchableOpacity, Switch, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Feed.screen.style'
import photo from '../../assets/silly_photo.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth, db } from '../../../firebaseConfig.js';
import { signOut } from 'firebase/auth';

/**
 * The settings page can be accessed from the drawer navigation at the bottom
 * of the home screen. 
 * 
 * The settings page allows a user to 
 *    1. View and edit their profile by letting them view their current data 
 *       or change survey answers, 
 *    2. Change their notification and app settings
 *    3. Logout or learn more about the app
 * 
 * @author Jillian Genova
 * @version 2022.12.12
 */
const Settings = ({ navigation }) => {

  // state of if a user allows notifications
  // TODO: enable notifications in backend
  const [notificationsEnabled, setNotifications] = useState(true);
  const toggleNotifications = () => setNotifications(previousState => !previousState);

  // state of if a user wishes their profile to be live
  // TODO: disable live profile in backend
  const [liveProfileEnabled, setLiveProfile] = useState(true);
  const toggleLiveProfile = () => setLiveProfile(previousState => !previousState);

  // state for if user hit ? icon --> make text visible
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  // state for if user hits the about button --> make about text visible
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const handleAboutModal = () => setIsAboutVisible(() => !isAboutVisible);


  /**
     * Sign out function. Will get the current user from firebase auth and 
     * then log out the user that is returned.
     * @author Austin Lee
     */
  const signOutNow = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  }


  return (

    // main container for settings page
    <View style={styles.settingsContainer}>

      {/*******************************************************
        * 1. Profile Settings Section:
        *      allows a user to view or edit their profile.
        *******************************************************/}

      {/** 
       * Profile Section Title: "Profile Settings" 
       */}
      <View style={styles.settingsHeaderContainer}>
        <Text style={styles.settingsHeaderText}>Profile Settings</Text>
      </View>


      {/** 
       * View Current Profile: 
       * OnClick --> Navigates to profile page 
       */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
        style={styles.profileRow}
      >
        <View style={styles.rowGroupContainer}>
          {/** View container to keep arrow away from photo and text */}
          <Image source={photo} style={styles.profileImage} resizeMode={'cover'} />
          <Text style={styles.settingsRowText}>View Profile</Text>
        </View>
        <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>


      {/** 
       * Edit Profile: 
       * OnClick --> Navigates to Survey preferences 
       */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile') // TODO: Link to survey! ////////////////
        }}
        style={styles.settingsRow}
      >
        <Text style={styles.settingsRowText}>Edit Profile</Text>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#20232a" />
      </TouchableOpacity>


      {/*******************************************************
        * 2. Application Settings Section:
        *      allows a user to edit their app preferences.
        *******************************************************/}

      {/** 
       * Profile Section Title: "Profile Settings" 
       */}
      <View style={styles.settingsHeaderContainer}>
        <Text style={styles.settingsHeaderText}>Application Settings</Text>
      </View>


      {/** 
       * Allow Notifications: Switch to turn notifications on or off 
       */}
      <View style={styles.settingsRow} >
        <Text style={styles.settingsRowText}>Allow Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#add8e6" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>


      {/** 
       * Enable live profile: Allows a users profile to be seen by other users 
       */}
      <View style={styles.settingsRow} >
        <Text style={styles.settingsRowText}>Enable Live Profile </Text>

        {/** View container to keep text away from icon and switch */}
        <View style={styles.rowGroupContainer}>
          {/** When the ? icon is touched, text will appear notifying the user of the 
            * setting's purpose */}
          <TouchableOpacity
            onPress={() => {
              handleModal();
              console.log("pressed")
            }}>
            <MaterialCommunityIcons name="progress-question"
              size={24} color="purple" style={styles.iconPadding} />
          </TouchableOpacity>

          {/** Toggle if profile is live or not */}
          <Switch
            trackColor={{ false: "#767577", true: "#add8e6" }}
            thumbColor={liveProfileEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleLiveProfile}
            value={liveProfileEnabled}
          />
        </View>
      </View>


      {/**
       * About: provides users with information about the app
       * Links to about application popup (below)
       */}
      <TouchableOpacity
        onPress={() => {
          handleAboutModal();
        }}
        style={styles.settingsRow}
      >
        <Text style={styles.settingsRowText}>About</Text>
      </TouchableOpacity>


      {/**
       * LOG OUT: allows a user to log out of the firebase database so they
       * will have to sign in again when they reopen the app.
       */}
      <TouchableOpacity
        onPress={() => {
          signOutNow();
        }}
        style={styles.settingsRow}
      >
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>


      {/*******************************************************
        * 3. Modal Views:
        *      Renders pop ups when user selects to see them
        *******************************************************/}

      {/** 
       * Enable live profile explaination pop up:
       * ONLY VISIBLE when user presses ? button for live profile
       */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          handleModal();
        }}
      >
        {/** Pop up container with enable live profile explaination */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>
              Enable Live Profile, when turned on, allows your profile to be viewed
              by other users on the app. When deselected, your profile will not be
              visible.
            </Text>
            {/** Remove popup by selecting Hide button */}
            <TouchableOpacity
              style={[styles.bubbleItem, styles.buttonClose]}
              onPress={() => handleModal()}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/** 
       * About application pop up: allows a user to learn more about the app
       * ONLY VISIBLE when user presses the about appliaction row
       */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={isAboutVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          handleAboutModal();
        }}
      >
        {/** Pop up container with about information */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>
              This application was created by UW-Madison students taking CS 506:
              Ana Klabjan, Amanda Burger, Austin Lee, Christopher Kennedy
              Jillian Genova, and Vivian Zhang.
            </Text>
            {/** Remove popup by selecting Hide button */}
            <TouchableOpacity
              style={[styles.bubbleItem, styles.buttonClose]}
              onPress={() => handleAboutModal()}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Settings