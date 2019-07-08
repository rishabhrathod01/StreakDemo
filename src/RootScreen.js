import React from "react";
import {
  View,
  Dimensions,
  Text,
  BackHandler,
  Animated,
  PanResponder,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { hideModal } from "./store/actions/Modal";
import TabNavigator from "./navigation/TabNavigator";
import { Constants } from "./common/constants";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class RootScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.closeModal();
    return true;
  };

  componentWillMount() {
    this.animation = new Animated.ValueXY({ x: 0, y: HEIGHT - HEIGHT / 3 });

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        this.animation.extractOffset();
      },
      onPanResponderMove: (event, gestureState) => {
        this.animation.setValue({ x: 0, y: gestureState.dy });
      },
      onPanResponderRelease: (event, gestureState) => {}
    });
  }
  closeModal = () => {
    this.props.hideModal();
    this.animation = new Animated.ValueXY({ x: 0, y: HEIGHT - HEIGHT / 3 });
  };

  render() {
    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    };

    const animatedTouchableHeight = this.animation.y.interpolate({
      inputRange: [0, HEIGHT],
      outputRange: [HEIGHT, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={{ flex: 1 }}>
        <TabNavigator />
        {this.props.modalVisible ? (
          <Animated.View style={[styles.mainAnimatedContainer]}>
            <AnimatedTouchable
              activeOpacity={1}
              style={{ backgroundColor: "rgba(0,0,0,0.2)", height: HEIGHT }}
              onPress={() => {
                this.closeModal();
              }}
            />
            <Animated.View
              {...this.panResponder.panHandlers}
              style={[animatedHeight, styles.animatedContainer]}
            >
              <View style={{ flex: 1 }}>
                <View style={{ padding: 10 * Constants.vw }}>
                  <Text
                    style={{
                      fontSize: 16 * Constants.vw,
                      color: "black"
                    }}
                  >
                    {this.props.item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12 * Constants.vw,
                      color: "black"
                    }}
                  >
                    ESY {this.props.item.rate}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "grey",
                    height: 0.5 * Constants.vw,
                    width: "100%"
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    padding: 30 * Constants.vw
                  }}
                >
                  <View
                    style={{
                      padding: 10 * Constants.vw
                    }}
                  >
                    <TouchableOpacity style={styles.actionButton}>
                      <View>
                        <Text style={{ color: "white" }}>BUY</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      padding: 10 * Constants.vw
                    }}
                  >
                    <TouchableOpacity
                      style={[styles.actionButton, { backgroundColor: "red" }]}
                    >
                      <View>
                        <Text style={{ color: "white" }}>SELL</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    height: 60 * Constants.vw,
    width: 150 * Constants.vw,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5 * Constants.vw
  },
  animatedContainer: {
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
    height: 5 * HEIGHT,
    backgroundColor: "white"
  },
  mainAnimatedContainer: {
    justifyContent: "flex-start",
    height: HEIGHT,
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }
});
const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  item: state.modal.item
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
