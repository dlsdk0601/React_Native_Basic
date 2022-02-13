import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput } from 'react-native';
import { theme } from './color';

export default function App() {

  const [ working, setWorking ] = useState(true);
  const [ text, setText ] = useState("")

  const travel = () => setWorking(false);
  const wrok = () => setWorking(true);
  const onChangeText = (payload) => {
    setText(payload)
  };

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
        onChangeText={onChangeText}
      />
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
    marginTop: 20,
    fontSize: 18
  }
});
