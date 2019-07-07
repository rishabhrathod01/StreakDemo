import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { showModal, toggleEditScreen } from "../../store/actions/Modal";
import { setcurrentWatchList } from "../../store/actions/WatchListActions";

class ListElement extends Component {
  setcurrentWatchList = key => {
    // console.warn("set Current watchlist ", key);
    this.props.setcurrentWatchList(key);
  };

  longPressHandler = () => {
    this.setcurrentWatchList(this.props.currentWatchListKey);
    // console.warn(this.props.currentWatchListKey);
    this.props.toggleEditScreen();
  };
  render() {
    let item = this.props.item;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.showModal(item);
        }}
        onLongPress={() => {
          this.longPressHandler();
        }}
        delayLongPress={400}
        style={{
          flex: 1,
          margin: 15,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View>
          <View>
            <Text>{item.name}</Text>
          </View>
          <View>
            <Text>ESY</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>{item.rate}</Text>
          </View>
          <View>
            <Text>{item.change}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible
});

const mapDispatchToProps = dispatch => ({
  showModal: item => dispatch(showModal(item)),
  toggleEditScreen: () => dispatch(toggleEditScreen()),
  setcurrentWatchList: key => dispatch(setcurrentWatchList(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListElement);
