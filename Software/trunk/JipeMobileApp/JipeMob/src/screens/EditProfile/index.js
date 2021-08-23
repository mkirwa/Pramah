import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, SafeAreaView } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Container from '../../components/common/Container';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditProfile = () => {

    renderInner = () => (
        <SafeAreaView style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubTitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

    renderHeader = () => (
        <SafeAreaView style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>

                </View>
            </View>
        </SafeAreaView>

    )


    bs = React.createRef();
    fall = new Animated.Value(1);

    return (
        <ScrollView style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0))
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                        <View style={styles.ViewImagebackgroundStyles}>
                            <ImageBackground
                                style={styles.ImageBackgroundStyles}
                                source={require('../../assets/images/avatar.jpeg')}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon
                                        name="camera"
                                        size={35}
                                        color="grey"
                                        style={{
                                            opacity: 0.4,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 0.5,
                                            boarderColor: 'black',
                                            borderRadius: 10
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome5Icon name="user" size={20} />
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome5Icon name="user" size={20} />
                    <TextInput
                        placeholder="Middle Name or Initial"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome5Icon name="user" size={20} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name="phone" size={20} />
                    <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome5Icon name="envelope" size={20} />
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20} />
                    <TextInput
                        placeholder="Street Address"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="city" size={20} />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20} />
                    <TextInput
                        placeholder="State"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20} />
                    <TextInput
                        placeholder="Zip Code"
                        keyboardType="number-pad"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}>Save</Text>
                </TouchableOpacity>
    
            </Animated.View>
        </ScrollView>
    )
}

export default EditProfile;