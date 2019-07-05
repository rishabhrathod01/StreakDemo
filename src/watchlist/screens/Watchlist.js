
import React from 'react';
import { Text, View,StyleSheet,PanResponder,ScrollView,Animated,TouchableHighlight,Dimensions,TouchableOpacity} from 'react-native';
import TopTabNavigator from "../components/TopTabNavigator";
import Header from "../components/Header";
import { connect } from 'react-redux';
import {hideModal} from "../../store/actions/Modal";
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

class Watchlist extends React.Component {
  constructor(props){
    super(props)
    
  }

 
    render() {
      return (
        <View style={{flex:1}}>
        
            <Header/>
            <TopTabNavigator toggleModal={this.toggleModal}/>
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