/**
 * Created by lijun on 2017/8/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    FlatList,
    SectionList,
    View,

} from 'react-native';


const dataSource = [
    {data:[{name:'nader'},{name:'chris'}],key:'A'},
    {data:[{name:'nick'},{name:'amanda'}],key:'B'},
    {data:[{name:'hhh'},{name:'ssss'}],key:'C'},
    {data:[{name:'ddd'},{name:'mmm'}],key:'D'},
    {data:[{name:'eee'},{name:'nnn'}],key:'E'},
];

export default class FlatListStart extends Component {

    _renderItem = (item)=>{
        return <Text>{item.item.name}</Text>
    }
    _renderHeader = (headerItem) =>{
        return <Text>{headerItem.section.key}</Text>
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={this._renderItem}
                    sections={dataSource}
                    keyExtractor={(item)=>item.name}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DDDFFF',
    },
});