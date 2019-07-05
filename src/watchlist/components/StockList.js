
import React from 'react';
import { Text, View ,FlatList} from 'react-native';
import ListElement from './ListElement';

class StockList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible:false,
            stocklist : [{
                id:1,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:2,
                name:"SBI",
                rate:236,
                change:+23, 
            },{
                id:3,
                name:"ICICI",
                rate:236,
                change:+23, 
            },{
                id:4,
                name:"CANARA",
                rate:236,
                change:+23, 
            },
            {
                id:5,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:6,
                name:"SBI",
                rate:236,
                change:+23, 
            },{
                id:7,
                name:"ICICI",
                rate:236,
                change:+23, 
            },{
                id:8,
                name:"CANARA",
                rate:236,
                change:+23, 
            },{
                id:9,
                name:"CANARA",
                rate:236,
                change:+23, 
            },
            {
                id:10,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:11,
                name:"SBI",
                rate:236,
                change:+23, 
            },]
        }
    }
    
    _renderItem = ({item,index}) => (
           <ListElement 
        item={item}
        toggleModal={this.toggleModal}
       />
     
      );
      _keyExtractor = (item, index) => item.id;
      
      toggleModal = () => {
        this.setState({
          modalVisible:!this.state.modalVisible
        })
      }
      render() {
        return (
            <View>
                <FlatList
            data={this.state.stocklist}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
            </View>
          
        );
      }
}

export default StockList;