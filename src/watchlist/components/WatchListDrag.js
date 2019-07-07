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
          height: 70,
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

const Header = props => {
  return (
    <View style={{ height: 40 * Constants.vw, flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          props.toggleScreen();
        }}
        style={{ flex: 1, margin: 10 * Constants.vw }}
      >
        <IIcon name="ios-arrow-round-back" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Text>Edit WatchList</Text>
      </View>
      <View style={{ flex: 1, padding: 10 * Constants.vw }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: props.isStateChanged ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5 * Constants.vw
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

const SearchBar = props => {
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
          padding: 10 * Constants.vw
        }}
      >
        <IIcon name="ios-search" size={22} />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput
          onChangeText={name => props.changeName(name)}
          value={props.name}
          placeholder="edit Name"
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
