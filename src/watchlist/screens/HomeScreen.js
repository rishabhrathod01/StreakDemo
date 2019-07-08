import React from "react";
import { Text, View, PanResponder, Animated, Dimensions } from "react-native";
import TopTabNavigator from "../components/TopTabNavigator";
import Header from "../components/Header";
import { connect } from "react-redux";
import { hideModal } from "../../store/actions/Modal";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
import EditWatchList from "../components/EditWatchList";
import CustomTopTabNavigator from "../components/TopTabNavigator";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditScreenVisible: false
    };
  }

  toggleEditScreen = () => {
    this.setState({
      EditScreenVisible: !this.state.EditScreenVisible
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        {/* <TopTabNavigator toggleModal={this.toggleModal} /> */}
        <CustomTopTabNavigator />
        <EditWatchList
          isVisible={this.state.EditScreenVisible}
          toggleScreen={this.toggleEditScreen}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  EditScreenVisible: state.modal.EditScreenVisible
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  toggleEditScreen: () => dispatch(toggleEditScreen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
