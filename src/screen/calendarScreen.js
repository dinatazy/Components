/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import CalendarItem from '../component/calendar/calendar'

const markedDates = [
  '2018-01-15',
  '2018-01-16',
  '2018-01-17',
  '2018-01-18'
]

export default class App extends Component<{}> {

  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }


  render() {
    return (
      <View style={styles.container}>
        <CalendarItem
          markedDates={markedDates}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
