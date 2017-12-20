/**
 * Created by lijun on 2017/8/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    View,
    Image,
    TouchableHighlight,

} from 'react-native';

const Screenwidth = require('Dimensions').get('window').width;


export default class DailyPage1 extends Component{

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'日报',
        headerRight:(
            <Text style={{color:'#3390FF',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>更多</Text>
        ),
    });

    componentDidMount(){

    }

    navigatePress = () => {
        alert('点击headerRight');
    }


    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.headerBanner}>
                    <Text style={styles.frontText}>今日完成工作</Text>

                    <TextInput style={styles.intputTextStyle}  placeholder={'请填写文字'} placeholderTextColor="#dddddd"/>
                </View>

                <View style={styles.headerBanner}>
                    <Text style={styles.frontText}>未完成工作</Text>

                    <TextInput style={styles.intputTextStyle}  placeholder={'请填写文字'} placeholderTextColor="#dddddd"/>
                </View>
                <View style={styles.headerBanner}>
                    <Text style={styles.frontText}>需要协调</Text>

                    <TextInput style={styles.intputTextStyle}  placeholder={'请填写文字'} placeholderTextColor="#dddddd"/>
                </View>

                <View style={styles.remarkView}>
                    <TextInput style={styles.remarkViewInput}  placeholder={'备注'} placeholderTextColor="#dddddd"/>
                </View>

                <View style={styles.headerBanner}>
                    <Text style={styles.frontText}>图片</Text>
                    <Image
                        source={require('../resources/ShiTu.png')}
                        style={styles.iconImageStyle}
                    />
                </View>

                <View style={styles.headerBanner}>
                    <Text style={styles.frontText}>附件</Text>
                    <Image
                        source={require('../resources/ShiTu.png')}
                        style={styles.iconImageStyle}
                    />
                </View>
                <View style={styles.distanceView}>
                    <Image
                        source={require('../resources/ShiTu.png')}
                        style={styles.distanceIconStyle}
                    />
                    <Text style={styles.distanceText}>新城花园酒店</Text>
                </View>

                <View style={styles.choosePopleView}>
                    <View style={styles.chooseTitleView}><Text>发给谁</Text><Text style={styles.deleteIcon}>(点击头像删除)</Text></View>
                    <Image
                        source={require('../resources/ShiTu.png')}
                        style={styles.choosePopleIcon}
                    />
                    <Text style={{fontSize:12,marginLeft:5}}>添加人员</Text>
                </View>

                <View style={{height:80,backgroundColor:'#dddccc'
                }}>
                    <Image
                        source={require('../resources/ShiTu.png')}
                        style={styles.choosePopleIcon}
                    />
                    <Text style={{fontSize:12,marginLeft:5}}>  选择群</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.appItemView}>
                        <Text style={{marginTop:10,color:'#FFFFFF',fontSize:17}}>提交</Text>
                    </TouchableHighlight>
                </View>


            </ScrollView>
        );
    }


}




const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    frontText:{
        marginTop:13,
        marginLeft:10,
    },
    headerBanner:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:40,
        backgroundColor:'#dddccc',
        borderBottomColor:'#000000',
        borderBottomWidth:1,

    },
    intputTextStyle:{
        width:Screenwidth-100,
        height:39,
        backgroundColor:'#aaaaaa',
        fontSize:14,

    },
    remarkView:{
        height:75,
        backgroundColor:'#666541',


    },
    remarkViewInput:{
        width:Screenwidth,
        height:40,
        // backgroundColor:'#aaaaaa',
        fontSize:14,
        marginLeft:10,

    },
    iconImageStyle:{
        height:20,
        width:20,
        resizeMode:'contain',
        marginTop:10,
        marginRight:5,
    },
    distanceView:{
        flexDirection:'row',
        height:40,
        backgroundColor:'#dddddd',
        borderBottomColor:'#000000',
        borderBottomWidth:1,
    },
    distanceIconStyle:{
        height:10,
        width:10,
        resizeMode:'contain',
        marginTop:5,
        marginLeft:10,
    },
    distanceText:{
        marginTop:5,
        fontSize:10,
        marginLeft:3,
    },
    chooseTitleView:{
        flexDirection:'row',
        height:20,

    },
    choosePopleIcon:{
        height:40,
        width:40,
        resizeMode:'contain',
        marginTop:5,
        marginLeft:10,
    },
    choosePopleView:{
        height:100,
        backgroundColor:'#dddccc',
        borderBottomColor:'#000000',
        borderBottomWidth:1,
    },
    deleteIcon:{
        fontSize:10,
        marginTop:3,
    },
    appItemView:{

        backgroundColor: '#3390FF',
        borderRightColor:'#DDDDDD',
        borderRightWidth:1,
        alignItems:'center',
        height:40,
        width:Screenwidth-20,
        borderBottomColor:'#DDDDDD',
        // marginTop:5,
        borderBottomWidth:1,
        borderRadius:5,

    },
    buttonView: {

        flexDirection:'row',
        height:40,
        // backgroundColor:'#dddccc',
        marginTop:10,
        justifyContent:'center',
    },

});