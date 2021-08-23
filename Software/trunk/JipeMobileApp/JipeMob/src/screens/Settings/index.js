import React, { Component } from 'react';
import { View, Button } from "react-native";
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Navigation } from '@material-ui/icons';
import { EDITPROFILE } from '../../constants/routeNames';



const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={require('../../assets/images/avatar.jpeg')}
                        size={80}
                    />

                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5
                        }]}>John Doe</Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="phone" colo="#777777" size={20} />
                    <Text style={{ color: "#77777", marginLeft: 20 }}>+1 888 888 8888</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" colo="#777777" size={20} />
                    <Text style={{ color: "#77777", marginLeft: 20 }}>johndoe@yahoo.com</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" colo="#777777" size={20} />
                    <Text style={{ color: "#77777", marginLeft: 20 }}>17985 Carlson Drive Apt 895 Parker Colorado 80134</Text>
                </View>

                <View style={styles.row}>
                    <Icon name="bank" colo="#777777" size={20} />
                    <Text style={{ color: "#77777", marginLeft: 20 }}>XXXX-XXXX-XXXX-9999</Text>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox,
                    {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Title>$1320</Title>
                        <Caption>Income This Week</Caption>
                    </View>

                    <View style={styles.infoBox}>
                        <Title>2</Title>
                        <Caption>Trips this week</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="car" color="#191970" size={25} />
                            <Text style={styles.menuItemText}>Last Trip</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon1 name="toggle-on" color="green" size={25} />
                            <Text style={styles.menuItemText}>On</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon2 name="sound" color="black" size={25} />
                            <Text style={styles.menuItemText}>Mute</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="account-check-outline" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => navigation.navigate(EDITPROFILE)}>
                        <View style={styles.menuItem}>
                            <Icon name="account-edit" color="Black" size={25} />
                            <Text style={styles.menuItemText}>Edit Profile</Text>
                        </View>
                    </TouchableRipple>
                </View>

            </View>
        </View>
    )
}

export default Settings;