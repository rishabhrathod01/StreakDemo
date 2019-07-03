import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TabNavigator from "./src/navigation/TabNavigator";

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';
import ActionModal from './src/watchlist/components/ActionModal';
const store = configureStore();

export default class App extends Component {
  render() {
    return (<Provider store={store}>
       <TabNavigator></TabNavigator>
    </Provider>
   
    );
  }
}
