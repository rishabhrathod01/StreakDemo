import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import StockList from "./StockList";

const TopTabNavigator = createAppContainer(createMaterialTopTabNavigator({
    P1: { screen: props => <StockList {...props} />},
    Watch:StockList,
    P2:StockList,
    WatchList:StockList,
}, {
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
        backgroundColor: '#fff',
    },
    indicatorStyle: {
        backgroundColor: 'blue',
    },
    tabStyle:{
      height:50,
    }
}
}));

export default TopTabNavigator;