import React, { Component } from "react";

import { View, TouchableOpacity, Text, TextInput } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Constants } from "../../../common/constants";
import IIcon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import { connect } from "react-redux";
import { toggleEditScreen } from "../../../store/actions/Modal";
import { updateList } from "../../../store/actions/WatchListActions";
import Header from "./Header";
import SearchBar from "./SearchBar";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.currentWatchList.name,
      watchList: [],
      isStateChanged: false
    };
  }

  componentWillMount() {
    this.setState({
      watchList: this.props.currentWatchList,
      isStateChanged: false
    });
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View
        key={item.id}
        style={{
          flex: 1,
          height: 70 * Constants.vw,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          elevation: isActive ? 2 : 0
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
            // backgroundColor: "blue"
          }}
          onLongPress={move}
          onPressOut={moveEnd}
          delayLongPress={50}
        >
          <Icon name="drag-vertical" size={26} />
        </TouchableOpacity>
        <View style={{ flex: 6 }}>
          <Text>{item.name}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  };

  changeName = name => {
    this.setState({
      watchList: { ...this.state.watchList, name: name },
      isStateChanged: true
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          toggleScreen={this.props.toggleEditScreen}
          isStateChanged={this.state.isStateChanged}
          updateList={this.updateList}
        />
        <SearchBar
          name={this.state.watchList.name}
          changeName={this.changeName}
        />
        <DraggableFlatList
          data={this.state.watchList.list}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id.toString()}
          scrollPercent={6}
          onMoveEnd={({ data }) => {
            // console.warn(data);
            this.setState({
              isStateChanged: true,
              watchList: { ...this.state.watchList, list: data }
            });
          }}
        />
      </View>
    );
  }

  updateList = async () => {
    await this.props.updateList(this.state.watchList);
    this.props.toggleScreen();
  };
}

const mapStateToProps = state => ({
  currentWatchList: state.watchList.currentWatchList
});

const mapDispatchToProps = dispatch => ({
  toggleEditScreen: () => dispatch(toggleEditScreen()),
  updateList: list => dispatch(updateList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
