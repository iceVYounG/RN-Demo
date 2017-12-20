/**
 * Created by lijun on 2017/8/29.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image,
} from 'react-native';

import GroupDetail from './GroupDetail';
const Screenwidth = require('Dimensions').get('window').width;

const dataSource = [
    {data:[
        {name:'大吧唐BT套餐(两人餐)',goodsID:'11',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A1'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'12',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A2'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'13',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A3'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'14',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A4'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'15',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A5'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A6'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A7'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A8'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A9'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A10'},
        {name:'大吧唐BT套餐(两人餐)',goodsID:'16',price:'159.00',marketPrice:'219.00',soldOutNum:'30',img:'http://',key:'A11'}

    ],key:'A'},
];



export default class PollItemList extends Component {

    constructor (props){
        super(props);
        this.state = {
        };
    }


    _renderItem = (item,rowID)=>{
        return  <TouchableOpacity style={{}} onPress={()=>this._pressRow(item)}>
            <View style={{backgroundColor:'#FFFFFF',height:210,width:((Screenwidth-45)/2),marginTop:10,
                marginLeft:15,flex:1,
            }}>
                <Image style={{width:167,height:167,resizeMode:'cover',backgroundColor:'#111',}}
                       source={require('../resources/timg.jpeg')}
                />
                <Text style={{fontSize:14,marginLeft:0, marginTop:7,color:'#333',width:((Screenwidth-45)/2),fontWeight:'bold',}}>{item.item.name}</Text>
                <View style={{flexDirection:'row',marginTop:-5,alignItems:'baseline',width:((Screenwidth-45)/2),justifyContent:'space-between',}}>
                    <View style={{flexDirection:'row',alignItems:'baseline',}}>
                        <Text style={{fontSize:14,marginLeft:0,marginTop:5,color:'#FD5729'}}>¥108.00</Text>
                        <Text style={{fontSize:10,marginLeft:5,marginTop:5,color:'#aaa',textDecorationLine:'line-through'}}>¥200.00</Text>
                    </View>
                    <Text style={{fontSize:10,marginTop:5, marginRight:0,color:'#aaa'}}>已售30份</Text>
                </View>
            </View>
        </TouchableOpacity>
    }

    _pressRow(item){
        // alert("hellow itemName="+item.item.name+"     rowID="+rowID);

        // const navigator = this.props.navigator;
        const { navigate } = this.props.navigation;
        if(navigate)
        {
            navigate('GroupDetail',{goodsID:item.item.goodsID,index:item.index,callback:(backData)=>{

                alert('返回回来的商品ID'+backData);

            }});
        }
        // this.props.navigation.navigate('GroupDetail');
    }

    render() {
        return (
            <SectionList contentContainerStyle={styles.listStyle}
                         pageSize={2}
                         renderItem={this._renderItem}
                         sections={dataSource}
                         keyExtractor={(item)=>item.key}
                        // style={{height:500,backgroundColor:'#111'}}
            />
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    listStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});