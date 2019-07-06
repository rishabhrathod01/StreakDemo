import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { toggleEditScreen } from "../../store/actions/Modal";
import { connect } from "react-redux";
import WatchListDrag from "./WatchListDrag";

class EditWatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.EditScreenVisible}
        onRequestClose={() => {
          this.props.toggleEditScreen();
        }}
      >
        <View style={{ flex: 1, marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>
          </View>
          <WatchListDrag />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  EditScreenVisible: state.modal.EditScreenVisible,
  currentWatchList: state.watchList.currentWatchList
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  toggleEditScreen: () => dispatch(toggleEditScreen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWatchList);
