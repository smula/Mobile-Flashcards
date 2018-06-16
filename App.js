import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { setLocalNotification } from './js/utils/api';
import Navigator from './js/Navigator';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}
