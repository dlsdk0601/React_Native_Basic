import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './color';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  { Fontisto } from "@expo/vector-icons";  
const STORAGE_KEY = "@toDos";

export default function App() {

  const [ working, setWorking ] = useState(true);
  const [ text, setText ] = useState("")

  const travel = () => setWorking(false);
  const wrok = () => setWorking(true);
  const [ toDos, setToDos ] = useState({}); 
  
  const onChangeText = (payload) => {
    setText(payload)
  };

  const saveToDos = async (toSave) => {
    const obj = JSON.stringify(toSave)
    await AsyncStorage.setItem(STORAGE_KEY, obj);
  }

  const loadToDos = async () => {
    const obj = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(obj));
  }
  
  const addToDo = async () => {
    if(text === ""){
      return;
    }

    const newToDos = {...toDos, [Date.now()]: {text, work: working}}
    setToDos(newToDos);
    saveToDos(newToDos)
    setText("");
  }

  const deleteToDo = async (id) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      {text : "Cancel"},
      {text : "Sure", onPress: () => {
        const newToDo = {...toDos}
        delete newToDo[id]; //객체 지우기
        setToDos(newToDo);
        saveToDos(newToDo);
      }},
    ])
  }

  useEffect( () => {
    loadToDos();
  }, [])

  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={wrok}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Wrok</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>Travel</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.btnText}>Wrok</Text>
        </TouchableOpacity> */}
        {/* <TouchableHighlight
        // 배경색까지 컨트롤 할 수 있다.
          onPress={() => console.log("Pressed")}
          underlayColor={"#DDDDDD"}
          activeOpacity={0}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight> */}
        {/* <TouchableWithoutFeedback> */}
          {/* 버튼에 관해서는 이벤트는 넣을 수 있지만 UI 상 변화가없다, 핸드폰 윗부분에 이벤트가 조절가능 */}
          {/* <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback> */}
      </View>
      <TextInput 
        style={styles.input} 
        placeholder={working ? "Add a To Do" : "Where do you wanna go?"} 
        returnKeyType="Done"
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
      />
      <ScrollView>
        {
          Object.keys(toDos).map(key => (
            toDos[key].work === working ? 
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </TouchableOpacity>
            </View>
            : null 
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between"
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600"
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  }
});
