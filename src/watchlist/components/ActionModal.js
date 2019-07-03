import React, {Component} from 'react';
import {Modal, Text, View, Alert,TouchableHighlight,Dimensions,TouchableOpacity} from 'react-native';
const {h} = Dimensions.get('window').height;

import {connect} from "react-redux";
class ActionModal extends Component {
  
  render() {
   return (
        <Modal
        style={{flex:1}}
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.hideModal();
          }}>
          <TouchableHighlight onPress={()=>{this.props.hideModal()}} style={{flex:1,backgroundColor:"transparent"}}>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity onPress={()=>{}} style={{borderRadius:10,elevation:1,height:"30%",backfaceVisibility:"visible",backgroundColor:"white"}}>
                <View style={{justifyContent:"space-evenly",alignItems:"center"}} >
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:30}}>{this.props.item.name} </Text>
                  <Text style={{fontSize:30}}>{this.props.item.rate}  </Text>
                </View>
                  <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:30}}>BUY </Text>
                    <Text style={{fontSize:30}}>SELL  </Text>
                  </View>
                  </View>
            </TouchableOpacity>
            </View>
          </TouchableHighlight>
        </Modal>
    );
  }
}



const mapStateToProps = (state) =>({
  modalVisible : state.modal.modalVisible,
  item : state.modal.item
})


export default connect(mapStateToProps)(ActionModal);