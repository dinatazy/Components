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

import ListScreen from './src/screen/listScreen'
import CalendarScreen from './src/screen/calendarScreen'


import { TabNavigator } from 'react-navigation';

const RootTabs = TabNavigator({
  List: {
    screen: ListScreen,
  },
  Calendar: {
    screen: CalendarScreen,
  },
});

export default class App extends Component<{}> {

  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  render() {
    return (
      <RootTabs />
    );
  }
}

