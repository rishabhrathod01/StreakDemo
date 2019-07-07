import React, { PureComponent } from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar
} from "react-navigation";
import { View, Text, TextInput } from "react-native";
import WatchList from "./WatchList";
import Icon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import { Constants } from "../../common/constants";
import { connect } from "react-redux";

class CustomTopTabNavigator extends PureComponent {
  render() {
    // console.warn("CustomTabRendered");

    let routeConfig = {};
    this.props.watchList.map(watch => {
      routeConfig[watch.name] = {
        screen: props => <WatchList {...props} watchList={watch} />
      };
    });

    const TopTabNavigator = createAppContainer(
      createMaterialTopTabNavigator(routeConfig, {
        swipeEnabled: true,
        initialRouteName: this.props.currentWatchList.name,
        tabBarOptions: {
          activeTintColor: "blue",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "#F0F0F0",
            elevation: 0
          },
          indicatorStyle: {
            backgroundColor: "blue",
            margin: 8 * Constants.vw
          },
          tabStyle: {
            height: 70 * Constants.vw
          },
          labelStyle: {
            fontSize: 12
          }
        },
        tabBarComponent: props => (
          <View
            style={{
              backgroundColor: "#F0F0F0",
              height: 100 * Constants.vw,
              marginBottom: 30 * Constants.vw
            }}
          >
            <MaterialTopTabBar {...props} />
            <SearchBar />
          </View>
        )
      })
    );

    return (
      <View style={{ flex: 1 }}>
        <TopTabNavigator />
      </View>
    );
  }
}

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
        <Icon name="ios-search" size={22} />
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
  watchList: state.watchList.watchList,
  currentWatchList: state.watchList.currentWatchList
});

export default connect(mapStateToProps)(CustomTopTabNavigator);

// P1: {
//   screen: props => (
//     <WatchList {...props} watchList={this.props.watchList[0]} />
//   )
// },
// Watch: {
//   screen: props => (
//     <WatchList {...props} watchList={this.props.watchList[1]} />
//   )
// },
// P2: {
//   screen: props => (
//     <WatchList {...props} watchList={this.props.watchList[2]} />
//   )
// },
// WatchList: {
//   screen: props => (
//     <WatchList {...props} watchList={this.props.watchList[3]} />
//   )
