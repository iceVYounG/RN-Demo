/**
 * Created by lijun on 2017/8/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    ScrollView,
    TouchableHighlight,
    Image,
    View
} from 'react-native';



const Screenwidth = require('Dimensions').get('window').width;


export default class DingdingMainView extends Component {


    componentWillMount() {


    }

    componentDidMount(){


    }

    // _gotoOhterView:function(ii){
    //
    //     const { navigate } = this.props.navigation;
    //     navigate('Detail1');
    // },

    // const  gotoOtherView = function (ii) {
    //
    //     const { navigate } = this.props.navigation;
    //
    //     return navigate('Detail1');
    //
    // }

    // function gotoOtherView (ii) {
    //
    //     const { navigate } = this.props.navigation;
    //     navigate('Detail1');
    //
    // }

    render() {

        const navigate  = this.props.navigation.navigate;

        const  junpOhterView = function (ii, navigation) {

             navigate('Detail3');

        }

        const  gotoDailyView = function () {

            navigate('DailyPage');

        }


        let appTitleArr = ['签到','考勤打卡','日志','公告','审批','钉邮','钉盘','电话会议'];

        let itemviews = [];

        for(let ii = 0;ii<appTitleArr.length;ii++){
            itemviews.push(
                // <View style={styles.appItemView} key={ii}>
                //     <Image
                //         source={require('../resources/ShiTu.png')}
                //         style={styles.iconImageStyle}
                //     />
                //     <Text style={styles.btnText}>
                //         {appTitleArr[ii]}
                //     </Text>
                // </View>

                <TouchableHighlight style={styles.appItemView} key={ii} onPress={()=>junpOhterView(ii,this.props.navigation)}>
                    <View style={styles.appItemView}>
                        <Image
                            source={require('../resources/ShiTu.png')}
                            style={styles.iconImageStyle}
                        />
                        <Text style={styles.btnText}>
                            {appTitleArr[ii]}
                        </Text>
                    </View>
                </TouchableHighlight>
             );
        }


        return (

            <ScrollView style={styles.container}>

                <View style={styles.headerBanner}>

                </View>

                <View style={styles.headerTools}>


                    <View style={styles.buttonView}>
                        <Text style={styles.stayNum}>
                            0
                        </Text>
                        <Text style={styles.btnText}>
                            待我审批
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Text style={styles.stayNum}>
                            5
                        </Text>
                        <Text style={styles.btnText}>
                            出勤天数
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Image
                            source={require('../resources/ShiTu.png')}
                            style={styles.iconImageStyle}
                         />
                        <Text style={styles.btnText}>
                            报销
                        </Text>
                    </View>
                    <View style={styles.buttonView} onPress={()=>{
                        alert('1111111');
                        navigate('DailyPage');
                    }}>
                        <Image
                            source={require('../resources/ShiTu.png')}
                            style={styles.iconImageStyle}
                        />
                        <Text style={styles.btnText} onPress={()=>{
                            navigate('DailyPage');
                        }}>
                            日报
                        </Text>
                    </View>

                </View>

                <View style={styles.normalApp}>
                    <Text>常用应用</Text>
                    <View style={styles.normalAppItem}>
                        {itemviews}
                    </View>
                </View>

                <View style={styles.moreView}>
                    <Text style={styles.moreText}>+   查看更多</Text>
                    <Text style={styles.arrow}>>  </Text>

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
        // backgroundColor: '#F5FCFF',
    },
    headerBanner: {
        flex: 1,
        backgroundColor: '#000000',
        // width: 100,
        height: 130,
    },
    headerTools:{
        flexDirection:'row',
        backgroundColor: '#dddddd',
        height: 70,

    },
    buttonView:{
        flex:1,
        backgroundColor: '#FF502C',
        borderRightColor:'#FFFFFF',
        borderRightWidth:1,
        alignItems:'center',
    },

    // buttonStyle:{
    //     backgroundColor: '#FF502C',
    //     // width:100,
    //     height:30,
    //     marginTop:50,
    //
    // },
    btnText:{
        fontSize: 11,
        textAlign:'center',
        marginTop:11,
        // backgroundColor:'#999999'

    },
    stayNum:{
        fontSize:20,
        textAlign:'center',
        marginTop:10,
    },
    iconImageStyle:{
        height:34,
        width:34,
        // backgroundColor:'#000000',
        resizeMode:'contain',
     },
    normalApp:{

        backgroundColor:'yellow',
        height:155,
        marginTop:15,
    },
    normalAppItem:{
        flexDirection:'row',
        // backgroundColor:'blue',
        height:150,
        flexWrap:'wrap',

    },
    appItemView:{

        backgroundColor: '#FFFFFF',
        borderRightColor:'#DDDDDD',
        borderRightWidth:1,
        alignItems:'center',
        height:70,
        width:Screenwidth/4,
        borderBottomColor:'#DDDDDD',
        // marginTop:5,
        borderBottomWidth:1,
    },

    moreView:{
        flexDirection:'row',
        backgroundColor:'#dddddd',
        height:30,
        marginTop:15,
        // justifyContent: 'center',
        alignItems:'center',
        justifyContent:'space-between',

    },
    moreText:{
        backgroundColor:'#dddddd',
    },
    arrow:{
        backgroundColor:'#dddddd',

    },

});