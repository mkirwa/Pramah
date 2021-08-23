import React from 'react'
import { View, Text, Image, TouchableOpacity} from "react-native";
import Container from '../common/Container';
import { TextInput } from 'react-native';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({
    onSubmit,
    onChange,
    form,
    errors
}) => {
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
                <Text style={styles.subTitle}>Create an Account</Text>

                <View styles={styles.form}>
                  
                    <Input
                        label="First Name"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        icon={<Text></Text>}
                        placeholder="Enter First Name"
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:"firstName",value})
                        }}
                        error={errors.firstName}
                        //error={"This field is required!"}
                    />

                     <Input
                        label="Last Name"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        icon={<Text></Text>}
                        placeholder="Enter Last Name"
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:"lastName",value})
                        }}
                        error={errors.lastName}
                        //error={"This field is required!"}
                    />

                    <Input
                        label="Company Code"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        icon={<Text></Text>}
                        placeholder="Enter Company Code"
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:"companyCode",value})
                        }}
                        error={errors.companyCode}
                        //error={"This field is required!"}
                    />

                    <Input
                        label="Email"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        icon={<Text></Text>}
                        placeholder="Enter Email"
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:"email",value})
                        }}
                        error={errors.email}
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
                        onChangeText={(value)=>{
                            onChange({name:"password",value})
                        }}
                        error={errors.password}
                    />

                    <Input
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:"confirmPassword",value})
                        }}
                        error={errors.confirmPassword}
                    />

                    {/*<CustomButton secondary title="Login" loading={true} disabled={true}/>
                    <CustomButton secondary loading title="Click Me"/>
                    <CustomButton danger title="Submit"/>*/}
                    <CustomButton onPress={onSubmit} primary title="Submit"/>
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>           
        </Container>
    )
}

export default RegisterComponent

