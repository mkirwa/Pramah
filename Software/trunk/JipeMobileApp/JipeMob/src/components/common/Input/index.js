import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles'

const Input = ({
    onChangeText,
    icon,
    iconPosition,
    style,
    value,
    label,
    error,
    ...props
}) => {

    const [focused, setFocused] = React.useState(false);

    const getFlexDirection=()=>{
        if(icon && iconPosition){
            if(iconPosition==='left'){
                return "row";
            }else if(iconPosition==="right"){
                return "row-reverse";
            }
        }
    }



    const getBorderColor=()=>{
        if(focused){
            return colors.primary;
        }
        if(error){
            return colors.danger;
        }else{
            return colors.grey;
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

        <View style={[styles.wrapper, {alignItems:'center',borderColor:getBorderColor(),
             flexDirection: getFlexDirection()}]}>
            <View>{icon && icon}</View>

         <TextInput
                style={[styles.textInput, style]}
                onChangeText={onChangeText}
                value={value}
                onFocus={()=>{setFocused(true)}}
                onBlur={()=>{setFocused(false)}}
                {...props}
            />
        </View>
        {error&&<Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input
