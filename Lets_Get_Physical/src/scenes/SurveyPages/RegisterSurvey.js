import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../styles/Survey.screen.style'

const RegisterSurvey = ({ formData, setFormData }) => {
  return (
    <View>
      {/*<Text>Register Page... VIBES</Text>*/}




      <View>

        <TextInput
          placeholder="First Name"
          placeholderTextColor="#DEDEDE"
          value={formData.firstName}
          onChangeText={(firstName) => {
            setFormData({ ...formData, firstName })
          }}
          style={styles.input}
        />

        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#DEDEDE"
          value={formData.lastName}
          onChangeText={(lastName) => {
            setFormData({ ...formData, lastName })
          }}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#DEDEDE"
          value={formData.email}
          onChangeText={(email) => {
            setFormData({ ...formData, email })
          }}
          style={styles.input}
        />

        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#DEDEDE"
          style={styles.input}
          value={formData.password}
          onChangeText={(password) => {
            setFormData({ ...formData, password })
          }}
          secureTextEntry
        />


        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#DEDEDE"
          style={styles.input}
          // value = {password}
          secureTextEntry
        />
        <TextInput
          placeholder="Preferred Pronouns"
          placeholderTextColor="#DEDEDE"
          value={formData.pronouns}
          onChangeText={(pronouns) => {
            setFormData({ ...formData, pronouns })
          }}
          style={styles.input}
        />

      </View>






    </View>
  );
}

export default RegisterSurvey;
