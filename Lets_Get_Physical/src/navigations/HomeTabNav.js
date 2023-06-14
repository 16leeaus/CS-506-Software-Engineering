import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../scenes/HomeScenes/Feed';
import Messages from '../scenes/HomeScenes/Messages';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Settings from '../scenes/HomeScenes/Settings';

const Tab = createBottomTabNavigator();

/**
 * Container for navigation to feed page, message page, and settings page.
 *    - Creates a "drawer navigator" available to the user at the bottom of 
 *      the home page main three pages once the user is logged in.
 *    - Users can toggle between these three pages as they wish.
 * 
 * @author Jillian Genova
 * @version 2022.12.12 (Clean ups)
 */
const HomeTabNav = () => {

  return (

    /**
     * Navigation wrapper with initial route on log in --> feed page
     * When an icon is pressed, the current page icon is red
     */
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', // active color when selected: red
      }}
    >
      {/** When feed icon pressed (bottom left) --> navigate to feed page */}
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/** When messaging icon pressed (bottom middle) --> navigate to messaging page */}
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-text" color={color} size={size} />
          ),
        }} />

      {/** When profile/settings icon pressed (bottom right) --> navigate to settings page */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />

    </Tab.Navigator>
  )
}

export default HomeTabNav