import {StyleSheet} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
    logoImage:{
       height:70,
       width:90,
       alignSelf:'center',
       marginTop:50
    },

    title:{
        fontSize:21,
        textAlign:'center',
        paddingTop:20,
        fontWeight:'500',
    },

    subTitle:{
        fontSize:17,
        textAlign:'center',
        paddingVertical:20,
        fontWeight:'500'
    },

    form:{
        paddingTop:60
    },
    createSection:{
        paddingTop:20,
        flexDirection:'row'

    },
    infoText:{
        fontSize:17

    },
    linkBtn:{
        paddingLeft:17,
        color: colors.primary,
        fontSize:16
    }
});