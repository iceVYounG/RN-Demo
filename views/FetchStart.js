/**
 * Created by lijun on 2017/8/23.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';

export default class FetchStart extends Component {


    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Fetch网络请求&state用法',

    });

    constructor(props) {
        super(props);
        this.state={
            movieTitle : '',
            moveDescription:'',
            animating: false,

        }
    }

    // _requestBoolDetail =  () =>{
    _requestBookDetail (){
        this.setState({animating:true});

        fetch('https://facebook.github.io/react-native/movies.json',{
                     method:'GET',
                     header:{},
             }).then((response) => response.json()).then((responseJson) => {

                // alert(JSON.stringify(responseJson));
                let jsonStr =  JSON.stringify(responseJson);
                let jsonObj = JSON.parse(jsonStr);
                this.setState({movieTitle: jsonObj.title});
                this.setState({moveDescription: jsonObj.description});
                this.setState({animating:false});

        }).catch((error)=>{

            alert(error);

        });

    }

    render() {
        return (
            <View style={{backgroundColor:'#dddccc',flex:1}}>
                 <TouchableHighlight style={{height:80,backgroundColor:'#3350ff'}} onPress={this._requestBookDetail.bind(this)}>
                     <Text>Hello world{this.state.movieTitle} {this.state.moveDescription}!</Text>
                 </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
});