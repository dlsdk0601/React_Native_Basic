/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "tomato"
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500"
  },  
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "teal"
  },
  temp: {
    fontSize: 168,
    marginTop: 50
  },
  description: {
    fontSize: 60,
    marginTop: -30
  }
});

export default App;
