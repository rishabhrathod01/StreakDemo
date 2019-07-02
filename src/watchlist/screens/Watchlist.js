
import React from 'react';
import { Text, View } from 'react-native';
import ActionModal from "../components/ActionModal";
import TopTabNavigator from "../components/TopTabNavigator";
import Header from "../components/Header";

class Watchlist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible:false
    }
  }

  toggleModal = () => {
    this.setState({
      modalVisible:!this.state.modalVisible
    })
  }
    render() {
      return (
        <View style={{flex:1}}>
            <Header/>
            <TopTabNavigator toggleModal={this.toggleModal}/>
            <ActionModal 
              modalVisible={this.state.modalVisible}
              toggleModal={this.toggleModal}
            />
        </View>
      );
    }
  }
export default Watchlist;