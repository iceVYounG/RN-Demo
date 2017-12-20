/**
 * Created by lijun on 2017/8/17.
 */
import React from  'react';
import {
    Button,
    ScrollView,
    Text,

} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import DingdingMainView from './DingdingMainView';
import Detail1 from './detailOne';
import Detail2 from './detailTwo';
import DailyPage1 from './dailyPage';
import ListViewTest from './ListViewTest';
import FlatListStart from './FlatListStart';
import FetchStart from './FetchStart';
import GroupDetail from './GroupDetail';
import GroupList from './GroupList';
import DownListView from './DownListView';
import PollListView from './PollListView';
import PollItemList from './PollItemList';

const GankIcon = require('../resources/Gank.png');

// const lijunScene = ({navigation,banner})=>(
//
//
//     <ScrollView>
//         <Text>
//             {banner}
//         </Text>
//
//     </ScrollView>
//
//
//
// )



const MyHomeScreen = ({navigation}) => (
    <DingdingMainView
         navigation={navigation}
    />
);

MyHomeScreen.navigationOptions = props => {
    // const {state, setParams} = navigation;
    // const {params} = state;
    return {
        headerTitle: `金诚集团-信息技术部`,
        headerRight: (
            <Button
                title={'跳转'}
                onPress={()=>{
                    const { navigate } = props.navigation;
                    navigate('Detail1');
                    }}
            />
        ),
        headerLeft:(
            <Button
                title={'通知'}
                onPress={()=>{
                    const { navigate } = props.navigation;
                    navigate('Detail1');
                }}
            />
        ),
    };
};




const mainNav = StackNavigator({

    MyMain:{
        screen:MyHomeScreen,
    },
    Detail3:{
        screen:Detail1,
    },
    DailyPage:{
        screen:DailyPage1,
    },
    Detail2:{
        screen:Detail2,
    },
    ListViewTest:{
        screen:ListViewTest,
    },
    FlatListStart:{
        screen:FlatListStart,
    },
    FetchStart:{
        screen:FetchStart,
    },
    GroupDetail:{
        screen:GroupDetail,
    },
    GroupList:{
        screen:GroupList,
    },
    PollListView:{
        screen:PollListView,
    },

},{
    initialRouteName: 'GroupList',
});


// const styles = StyleSheet.create({
//     bannerView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#000000',
//     },
// });

export default mainNav;
