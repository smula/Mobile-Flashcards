import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './js/Navigator';

export default class App extends React.Component {
  componentDidMount() {
   // setNotification();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
