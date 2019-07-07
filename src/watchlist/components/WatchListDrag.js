import React, { Component } from "react";

import { View, TouchableOpacity, Text, TextInput } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Constants } from "../../common/constants";
import IIcon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import { connect } from "react-redux";
import { toggleEditScreen } from "../../store/actions/Modal";
import { updateList } from "../../store/actions/WatchListActions";

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      feed: "feed",
      text: "Search & Add",
      watchList: [],
      isStateChanged: false
    };
  }

  componentWillMount() {
    this.setState({
      watchList: this.props.currentWatchList
    });
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View
        key={item.id}
        style={{
          flex: 1,
          height: 70,
          backgroundColor: isActive ? "grey" : "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          toggleScreen={this.props.toggleEditScreen}
          isStateChanged={this.state.isStateChanged}
          updateList={this.updateList}
        />
        <SearchBar />
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

  updateList = () => {
    this.props.updateList(this.state.watchList);
    this.props.toggleScreen();
  };
}

const Header = props => {
  return (
    <View style={{ height: 50 * Constants.vw, flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          props.toggleScreen();
        }}
        style={{ flex: 1 }}
      >
        <IIcon name="ios-arrow-round-back" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 4 }}>
        <Text>Edit WatchList</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: props.isStateChanged ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center"
          }}
          disabled={!props.isStateChanged}
          onPress={() => {
            props.updateList();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View
      style={{
        height: 50 * Constants.vw,
        elevation: 1,
        borderRadius: 2 * Constants.vw,
        marginLeft: 15 * Constants.vw,
        marginRight: 15 * Constants.vw,
        padding: 5 * Constants.vw,
        backgroundColor: "#FAFAFA",
        flexDirection: "row"
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IIcon name="ios-search" size={22} />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput
          // onChangeText={text => this.setState({ text })}
          // value={this.state.text}
          placeholder="Search & Add"
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 12 * Constants.vw, fontWeight: "100" }}>
          45/50
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <OIcon name="settings" size={22} />
      </View>
    </View>
  );
};

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
