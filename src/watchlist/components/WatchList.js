import React from "react";
import { Text, View, FlatList } from "react-native";
import ListElement from "./ListElement";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      watchList: []
    };
  }

  _renderItem = ({ item, index }) => (
    <ListElement
      item={item}
      toggleModal={this.toggleModal}
      currentWatchListKey={this.state.watchList.key}
    />
  );
  _keyExtractor = (item, index) => item.id.toString();

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  componentWillMount() {
    this.setState({
      watchList: this.props.watchList
    });
  }

  static getDerivedStateFromProp(state, props) {
    if (props.watchList.list == state.watchList) {
      return null;
    } else {
      return {
        watchList: props.watchList
      };
    }
  }

  render() {
    // console.warn("watchListrendered", this.state.watchList);
    return (
      <View>
        <FlatList
          data={this.state.watchList.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default WatchList;
