# React-Native Basic

<br />

> 정말 배우고 싶었던 React-Native를 시작하게 됐습니다. 기초부터 하나씩 공부해 나갈것이고, 노마드코더의 기본강의를 보고 배운것을 바탕으로 정리하려고합니다. 일단 안드로이드 스튜디오의 설치부터 난관이었다. 그냥 툴 하나 다운받는게 이렇게 어려웠던 적으 처음이다. 

<br />

1. Tag

<br />

Web에서 사용했던 HTML태그는 앱에서는 아무 의미가 없다. 앱에서는 제일 기본이 되는 3가지의 태그 View, Text, Image를 사용한다. 

<br />

```App.js 
    import { View, Text, Image } from "react-native";
    import Img from "상대경로";

    const App = () => {

        return (
            <View>
                <Text>Hello World!!</Text>
                <Image source={require("상대 경로")} />
                <Image source={Img} />
            </View>
        )
    }
```

<br />

View: 제일 기본이 되는 태그이며, Web에서의 div태그와 유사하다고 보면된다. 밑에 갈수록 style 지정하는 방법도 나오겠지만, View는 기본적으로 flex container이다. 

<br />

Text: 스트링을 작성하기 위한 태그이며, Web에서의 p태그와 유사하다고 보면된다. 만약 스트링을 Text가 아닌곳에 작성한다면, 에뮬레이터 오류가 난다. 

<br />

Image: 이미지를 구현하기 위한 태그이며, Web에서 img 태그와 유사하다고 보면된다. 경로를 설정하는 방법은 두가지 이며, 위의 코드 예시를 보면 이해가 쉽다.

<br />
<br />

2. style

<br />

ReactJs처럼 styled-components를 사용하지 않는다. 라이브러리가 존재하기에 사용은 해도될꺼같지만, 통상적으로 StyleSheet를 사용하는거 같다. 
react-native로 부터 StyleSheet를 불러와서 moudle.css처럼 사용한다.

```App.js

    import { View, Text, Image, StyleSheet } from "react-native";
    import Img from "상대경로";

    const App = () => {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello World!!</Text>
                <Image style={styles.img} source={require("상대 경로")} />
                <Image source={Img} />
            </View>
        )
    };

    cosnt styles = StyleSheet.create({
        containter: {
            flex: 1
        },
        text: {
            fontSize: 28
        },
        img: {
            width: 45,
            height: 45
        }
    })

```

<br />

스타일링을 위해 몇가지 규칙이 있다. Web에서 사용하는 css와 매우 유사하기에, 몇가지만 주의하면 무리없이 사용 할수 있다. 

<br />

flex => 기본적으로 Web과는 반대로 colums가 디폴트값이다. 세로 정렬을 원한다면 felxDirection : "row" 를 작성해준다.
그리고 View태그가 flex container이기 때문에, display: "flex"보다는 flex: 1 를 더 많이 쓴다. 1에 해당하는건 화면과 콘텐츠 또는 콘텐츠끼리의 영역을 차지하는 비율이다. 

<br />

```
    <View style-{{flex: 1}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 2}}></View>
        <View style={{flex: 3}}></View>
    </View>
```

<br />

위와 같이 코드를 본다면 자식 요소 3개는 각각 차지하는 영역이 1 : 2 : 3의 비율로 차지하게 된다. 그리고 부모태그에 flex를 1비율로 줬기 때문에, 자식들한테도 스타일링이 적용되지만, 부모한테 지정을 안해준다면 자식을은 비율의 기준을 찾지 못해서 스타일링이 깨진게 된다.

<br />

카멜케이스: justify-content, align-items 와 같이 - 를 이용하여 작성했던 모든 명령은 카멜케이스 형식으로 적어준다. justifyContent, alignItems처럼 적어주면된다.

<br />

3. dev-tools

<br />