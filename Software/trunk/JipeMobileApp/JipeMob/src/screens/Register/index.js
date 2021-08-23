import React, {Component} from 'react';
import {useState} from 'react';
import { View, Text } from "react-native";
import RegisterComponent from '../../components/Signup';

const Registeration = () =>{
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({name, value}) =>{
        setForm({...form,[name]:value});
        if(value !==''){
            if (name==='password'){
                if(value.length<6){
                    setErrors(prev=>{
                        return{...prev,[name]:'Password should be greater than 6 characters!'}
                    });
                }else{
                    setErrors(prev=>{
                        return{...prev,[name]:null};
                    });
                }
            } else{
            setErrors(prev=>{
                return{...prev,[name]:null};
            });
            }
            //added this one here
            if(name==='confirmPassword' ){

                if( form.password !== form.confirmPassword){
                    setErrors(prev=>{
                        return{...prev,[name]:'Passwords should be the same'}
                    });
                }else{
                    setErrors(prev=>{
                        return{...prev,[name]:null};
                    });
                }

            }

        }else{
            setErrors(prev=>{
                return{...prev,[name]:'This field is required'}
            })
        }
        //Check the length of the password here and if email is valid 
        //replace name with the respective values
    }

    const onSubmit =() => {
        //validation
        //console.log('form:>>>>',form)
        if(!form.email){
            setErrors(prev=>{
                return{...prev,email:'Email Cannot be Empty'}
            })
        }
        if(!form.firtName){
            setErrors(prev=>{
                return{...prev,firstName:'First Name Cannot be Empty'}
            })
        }
        if(!form.lastName){
            setErrors(prev=>{
                return{...prev,lastName:'Last Name Cannot be Empty'}
            })
        }

        if(!form.companyCode){
            setErrors(prev=>{
                return{...prev,companyCode:'Company Code Cannot be Empty'}
            })
        }

        if(!form.password){
            setErrors(prev=>{
                return{...prev,password:'Password Cannot be Empty'}
            })
        }

        if(!form.confirmPassword){
            setErrors(prev=>{
                return{...prev,confirmPassword:'Please Confirm Your Password'}
            })
        }

    }
    return(
       <RegisterComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form} 
        errors={errors}/>
    )
}

export default Registeration;