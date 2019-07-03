
import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

const StockElement = ({item,time}) => {
    
  return (
        <View
        style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
            <View>
                <View><Text>{item.name}</Text></View>
                <View><Text>ESY</Text></View>
            </View>
            <View>
                <View><Text>{item.rate}</Text></View>
                <View><Text>{item.change}</Text></View>
            </View>
        </View>
        );
      
}

export default StockElement;