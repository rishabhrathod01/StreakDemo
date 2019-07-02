import React from 'react';
import { Text, View } from 'react-native';


const Header = () =>{
    return(
      <View style={{height:58,width:'100%',justifyContent:"center",margin:10}}>
        <Text style={{fontSize:30,fontWeight:"500",color:"black"}}>MarketWatch</Text>
      </View>
    )
}

export default Header;