import React from "react";
import { Text, View } from "react-native";
import { Constants } from "../../common/constants";

const Header = () => {
  return (
    <View
      style={{
        height: 50 * Constants.vw,
        backgroundColor: "#F0F0F0",
        width: "100%",
        justifyContent: "center",
        paddingTop: 15,
        paddingLeft: 15
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "500", color: "black" }}>
        MarketWatch
      </Text>
    </View>
  );
};

export default Header;
