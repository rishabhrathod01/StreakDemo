
import React from 'react';
import { Text, View } from 'react-native';

const StockElement = () => {
    
  return (
        <View style={{flex:1,margin:10,flexDirection:"row",justifyContent:"space-between"}}>
            <View>
                <View><Text>Name</Text></View>
                <View><Text>Company Name</Text></View>
            </View>
            <View>
                <View><Text>Rate</Text></View>
                <View><Text>Change</Text></View>
            </View>
        </View>
        );
      
}

export default StockElement;