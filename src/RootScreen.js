import React from "react";
import {
  View,
  Dimensions,
  Text,
  BackHandler,
  Animated,
  PanResponder,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { hideModal } from "./store/actions/Modal";
import TabNavigator from "./navigation/TabNavigator";

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
          <Animated.View
            style={[
              {
                justifyContent: "flex-start",
                height: HEIGHT,
                zIndex: 10,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
              }
            ]}
          >
            <AnimatedTouchable
              activeOpacity={1}
              style={{ backgroundColor: "rgba(0,0,0,0.2)", height: HEIGHT }}
              onPress={() => {
                this.closeModal();
              }}
            />
            <Animated.View
              {...this.panResponder.panHandlers}
              onPress={() => {}}
              style={[
                animatedHeight,
                {
                  zIndex: 10,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  borderRadius: 10,
                  height: 2 * HEIGHT,
                  backgroundColor: "white"
                }
              ]}
            />
            <View style={{ flex: 1 }}>
              <Text>{this.props.item.name}</Text>
            </View>
          </Animated.View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

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
