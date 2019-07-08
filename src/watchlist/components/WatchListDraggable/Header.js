import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { Constants } from "../../../common/constants";
import IIcon from "react-native-vector-icons/Ionicons";

const Header = props => {
  return (
    <View
      style={{
        height: 50 * Constants.vw,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.toggleScreen();
        }}
        style={{ marginLeft: 10 * Constants.vw }}
      >
        <IIcon name="ios-arrow-round-back" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22 * Constants.vw }}>Edit WatchList</Text>
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

export default Header;
