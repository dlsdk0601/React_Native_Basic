/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, ScrollViewBase, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import * as Location from "expo-location";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "1aa0cde55707c44d6e9a81d036c3e7ef";


const App = () => {
  
  const [ ok, setOk ] = useState(true);
  const [ city, setCity ] = useState("Loading...");
  const [ days, setDays ] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync(); //사용자에게 위치 추적 허가 맏기
    
    if(!granted){
      setOk(false);
    }
    
    const { coords: { latitude, longtitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 })  //위치를 얼마나 정확하게
    
    const location = await Location.reverseGeocodeAsync({ latitude, longtitude }, {useGoogleMaps: false})
    setCity(location[0].city);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    const json = await res.json();
    setDays(json.daily);
  }

  useEffect( () => {
    getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
        horizontal 
        pagingEnabled 
        contentContainerStyle={styles.weather}
        showsHorizontalScrollIndicator={false}
      >
        {
          days.length === 0 ? 
          <View style={styles.day}>
            <ActivityIndicator color={"white"} size="large" style={{marginTop: 10}} />
          </View>
          :
          days.map( (day, index ) => {
            return (
              <View key={index} style={styles.day}>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].dexcription}</Text>
              </View>
            )
          })
        }
      </ScrollView>
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
    
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 168,
    marginTop: 50
  },
  description: {
    fontSize: 60,
    marginTop: -30
  },
  tinyText: {
    fontSize: 20
  }
});

export default App;














