/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    Alert,
    View
} from 'react-native';

import App from './views/Dingdingtest';



export default class DemoThree extends Component {
  render() {
    return (
        // <View style={styles.container}>
        //     {/*<Text style={styles.welcome}>*/}
        //     {/*Welcome to React Native!*/}
        //     {/*</Text>*/}
        //     {/*<Text style={styles.instructions}>*/}
        //     {/*To get started, edit index.ios.js*/}
        //     {/*</Text>*/}
        //     {/*<Text style={styles.instructions}>*/}
        //     {/*Press Cmd+R to reload,{'\n'}*/}
        //     {/*Cmd+D or shake for dev menu*/}
        //     {/*</Text>*/}
        //
        //     {/*var Button = require('react-native-button');*/}
        //     {/*<Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'orange'}} style={{color: 'green'}} onPress={this._handlePress}> Press Me! </Button>*/}
        //
        //     <TouchableHighlight style={styles.buttonStyle} onPress={
        //         ()=> {
        //             Alert.alert(
        //                 `你点击了按钮`,
        //                 'Hello World！',
        //                 [
        //                     {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
        //                     {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //                     {text: '确定', onPress: () => console.log('OK Pressed')},
        //                 ]
        //             )
        //         }
        //     }>
        //         <Text style={styles.btnStyle}>点我进入主页</Text>
        //     </TouchableHighlight>
        //
        // </View>
        <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    buttonStyle:{
        // margin: 10,
        backgroundColor: 'blue',
        width: 250,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',

    },
    btnStyle:{
        color: '#FFFFFF',
    },
});

AppRegistry.registerComponent('DemoThree', () => DemoThree);
