
import React,{PureComponent} from 'react';
import { StyleSheet,Platform,Animated,Easing,Dimensions} from 'react-native';
import StockElement from "./StockElement";

const window = Dimensions.get('window');

class Row extends PureComponent {

    constructor(props) {
      super(props);
  
      this._active = new Animated.Value(0);
  
      this._style = {
        ...Platform.select({
          ios: {
            transform: [{
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            }],
            shadowRadius: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 10],
            }),
          },
  
          android: {
            transform: [{
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            }],
            elevation: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 6],
            }),
          },
        })
      };
    }
  
    componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active) {
        Animated.timing(this._active, {
          duration: 400,
          easing: Easing.bounce,
          toValue: Number(nextProps.active),
        }).start();
      }
    }
  
    render() {
     const {data, active} = this.props;
  
      return (
             <Animated.View  
                style={[ styles.row,
                    this._style]}>
                <StockElement item={data} time={this.props.time}></StockElement>
                </Animated.View>
            
       );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
  
      ...Platform.select({
        ios: {
          paddingTop: 20,
        },
      }),
    },
  
    title: {
      fontSize: 20,
      paddingVertical: 20,
      color: '#999999',
    },
  
    list: {
      flex: 1,
    },
  
    contentContainer: {
      width: window.width,
  
      ...Platform.select({
        ios: {
          paddingHorizontal: 10,
        },
  
        android: {
          paddingHorizontal: 0,
        }
      })
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 5,
      height: 80,
      flex: 1,
      marginTop: 7,
    //   marginBottom: 12,
      borderRadius: 4,
  
  
      ...Platform.select({
        ios: {
          width: window.width - 30 * 2,
          shadowColor: 'rgba(0,0,0,0.2)',
          shadowOpacity: 1,
          shadowOffset: {height: 2, width: 2},
          shadowRadius: 2,
        },
  
        android: {
          width: window.width - 10 * 2,
          elevation: 0,
          marginHorizontal: 10,
        },
      })
    },
  
    image: {
      width: 50,
      height: 50,
      marginRight: 30,
      borderRadius: 25,
    },
  
    text: {
      fontSize: 24,
      color: '#222222',
    },
  });

  export default Row;