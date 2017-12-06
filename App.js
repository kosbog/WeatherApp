import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from "./src/components/Header";
import Weather from './src/components/Weather';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu ===',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Weather App'} />
        <Weather />
      </View>
    );
  }
}

export default App;