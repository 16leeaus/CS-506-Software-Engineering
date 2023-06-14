import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from '../styles/Feed.screen.style'
import photo from '../assets/silly_photo.png'

// id might be removed later
// fake data for the sports
const SPORTS = [
  {
    id: '0',
    sport: 'Running',
  },
  {
    id: '1',
    sport: 'Swimming',
  },
  {
    id: '2',
    sport: 'Flying',
  },
  {
    id: '3',
    sport: 'Walking',
  },
  {
    id: '4',
    sport: 'Sleeping',
  },
];
// fake data for the locations
const LOCATIONS = [
  {
    id: '0',
    location: 'Nick',
  },
  {
    id: '1',
    location: 'Lake Area',
  }
];


/**
 * SportItem holder for the flatList
 * Display the sport
 * */
///// START OF SPORT ITEMS
const SportItem = ({ title }) => (
  <View style={styles.bubbleItem}>
    <Text style={styles.bubbleTitle}>{title}</Text>
  </View>
);

const renderSportItem = ({ item }) => (
  <SportItem title={item.sport} />
);
///// END OF SPORT ITEMS

/**
 * LocationItem holder for the flatList
 * Display the sport
 * */
const LocationItem = ({ title }) => (
  <View style={styles.bubbleItem}>
    <Text style={styles.bubbleTitle}>{title}</Text>
  </View>
);

const renderLocationItem = ({ item }) => (
  <LocationItem title={item.location} />
);


const Profile = () => {
  return (

    <View style={styles.profileContainer}>
      {/* header section of the profile card */}
      <View style={{ flexDirection: "row" }}>
        <Image source={photo} style={styles.image} resizeMode={'cover'} />
        <View style={{ padding: 15 }}></View>
        <View>
          <Text style={styles.name}>Jillian</Text>
          <Text style={styles.name}>23</Text>
          <Text style={styles.text}>(She/her)</Text>
        </View>
      </View>

      {/* information section of the profile card */}
      <ScrollView style={{ paddingTop: 20 }}>
        {/* List of Sports */}
        <Text style={[styles.text, { marginLeft: 10 }]}>Sports</Text>
        <FlatList
          // displaying 3 items in each row
          numColumns={3}
          data={SPORTS}
          renderItem={renderSportItem}
          keyExtractor={item => item.id}
        />

        <View style={{ padding: 5 }}></View>

        {/* List of Gyms */}
        <Text style={[styles.text, { marginLeft: 10 }]}>Locations</Text>
        <FlatList
          data={LOCATIONS}
          renderItem={renderLocationItem}
          keyExtractor={item => item.id}
        />

        {/* List of others */}
      </ScrollView>

    </View>
  )
}

export default Profile