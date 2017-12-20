/**
 * Created by lijun on 2017/8/28.
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

const Screenwidth = require('Dimensions').get('window').width;


export default class DownListView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
            listheight: new Animated.Value(0),
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
        let {listShow} = nextProps;


        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.listheight,                      // 动画中的变量值
            {
                toValue:listShow?150:0,                             // 透明度最终变为1，即完全不透明
            }
        ).start();

        // this.setState({listheight:listShow?150:0});
    }

    _genRows(){
        const dataTitle = ['团购','大悦城','万达'];
        return dataTitle;
    }

    _pressRow(rowID,sectionID){
        alert("hellow rowid="+rowID+"     sectionid="+sectionID);
    }

    _renderRow(rowData, rowID){
        return (
            <TouchableOpacity style={{height:50}}  onPress={()=>this._pressRow(rowID)}>
                <View style={{backgroundColor:'#dddccc',height:50,borderBottomColor:'#fffddd',borderBottomWidth:1,        justifyContent: 'center',alignItems:'center',
                }}>
                    <Text>{rowData}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (

            <Animated.View style={{position:'absolute',height:this.state.listheight,width:Screenwidth,}}>
                <ListView style={{marginTop:0}} dataSource={this.state.dataSource} renderRow={(rowData,rowID) => this._renderRow(rowData,rowID)}
                />
            </Animated.View>
        );
    }

}
// const styles = StyleSheet.create({
//
//     listView:{
//         position:'absolute',
//         height:this.props.listHeight?150:0,
//         width:Screenwidth,
//         backgroundColor:'#000'
//     },
// });