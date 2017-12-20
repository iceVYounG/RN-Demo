/**
 * Created by lijun on 2017/8/29.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Animated,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import PollItemList from './PollItemList';
const Screenwidth = require('Dimensions').get('window').width;


export default class PollListView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            // dataSource: ds.cloneWithRows([
            //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            // ])
            // dataSource: ds.cloneWithRows(this._genRows()),
            dataSource: ds.cloneWithRows(this._genRows()),
            lineLeftMargin:new Animated.Value(13),
            chooseID:0,
        }
    }

    _genRows(){
        // const dataTitle = {li1:[1,2,3,4,5,6,7,8],li2:[1,2,3,4,5,6,7,8],li3:[1,2,3,4,5,6,7,8]};
        const dataTitle = ['悦享优惠','悦动美食','亲子休闲','限时秒杀'];
        return dataTitle;
    }
    _pressRow(sectionID,rowID){
        alert("hellow rowid="+rowID);
        this.setState({chooseID: rbgStr});
        Animated.timing(
            this.state.lineLeftMargin,
            {
                toValue:rowID*(53+20)+10,
            }
        ).start();

    }

    _renderRow(rowData,sectionID,rowID){
        return (
            <TouchableOpacity style={{height:50,marginLeft:10,marginRight:10,width:100,overflow:'visible'}}  onPress={()=>this._pressRow(sectionID,rowID)}>
                <View style={{backgroundColor:'#dddccc',height:500,width:Screenwidth,justifyContent: 'center',flex:1,overflow:'visible'
                }}>
                    <Text style={{fontSize:13,color:'#333',fontWeight:'bold'}}>{rowData}</Text>
                    <PollItemList style={{width:300,height:500,overflow:'visible'}} />

                </View>
            </TouchableOpacity>
            // <View style={{backgroundColor:'#dddccc',height:50}}>
            //     <Text>{"rowData"+rowData+"   sectionID:"+sectionID+"   rowId:"+rowID}</Text>
            // </View>

        );
    }


    render() {
        return (

            // <View style={{flex:1}}>
            //     <ListView style={{marginTop:0,backgroundColor:'#ddd',height:500}} horizontal={true}  dataSource={this.state.dataSource} renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,sectionID,rowID)}
            //     />
            //     <Animated.View style={{width:53,height:2,backgroundColor:'red',marginLeft:this.state.lineLeftMargin}}></Animated.View>
            // </View>
            <View style={{flex:1}}>
                <ScrollableTabView>
                    <PollItemList tabLabel="悦享优惠"/>
                    <PollItemList tabLabel="悦动美食"/>
                    <PollItemList tabLabel="亲子休闲"/>
                    <PollItemList tabLabel="限时秒杀"/>
                </ScrollableTabView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    // lineViewStyle:{
    //     width:53,
    //     height:2,
    //     backgroundColor:'red',
    //     marginLeft:this.state.lineLeftMargin,
    // },

});