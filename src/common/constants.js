import { Dimensions } from "react-native";

export class Constants {
  static vw = (Dimensions.get("window").width - 30) / 375;
  static vh = Dimensions.get("window").height / 667;
}
