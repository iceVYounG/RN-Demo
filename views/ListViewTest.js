/**
 * Created by lijun on 2017/8/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';

export default class ListViewTest extends Component {



    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'列表Demo',
        headerRight:(
            <Text style={{color:'#3390FF',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>更多</Text>
        ),
    });

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
                                    rowHasChanged: (r1, r2) => r1 !== r2,
                                    sectionHeaderHasChanged:  (r1, r2) => r1 !== r2
                                    });

        this.state = {
            // dataSource: ds.cloneWithRows([
            //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            // ])
            // dataSource: ds.cloneWithRows(this._genRows()),
            dataSource: ds.cloneWithRowsAndSections(this._genRows()),
        }
    }

    _genRows(){
        // const dataTitle = {li1:[1,2,3,4,5,6,7,8],li2:[1,2,3,4,5,6,7,8],li3:[1,2,3,4,5,6,7,8]};
        const dataTitle = [];
        for (let j=0;j<3;j++)
        {
            const sectionData = [];
            for(let i=0;i<10;i++)
            {
                sectionData.push('ListViewTest'+i);
            }
            dataTitle.push(sectionData);
        }
        const dictionary = {section0:dataTitle[0],section1:dataTitle[1],section2:dataTitle[2]};
        return dictionary;
    }

    _pressRow(rowID,sectionID){
        alert("hellow rowid="+rowID+"     sectionid="+sectionID);
    }

    _renderRow(rowData, sectionID, rowID){
        return (
            <TouchableOpacity style={{height:50}}  onPress={()=>this._pressRow(rowID,sectionID)}>
                <View style={{backgroundColor:'#dddccc',height:50,borderBottomColor:'#fffddd',borderBottomWidth:1,        justifyContent: 'center',
                }}>
                    <Text>{"rowData="+rowData+"   sectionID="+sectionID+"   rowId="+rowID}</Text>
                </View>
            </TouchableOpacity>
            // <View style={{backgroundColor:'#dddccc',height:50}}>
            //     <Text>{"rowData"+rowData+"   sectionID:"+sectionID+"   rowId:"+rowID}</Text>
            // </View>

        );
    }
    _renderSectionHeader(sectionData,sectionID){
        return(
            <View style={{backgroundColor:'#3340FF',height:20,}}><Text>{sectionID}</Text></View>
        );

    }

    render() {
        return (
            <View style={{flex:1}}>
                <ListView style={{marginTop:0}} dataSource={this.state.dataSource} renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,sectionID,rowID)}
                          renderSectionHeader={(sectionData,sectionID) => this._renderSectionHeader(sectionData,sectionID)}

                          />
            </View>
        );
    }

}