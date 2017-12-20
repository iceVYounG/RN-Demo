/**
 * Created by lijun on 2017/8/28.
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
import DownListView from './DownListView';

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


export default class GroupList extends Component {



    constructor (props){
        super(props);
        this.state = {
            listViewShow:false,
        };
    }


    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。

        headerTitle:(
            <TouchableOpacity style={{}} onPress={()=>navigation.state.params.navigatePress()}>
                <View style={styles.naviTitleView}>
                    <Text style={{fontSize:17,color:'#333',fontWeight:'bold'}}>团购</Text>
                    <Image style={{width:12,height:12,resizeMode:'contain',marginLeft:2}}
                           source={require('../resources/down@2x.png')}
                    />
                </View>
            </TouchableOpacity>
        ),
        // headerRight:(
        //     <Text style={{color:'#3390FF',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>更多</Text>
        // ),
        headerLeft:(
            <Image style={{width:20,height:20,resizeMode:'contain',marginLeft:15,}}
                   source={require('../resources/backBtn@2x.png')}
            />
        ),

        headerStyle:{
            backgroundColor:'rgba(255, 255, 255, 1.0)',
        }

    });

    componentDidMount(){
        //在static中使用this方法
        this.props.navigation.setParams({ navigatePress:this._downListShow.bind(this) })
    }


    _renderItem = (item,rowID)=>{
        // return <Text>{item.item.name}</Text>
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
    // _renderHeader = (headerItem) =>{
    //     return <Text>{headerItem.section.key}</Text>
    // }


    _downListShow(){
        // if(this.state.listViewShow == false)
        // {
        //     this.setState({listViewShow: true});
        // }
        // else
        // {
        //     this.setState({listViewShow: false});
        // }
        this.setState({listViewShow: !this.state.listViewShow});
    }

    _pressRow(item){
        // alert("hellow itemName="+item.item.name+"     rowID="+rowID);

        // const navigator = this.props.navigator;
        const { navigate } = this.props.navigation;
        if(navigate)
        {
            // navigate({
            //     name:'GroupDetail',
            //     component:'GroupDetail',
            //     params:{
            //         goodsID:item.item.goodsID,
            //         index:item.index,
            //     },
            // });
            navigate('GroupDetail',{goodsID:item.item.goodsID,index:item.index,callback:(backData)=>{

                    alert('返回回来的商品ID'+backData);

            }});

        }
        // this.props.navigation.navigate('GroupDetail');
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList contentContainerStyle={styles.listStyle}
                             pageSize={2}
                             renderItem={this._renderItem}
                             sections={dataSource}
                             keyExtractor={(item)=>item.key}
                            // columnWrapperStyle={{marginLeft:1}}
                />
                <DownListView listShow={this.state.listViewShow}></DownListView>
            </View>
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
        // justifyContent:'space-around',
        // backgroundColor: '#FFFFFF'
    },
    naviTitleView:{
        flexDirection:'row',
        alignItems:'center',
    },

});