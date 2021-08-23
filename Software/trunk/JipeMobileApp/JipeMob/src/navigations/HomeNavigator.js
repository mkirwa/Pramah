import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from "react-native";
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, LOAD_DETAILS, SETTINGS, CARD1_DETAILS, CARD2_DETAILS, PAYSTUBS, DEPARTURE_BOLS, ARRIVAL_BOLS, EDITPROFILE } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import CreateContacts from '../screens/CreateContact';
import ContactDetails from '../screens/ContactDetail';
import Settings from '../screens/Settings';
import LoadDetails from '../screens/LoadDetail';
import Card1Details from '../screens/Card1Detail';
import Card2Details from '../screens/Card2Detail';
import Paystubs from '../screens/PayStub';
import DepartureBols from '../screens/DepartureBOL';
import ArrivalBols from '../screens/ArrivalBOL';
import EditProfile from '../screens/EditProfile';


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={LOAD_DETAILS} component={LoadDetails}></HomeStack.Screen>

            <HomeStack.Screen name={CARD1_DETAILS} component={Card1Details}></HomeStack.Screen>
            <HomeStack.Screen name={CARD2_DETAILS} component={Card2Details}></HomeStack.Screen>
            <HomeStack.Screen name={PAYSTUBS} component={Paystubs}></HomeStack.Screen>
            <HomeStack.Screen name={DEPARTURE_BOLS} component={DepartureBols}></HomeStack.Screen>
            <HomeStack.Screen name={ARRIVAL_BOLS} component={ArrivalBols}></HomeStack.Screen>


            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts}></HomeStack.Screen>

            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
            <HomeStack.Screen name={EDITPROFILE} component={EditProfile}></HomeStack.Screen>


        </HomeStack.Navigator>
    );
};

export default HomeNavigator;