import React, { PureComponent } from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar
} from "react-navigation";
import { View } from "react-native";
import WatchList from "./WatchList";
import { Constants } from "../../common/constants";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

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
        // initialRouteName: this.props.currentWatchList.name,
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
            fontSize: 12 * Constants.vw
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

const mapStateToProps = state => ({
  watchList: state.watchList.watchList,
  currentWatchList: state.watchList.currentWatchList
});

export default connect(mapStateToProps)(CustomTopTabNavigator);
