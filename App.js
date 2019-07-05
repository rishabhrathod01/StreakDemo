import React, {Component} from 'react';

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';
import RootScreen from './src/RootScreen';
const store = configureStore();

export default class App extends Component {
  render() {
    return (<Provider store={store}>
       <RootScreen></RootScreen>
    </Provider>
   
    );
  }
}
