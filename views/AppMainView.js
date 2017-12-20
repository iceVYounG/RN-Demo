/**
 * Created by lijun on 2017/8/16.
 */


import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';

import Test1 from './fistScene.js';
import Test2 from './twoScene.js';
import Test3 from './thirdScene.js';

import Detail1 from './detailOne';
import Detail2 from './detailTwo';

const ShiTuIcon = require('../resources/ShiTu.png');
const GankIcon = require('../resources/Gank.png');
const MainIcon = require('../resources/Main.png');


const MyTab = TabNavigator({
    Test1: {
        screen: Test1,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分
            headerTitle:'lijunfistDemo',
            headerStyle:{
                backgroundColor:'#4ECBFC'
            },
            headerTitleStyle:{
                fontSize:30,
                color:'white'
            },
            gesturesEnabled:true,

            // TabNavigator 属性部分
            tabBarVisible:true,
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? ShiTuIcon : GankIcon}
                        style={[{height:35,width:35 }, {tintColor: tintColor}]}
                    />
                )
            }),
            tabBarLabel:'111',
        })
    },
    Test2: {
        screen:Test2,
    },
    Test3:{
        screen:Test3,
        navigationOptions: ()=> TabOptions('Test3',MainIcon,MainIcon,'Test3'),
    },
},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled: false,
    lazy:true,
    initialRouteName:'',
    backBehavior:'none',
    tabBarOptions:{
        // iOS属性
        activeTintColor:'red',
        inactiveTintColor:'orange',

        activeBackgroundColor:'blue',
        inactiveBackgroundColor:'green',

        showLabel:true,

       //安卓的属性
        showIcon:true,
        upperCaseLabel:false,


    }

});

// 初始化StackNavigator
const MyNav = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    MyTab:{
        screen:MyTab,
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Detail1:{
        screen:Detail1
    },
    Detail2:{
        screen:Detail2,
    },

},{

});


const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height:35,width:35 }, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:22,color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const tabBarVisible = true;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

export default MyNav;