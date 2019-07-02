
import React from 'react';
import { Text, View ,FlatList} from 'react-native';
import StockElement from "./StockElement";

class StockList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stocklist : [{
                id:1,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:2,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:3,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:4,
                name:"SBIN",
                rate:236,
                change:+23, 
            }]
        }
    }
    
    _renderItem = ({item}) => (
        <StockElement 
        item={item}
       />
      );
      _keyExtractor = (item, index) => item.id;

      render() {
        return (
          <FlatList
            data={this.state.stocklist}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        );
      }
}

export default StockList;