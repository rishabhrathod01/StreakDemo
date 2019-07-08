import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { showModal, toggleEditScreen } from "../../store/actions/Modal";
import { setcurrentWatchList } from "../../store/actions/WatchListActions";
import { Constants } from "../../common/constants";

class ListElement extends Component {
  setcurrentWatchList = key => {
    this.props.setcurrentWatchList(key);
  };

  longPressHandler = () => {
    this.setcurrentWatchList(this.props.currentWatchListKey);
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
          margin: 15 * Constants.vw,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View>
          <View>
            <Text style={{ fontSize: 14 * Constants.vw, color: "black" }}>
              {item.name}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 * Constants.vw }}>ESY</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={{ fontSize: 16 * Constants.vw, color: "black" }}>
              {item.rate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 * Constants.vw, color: "green" }}>
              {item.change}
            </Text>
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
