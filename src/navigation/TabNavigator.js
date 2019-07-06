import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Watchlist from "../watchlist/screens/HomeScreen";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

class Orders extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Apps extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Watchlist: {
    screen: Watchlist,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icons name="bookmark-outline" color={tintColor} size={24} />
      )
    })
  },
  Orders: {
    screen: Orders,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icons name="book" color={tintColor} size={24} />
      )
    })
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icons name="face-profile" color={tintColor} size={24} />
      )
    })
  },
  Apps: {
    screen: Apps,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icons name="cube-outline" color={tintColor} size={24} />
      )
    })
  },
  YJ3548: {
    screen: User,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icons name="cube-outline" color={tintColor} size={24} />
      )
    })
  }
});

export default createAppContainer(TabNavigator);
