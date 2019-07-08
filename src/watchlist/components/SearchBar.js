import React, { PureComponent } from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import { Constants } from "../../common/constants";

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

export default SearchBar;
