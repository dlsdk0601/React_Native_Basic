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
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// 스크린 width값

const API_KEY = "1aa0cde55707c44d6e9a81d036c3e7ef";

const icons = {
  Clear: "day-sunny",
  Clouds: "cloudy",
  Rain: "rain",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "day-rain",
  Thunderstorm: "lightning",
}

const App = () => {
  
  const [ ok, setOk ] = useState(true);
  const [ city, setCity ] = useState("Loading...");
  const [ days, setDays ] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync(); 
    //사용자에게 위치 추적 허가 맏기
    
    if(!granted){
      setOk(false);
    }
    
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 })  
    //getCurrentPositionAsync 지금 위치의 위도와 경도를 나타냄
    //accuracy 위치를 얼마나 정확하게
    
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, {useGoogleMaps: false})  
    //위도와 경도를 통해서 지금 위치한 곳의 도시 이름을 reverseGeocodeAsync 통해서 알수 있음

    setCity(location[0].city);

    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    //위도와 경도로 오늘의 날씨 알려주는  api
    
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
            {/* 로딩중을 나타내는 액션 */}
          </View>
          :
          days.map( (day, index ) => {
            return (
              <View key={index} style={styles.day}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                  <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                  <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                </View>

                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
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
  fontSize: 58,
  fontWeight: "500",
  color: "white",
},
weather: {},
day: {
  width: SCREEN_WIDTH,
  alignItems: "center",
  alignItems: "flex-start",
  paddingHorizontal: 20,
},
temp: {
  marginTop: 50,
  fontWeight: "600",
  fontSize: 178,
  fontSize: 100,
  color: "white",
},
description: {
  marginTop: -30,
  fontSize: 60,
  marginTop: -10,
  fontSize: 30,
  color: "white",
  fontWeight: "500",
},
tinyText: {
  fontSize: 20,
  marginTop: -5,
  fontSize: 25,
  color: "white",
  fontWeight: "500",
},
});

export default App;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 













