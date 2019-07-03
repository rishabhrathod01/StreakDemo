
import React from 'react';
import { Text, View } from 'react-native';
import ActionModal from "../components/ActionModal";
import TopTabNavigator from "../components/TopTabNavigator";
import Header from "../components/Header";
import { connect } from 'react-redux';
import {hideModal} from "../../store/actions/Modal";
class Watchlist extends React.Component {
  constructor(props){
    super(props)
    
  }

 
    render() {
      return (
        <View style={{flex:1}}>
        
            <Header/>
            <TopTabNavigator toggleModal={this.toggleModal}/>
             <ActionModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal} ></ActionModal>
        </View>
      );
    }
  }

const mapStateToProps = (state) =>({
  modalVisible : state.modal.modalVisible,
})

const mapDispatchToProps  = (dispatch) => ({
  hideModal :  ()=>dispatch(hideModal()),
})


export default connect(mapStateToProps,mapDispatchToProps)(Watchlist);;