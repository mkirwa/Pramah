import React from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Container from '../../components/common/Container';
import styles from './styles';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/Fontisto";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { ARRIVAL_BOLS, CARD2_DETAILS, DEPARTURE_BOLS, LOAD_DETAILS, PAYSTUBS, SETTINGS, CARD1_DETAILS } from '../../constants/routeNames';
import Foundation from 'react-native-vector-icons/Foundation';


const SideMenu = ({navigation}) => {

    const menuItems =[
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Card 1 Details", 
        onPress:()=>{
            navigation.navigate(CARD1_DETAILS)
        }},
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Card 2 Details", 
        onPress:()=>{
            navigation.navigate(CARD2_DETAILS)
        }},
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Arrival BOLS", 
        onPress:()=>{
            navigation.navigate(ARRIVAL_BOLS)
        }},
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Departure BOLS", 
        onPress:()=>{
            navigation.navigate(DEPARTURE_BOLS)
        }},
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Paystubs", 
        onPress:()=>{
            navigation.navigate(PAYSTUBS)
        }},
        {icon:<Foundation size={17} name="page"></Foundation>,name:"Loads", 
        onPress:()=>{
            navigation.navigate(LOAD_DETAILS)
        }},
        {icon:<Icon size={17} name="player-settings"></Icon>,name:"Settings", 
        onPress:()=>{
            navigation.navigate(SETTINGS)
        }},
        {icon:<MaterialIcon size={17} name="logout"></MaterialIcon>,name:"Logout"}
    ]

    return (
    <SafeAreaView>
        <Container>
            {/* <Image
                height={10}
                width={10}
                source = {require('../../assets/images/logo.png')}
                style={styles.logoImage}
            /> */}
            <View style={{paddingHorizontal:40},{paddingTop:80}}>
                {menuItems.map(({name,icon, onPress})=>(
                <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                    {icon}
                    <Text style={styles.itemText}>{name}</Text>

                </TouchableOpacity>
                ))}
            </View>
        </Container> 
    </SafeAreaView>);
};


export default SideMenu;