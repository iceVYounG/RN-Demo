/**
 * Created by lijun on 2017/8/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    SectionList,

} from 'react-native';

import Swiper from 'react-native-swiper';

const leftW = 15;
const Screenwidth = require('Dimensions').get('window').width;


const dataSource = [
    {data:[{name:'nader'},{name:'chris'}],key:'A'},
    {data:[{name:'nick'},{name:'amanda'}],key:'B'},
    {data:[{name:'hhh'},{name:'ssss'}],key:'C'},
    {data:[{name:'ddd'},{name:'mmm'}],key:'D'},
    {data:[{name:'eee'},{name:'nnn'}],key:'E'},
];

// const sections=[ // 不同section渲染不同类型的子组件
// {data: [...], key: ..., renderItem: ...},
// {data: [...], key: ..., renderItem: ...},
// {data: [...], key: ..., renderItem: ...},
// ];



export default class GroupDetail extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。

        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'团购详情',
        // headerRight:(
        //     <Text style={{color:'#3390FF',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>更多</Text>
        // ),
        headerLeft:(
            <TouchableHighlight style={{}} onPress={()=>{
                const { goBack } = this.props.navigation;
                goBack();
            }}>
                <Image style={{width:20,height:20,resizeMode:'contain',marginLeft:15}}
                       source={require('../resources/backBtn@2x.png')}
                />
            </TouchableHighlight>
        ),
        // header:null,
        headerStyle:{
            backgroundColor:navigation.state.params.color,
        }

    });

    constructor (props){
        super(props);
        this.state = {
            scrollY: 0,
            navColor:'rgba(255, 255, 255, 0.0)',
        };
    }

    componentDidMount() {
        const {params} =this.props.navigation.state;
        alert(params.index+'传过来的商品ID'+params.goodsID);

     }

    componentWillReceiveProps(nextProps){
        this.props.navigation.setParams({
            color:this.state.scrollY,
        })
        console.log(this.state.scrollY);
        // this.setState({listheight:listShow?150:0});
    }

    _goBack(){
        const {params} =this.props.navigation.state
        const { goBack } = this.props.navigation;
        goBack();
        params.callback(params.goodsID);
        // alert(params.index+'dddddd'+params.goodsID);
        // this.props.navigate.pop();
    }
    // _renderItem = (item)=>{
    //     return <Text>{item.item.name}</Text>
    // }
    _renderItem(item){

        // return <Text style={{backgroundColor:'#3350ff',borderBottomColor:'#000000',borderBottomWidth:1}}>{item.item.name}</Text>
        return <Swiper style={styles.wrapper} height={240} loop={true} index={0} autoplay={true} horizontal={true}      paginationStyle={{
            bottom: 5,
        }} >
                    <View style={{flex:1}}>
                        <Image resizeMode='cover' style={styles.image} source={require('../resources/timg.jpeg')} />
                    </View>

                    <View>
                         <Image resizeMode='cover' style={styles.image} source={require('../resources/timg.jpeg')} />
                    </View>
                </Swiper>
    }

    _renderHeaderTitleView(item){
        return <View style={styles.viewStyle}>

            <Text style={{fontSize:20,marginLeft:leftW,marginTop:5,color:'#333',fontWeight:'bold'}}>虾帮双人午餐(2人餐)</Text>
            <Text style={{fontSize:12,marginLeft:leftW,marginTop:5,color:'#aaa'}}>美味的源头是食材的灵魂</Text>
            <View style={{flexDirection:'row',alignItems:'baseline',justifyContent:'space-between',
            }}>
                <View style={{flexDirection:'row',alignItems:'baseline',}}>
                    <Text style={{fontSize:20,marginLeft:leftW,marginTop:5,color:'#FD5729'}}>¥108.00</Text>
                    <Text style={{fontSize:14,marginLeft:5,marginTop:5,color:'#aaa',textDecorationLine:'line-through'}}>¥200.00</Text>
                </View>
                 <Text style={{fontSize:11,marginTop:5, marginRight:leftW,color:'#aaa'}}>已售 30份</Text>
            </View>
            <View style={{backgroundColor:'#F1F1F1',height:1,marginTop:10,marginLeft:leftW,marginRight:15}}></View>
            <View style={{flexDirection:'row',alignItems:'center',height:40}}>
                <Image resizeMode='cover' style={{width:15,height:15,marginLeft:leftW,marginTop:0}} source={require('../resources/money@2x.png')} />
                <Text style={{fontSize:12,marginLeft:3,marginTop:0,color:'#333'}}>不可退款</Text>
                <Image resizeMode='cover' style={{width:15,height:15,marginLeft:10,marginTop:0}} source={require('../resources/time@2x.png')} />
                <Text style={{fontSize:12,marginLeft:3,marginTop:0,color:'#333'}}>需要预约</Text>
            </View>
        </View>
    }

    _renderShopDescription(item){
        return <View style={{marginTop:10,flex:1, backgroundColor:'white',height:145}}>

            <Text style={{fontSize:16,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>商家信息</Text>
            <View style={{backgroundColor:'#F1F1F1',height:1,marginTop:15,marginLeft:leftW,marginRight:15}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,
            }}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Image resizeMode='cover' style={{width:25,height:25,marginLeft:10,marginTop:0}} source={require('../resources/location@2x.png')} />
                    <Text style={{fontSize:14,color:'#333'}}>无锡金诚大悦度假酒店</Text>
                </View>
                <Image resizeMode='cover' style={{width:10,height:14,marginRight:leftW,marginTop:0}} source={require('../resources/nextBtn.png')} />

            </View>
            <View style={{backgroundColor:'#F1F1F1',height:1,marginTop:15,marginLeft:leftW,marginRight:15}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10,
            }}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Image resizeMode='cover' style={{width:25,height:25,marginLeft:10,marginTop:0}} source={require('../resources/iphone@2x.png')} />
                    <Text style={{fontSize:14,color:'#333'}}>2333-233-233</Text>
                </View>
                <Text style={{fontSize:13,color:'#FD5729',marginRight:leftW}}>立即预约</Text>
            </View>
        </View>
    }

    _renderGoodsDescription(item){
        return <View style={{marginTop:10,flex:1, backgroundColor:'white',height:290}}>
            <Text style={{fontSize:16,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>商品内容</Text>
            <View style={{backgroundColor:'#F6F6F6',marginLeft:15,marginTop:15,marginRight:15,height:230}}>
                <Text style={{fontSize:14,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>- 招牌小龙虾（4选1）-</Text>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>蒜蓉小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>麻辣小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>十三香小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>冬阴功小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>

                <Text style={{fontSize:14,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>- 招牌小龙虾（4选1）-</Text>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>蒜蓉小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>
                <View style={styles.goodsViewItem}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',width:Screenwidth/2}}>
                        <Text style={styles.goodsTextStyle}>麻辣小龙虾</Text>
                        <Text style={styles.goodsTextStyle}>1份</Text>
                    </View>
                    <Text style={styles.goodsTextStyle}>¥88.00</Text>
                </View>
            </View>

        </View>
    }

    _renderPaynotes(item){
        return <View style={{marginTop:10,flex:1, backgroundColor:'white',}}>
            <Text style={{fontSize:16,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>购买须知</Text>
            <View style={{backgroundColor:'#F1F1F1',height:1,marginTop:15,marginLeft:leftW,marginRight:15}}></View>
            <Text style={{fontSize:13,color:'#333',marginTop:15,marginLeft:10,marginRight:10,marginBottom:5}}>·使用时间：2017.6.14 至 2017.8.13(周末、法定节假日通用)</Text>
            <Text style={styles.payNotesStyle}>·使用时段：10:00-22:00</Text>
            <Text style={styles.payNotesStyle}>·无需预约，消费高峰时可能需要等位</Text>
            <Text style={styles.payNotesStyle}>·堂食外带均可，可以打包，打包费详情咨询商家</Text>
        </View>
    }
    _renderGoodImageDetail(item){
        return <View style={{marginTop:10,flex:1, backgroundColor:'white',height:300}}>
            <Text style={{fontSize:16,marginTop:15,color:'#333',fontWeight:'bold',textAlign:'center'}}>图文详情</Text>

        </View>
    }


    _changeScroll(e){
        let scrollY = e.nativeEvent.contentOffset.y;
        let rbgStr = 'rgba(255,255,255,0)';
        if(scrollY<=0)
        {
            rbgStr = 'rgba(255,255,255,0)';
            this.setState({navColor: rbgStr});

        }
        if(scrollY<=128&&scrollY>0)
        {
            rbgStr = 'rgba(255,255,255,'+(scrollY/128.0)+')';
            this.setState({navColor: rbgStr});
        }
        if(scrollY>128)
        {
            rbgStr = 'rgba(255,255,255,1.0)';
            this.setState({navColor: rbgStr});
        }
        // console.log(rbgStr);
        // alert(this.state.navColor);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
                <SectionList
                    sections={[
                        {data:[{name:'nader'}], key:'HeaderAD', renderItem:this._renderItem},
                        {data:[{name:'nader'}], key:'HeaderBD', renderItem:this._renderHeaderTitleView},
                        {data:[{name:'nader'}], key:'HeaderCD', renderItem:this._renderShopDescription},
                        {data:[{name:'nader'}], key:'HeaderDD', renderItem:this._renderGoodsDescription},
                        {data:[{name:'nader'}], key:'HeaderED', renderItem:this._renderPaynotes},
                        {data:[{name:'nader'}], key:'HeaderFD', renderItem:this._renderGoodImageDetail},


                    ]}
                    keyExtractor={(item)=>item.name}

                    onScroll={this._changeScroll.bind(this)}

                    contentContainerStyle = {{backgroundColor:'#3350ff',}}
                    style={{marginBottom:55,marginTop:-64}}
                />
                {/*<View style={{backgroundColor:this.state.navColor,height:60,position:'absolute',width:Screenwidth}}>*/}
                    {/*<TouchableHighlight style={{width:20,height:20,marginLeft:15,marginTop:30}} key={'kkk'} onPress={()=>this._goBack()}>*/}
                        {/*<Image style={{width:20,height:20,resizeMode:'contain'}}*/}
                               {/*source={require('../resources/backBtn@2x.png')}*/}
                        {/*/>*/}
                    {/*</TouchableHighlight>*/}
                {/*</View>*/}
                <View style={{backgroundColor:'#FD5729',height:55,position:'absolute',bottom:0,width:Screenwidth}}>
                    <TouchableHighlight style={{height:55}} key={'kkk'} onPress={()=>null}>
                        <Text style={{fontSize:18,color:'#fff',textAlign:'center',marginTop:15,fontWeight:'bold'}}>立即购买</Text>
                    </TouchableHighlight>
                </View>


            </View>
        );
    }

}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:240,

    },
    wrapper:{
    },
    viewStyle:{
        flex:1,
        backgroundColor:'white',
    },
    goodsTextStyle:{
        color:'#333',
        fontSize:13,
        textAlign:'center',
        marginLeft:10,
        marginRight:10,
    },
    goodsViewItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    payNotesStyle:{
        fontSize:13,
        color:'#333333',
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
    }
});