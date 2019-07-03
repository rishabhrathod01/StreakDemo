
import React,{PureComponent} from 'react';
import { Text, View ,FlatList,TextInput,StyleSheet,Platform,Animated,Easing} from 'react-native';
import StockElement from "./StockElement";
import SortableList from 'react-native-sortable-list';
import Row from "./Row";

class StockList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time:0,
            feed:"feed",
            text: 'Search & Add',
        }
    }

   componentDidMount(){
        var ws = new WebSocket('wss://www.cryptofacilities.com/ws/v1');

        ws.onopen = () => {
        // connection opened
        var msg = {  
            "event":"subscribe",
            "feed":"heartbeat"
        }
        ws.send(JSON.stringify(msg)); // send a message
        };
        
        ws.onmessage = (e) => {
            // a message was received
            console.log(e.data);
            var Apidata = JSON.parse(e.data);
            if(Apidata.feed=="heartbeat"){
                this.setState({time:Apidata.time,feed:Apidata.feed})
            }
        };
        
        ws.onerror = (e) => {
        // an error occurred
        console.log(e.message);
        };
        
        ws.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
        };
   }


    _keyExtractor = (item, index) => item.id;

   
    render() {
        return (
            <View>
                <Text style={{textAlign:"center"}}>HeartBeat : {this.state.time}</Text>
                <Content></Content>
            </View>
        );
    }
}

class Content extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            time:0,
            feed:"feed",
            text: 'Search & Add',
            stocklist : [{
                id:1,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:2,
                name:"SBI",
                rate:236,
                change:+23, 
            },{
                id:3,
                name:"ICICI",
                rate:236,
                change:+23, 
            },{
                id:4,
                name:"CANARA",
                rate:236,
                change:+23, 
            },
            {
                id:5,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:6,
                name:"SBI",
                rate:236,
                change:+23, 
            },{
                id:7,
                name:"ICICI",
                rate:236,
                change:+23, 
            },{
                id:8,
                name:"CANARA",
                rate:236,
                change:+23, 
            },{
                id:9,
                name:"CANARA",
                rate:236,
                change:+23, 
            },
            {
                id:10,
                name:"SBIN",
                rate:236,
                change:+23, 
            },{
                id:11,
                name:"SBI",
                rate:236,
                change:+23, 
            },]
        }    
    }

    _renderRow = ({data, active}) => {
        return <Row data={data} active={active} />
    }


    render(){
        return(<View>

        <TextInput
        style={{flex:1, borderColor: 'gray', borderWidth: 1,borderRadius:5,margin:5}}
        onChangeText={(time) => this.setState({time})}
        value={this.state.time}
                />
                
            <SortableList
                style={{}}
                contentContainerStyle={{}}
                data={this.state.stocklist}
                renderRow={this._renderRow} />
           
    </View>
        )
    }
}

export default StockList;