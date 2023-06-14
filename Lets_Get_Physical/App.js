import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/scenes/LoginScreen';
import HomeTabNav from './src/navigations/HomeTabNav';
import RegisterScreen from './src/scenes/SurveyPages/RegisterScreen';
import SurveyFormNav from './src/navigations/SurveyFormNav';
import ProfilePage from './src/scenes/HomeScenes/ProfilePage'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Survey" component={SurveyFormNav} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Home" component={HomeTabNav} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});