import React, { PureComponent } from "react";
import StockElement from "./StockElement";
import SortableList from "react-native-sortable-list";
import Row from "./Row";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      feed: "feed",
      text: "Search & Add"
    };
  }

  componentDidMount() {
    var ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");

    ws.onopen = () => {
      // connection opened
      var msg = {
        event: "subscribe",
        feed: "heartbeat"
      };
      ws.send(JSON.stringify(msg)); // send a message
    };

    ws.onmessage = e => {
      // a message was received
      console.log(e.data);
      var Apidata = JSON.parse(e.data);
      if (Apidata.feed == "heartbeat") {
        this.setState({ time: Apidata.time, feed: Apidata.feed });
      }
    };

    ws.onerror = e => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = e => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center" }}>
          HeartBeat : {this.state.time}
        </Text>
        <Content />
      </View>
    );
  }
}

class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      feed: "feed",
      text: "Search & Add",
      data: [...Array(20)].map((d, index) => ({
        key: `item-${index}`,
        label: index,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
          5}, ${132})`
      }))
    };
  }

  // _renderRow = ({data, active}) => {
  //     return <Row data={data} active={active} />
  // }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          height: 70,
          backgroundColor: isActive ? "grey" : "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
            // backgroundColor: "blue"
          }}
          onLongPress={move}
          onPressOut={moveEnd}
          delayLongPress={50}
        >
          <Icon name="drag-vertical" size={26} />
        </TouchableOpacity>
        <View style={{ flex: 6 }}>
          <Text>{item.name}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={6}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}

export default WatchList;
