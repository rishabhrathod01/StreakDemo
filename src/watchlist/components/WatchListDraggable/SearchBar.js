import React, { Component } from "react";

import { View, Text, TextInput } from "react-native";
import { Constants } from "../../../common/constants";
import IIcon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";

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

export default SearchBar;
