import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles/Feed.screen.style'
import Profile from '../../components/Profile'

const ProfilePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Profile />

    </View >
  )
}

export default ProfilePage