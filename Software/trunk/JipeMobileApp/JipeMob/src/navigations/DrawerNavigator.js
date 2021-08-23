import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { SafeAreaView, Text, Image } from 'react-native';
import Container from '../components/common/Container';
import styles from '../components/common/Container/styles';
import SideMenu from './SideMenu';


const getDrawerContent = (navigation)=>{
    return (<SideMenu navigation={navigation}/>);
}

const DrawerNavigator = () =>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerType="front" drawerContent={({navigation})=>getDrawerContent(navigation)}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;