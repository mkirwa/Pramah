import React, { Component, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Message from '../../components/common/Message';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";
import { IconButton, Surface } from 'react-native-paper';
import * as ImagePicker from "react-native-image-picker"


const Card1Details = ({ navigation }) => {

    const [images, setImages] = useState([]);

    useLayoutEffect(() => {
        const handleUpload = () => {
            ImagePicker.launchImageLibrary({ maxWidth: 500, maxHeight: 500 }, (response) => {
                if (response.didCancel) {
                    return;
                }

                const img = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName ||
                        response.uri.substr(response.uri.lastIndexof("/") + 1),
                };

                setImages(prevImages => prevImages.concat(image));
            });
        }

        navigation.setOptions({
            headerRight: () => <IconButton icon="plus" onPress={handleUpload} />
        });
    }, [navigation])

    const [cardRef, setCardRef] = useState([
        { name: '2020-12-1 16:52', key: '1' },
        { name: '2020-12-2 16:52', key: '2' },
        { name: '2020-12-3 16:52', key: '3' },
        { name: '2020-12-4 16:52', key: '4' },
        { name: '2020-12-5 16:52', key: '5' },
        { name: '2020-12-6 16:52', key: '6' },
        { name: '2020-12-7 16:52', key: '7' },
        { name: '2020-12-8 16:52', key: '8' },
        { name: '2020-12-9 16:52', key: '9' },
        { name: '2020-12-10 16:52', key: '10' },
        { name: '2020-12-11 16:52', key: '11' },
        { name: '2020-12-12 16:52', key: '12' },
        { name: '2020-12-13 16:52', key: '13' },
        { name: '2020-12-14 16:52', key: '14' },
        { name: '2020-12-15 16:52', key: '15' },
        { name: '2020-12-16 16:52', key: '16' },
        { name: '2020-12-17 16:52', key: '17' },
        { name: '2020-12-18 16:52', key: '18' },
        { name: '2020-12-19 16:52', key: '19' },
        { name: '2020-12-20 16:52', key: '20' }
    ])

    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingVertical: 120, paddingHorizontal: 100 }} >
                <Message info message="NO Card 1 Details Found" />
            </View>)
    }
    return (
        <View style={[{ paddingVertical: 20 }]}>
            {/*             
            <FlatList data={cardRef}
            renderItem={({item}) ListEmptyComponent={ListEmptyComponent} => (
                <Text style={styles.itemText}>{item.name}</Text>
                
            )}
            /> */}

            <FlatList data={cardRef}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                        <Icon name="right" type="ant" />
                    </TouchableOpacity>


                )}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={
                    <View style={{ height: 100 }}>

                    </View>

                }
            />
        </View>
    )
}

export default Card1Details;