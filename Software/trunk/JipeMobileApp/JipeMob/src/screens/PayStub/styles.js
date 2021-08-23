import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  item:{
    flexDirection: 'row',
    paddingVertical:10,
    paddingHorizontal:20
  },    
  itemText:{
    fontSize:18,
    padding:10,
    height:44,
    textAlign:'center',
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight:20,
    alignItems:'center'
  }
});