import React,{Component} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import {connect} from "react-redux";
import {showModal} from "../../store/actions/Modal";

class ListElement extends Component{
    render(){
        let item = this.props.item;
        return (
              <TouchableOpacity
              onPress={()=>{this.props.showModal(item)}} 
              style={{flex:1,margin:10,flexDirection:"row",justifyContent:"space-between"}}>
                  <View>
                      <View><Text>{item.name}</Text></View>
                      <View><Text>ESY</Text></View>
                  </View>
                  <View>
                      <View><Text>{item.rate}</Text></View>
                      <View><Text>{item.change}</Text></View>
                  </View>
              </TouchableOpacity>
              );
    }
}


const mapStateToProps = (state) =>({
    modalVisible : state.modal.modalVisible,
  })
  
  const mapDispatchToProps  = (dispatch) => ({
    showModal :  (item)=>dispatch(showModal(item)),
  })
  
export default connect(mapStateToProps,mapDispatchToProps)(ListElement);