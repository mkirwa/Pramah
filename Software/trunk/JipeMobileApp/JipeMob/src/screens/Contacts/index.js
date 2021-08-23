import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Container from '../../components/common/Container';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import styles from './styles';

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    React.useEffect(() => {
        setOptions({
            headerLeft: () =>
                <TouchableOpacity onPress={() => {
                    toggleDrawer();
                }}>
                    <MaterialIcon style={{ padding: 10 }} size={25} name="menu" />
                </TouchableOpacity>
        })
    }, []);



    return (
        <Container>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 39.7392,
                        longitude: -104.9903,
                        latitudeDelta: 0.5,
                        longitudeDelta: 15,

                    }}

                >
                    <Marker
                        coordinate={{
                            latitude: 39.7392,
                            longitude: -104.9903
                        }}>
                        <Callout tooltip>
                            <Text>Denver Colorado</Text>
                        </Callout>

                    </Marker>

                    <Marker
                        coordinate={{
                            latitude: 47.7511,
                            longitude: -120.7401
                        }}>
                        <Callout tooltip>
                            <Text>Seattle</Text>
                        </Callout>

                    </Marker>

                    <Marker
                        coordinate={{
                            latitude: 34.5199,
                            longitude: -105.8701
                        }}>
                        <Callout tooltip>
                            <Text>Santa Fe</Text>
                        </Callout>

                    </Marker>

                </MapView>
            </View>

        </Container>
    )
}

export default Contacts;