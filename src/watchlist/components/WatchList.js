import React from "react";
import { Text, View, FlatList } from "react-native";
import ListElement from "./ListElement";
import { connect } from "react-redux";
import { setCurrentWatchList } from "../../store/actions/WatchList";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setCurrentWatchList = async () => {
    await this.setCurrentWatchList(this.props.watchList.key);
  };

  _renderItem = ({ item, index }) => (
    <ListElement
      item={item}
      toggleModal={this.toggleModal}
      setCurrentWatchList={this.setCurrentWatchList}
    />
  );
  _keyExtractor = (item, index) => item.id.toString();

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.props.watchList.list}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentWatchList: key => dispatch(setCurrentWatchList(key))
});

export default connect(
  null,
  mapDispatchToProps
)(WatchList);
