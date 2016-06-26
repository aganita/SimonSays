import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS,
  ListView,
  Animated,
  Easing,
} from 'react-native';

const BoardView = require('./components/BoardView');

class SimonSays extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return <View style={styles.container}>
      <BoardView/>
    </View>
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0B96',
  },
});

module.exports = SimonSays;

