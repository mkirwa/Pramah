import React from 'react'
import { View, Text, Image, TouchableOpacity} from "react-native";
import Container from '../../components/common/Container';
import { TextInput } from 'react-native';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { REGISTER } from '../../constants/routeNames';

const LoginComponent = () => {
    //const [value, onChangeText] = React.useState('');
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image 
            height={70} width={70} 
            source={require('../../assets/images/logo001.png')}
            style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to Jipe</Text>
                <Text style={styles.subTitle}>Please Login Here</Text>

                <View styles={styles.form}>
                    <Input
                        label="Username"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        icon={<Text></Text>}
                        placeholder="Enter Username"
                        iconPosition="right"
                        //error={"This field is required!"}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                    />

                    {/*<CustomButton secondary title="Login" loading={true} disabled={true}/>
                    <CustomButton secondary loading title="Click Me"/>
                    <CustomButton danger title="Submit"/>*/}
                    <CustomButton primary title="Submit"/>
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>           
        </Container>
    )
}

export default LoginComponent

