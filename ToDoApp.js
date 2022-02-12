import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import { theme } from './color';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Wrok</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
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
    color: theme.grey,
    fontSize: 38,
    fontWeight: "600"
  }
});
