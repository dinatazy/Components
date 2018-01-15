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

import ListItem from './src/component/listItem/listItem'
import CalendarItem from './src/component/calendar/calendar'
import ListScreen from './src/screen/listScreen'
import CalendarScreen from './src/screen/calendarScreen'

const list = [
  {
    title: 'Dummy Title',
    titleStyle: { fontWeight: 'bold' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: {},
    leftImage: { uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' },
    rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
    rightSubtitle: '10 November',
    rightSubtitleStyle: {},
    onPress: () => { console.log('first item') }
  },
  {
    containerStyle: { height: 100 },
    title: 'Dummy Title',
    titleStyle: { color: 'blue', fontWeight: 'normal' },
    subtitle: 'Arbeitsplatz subtitle texting long',
    subtitleStyle: { color: 'black' },
    leftImage: { uri: 'https://i.pinimg.com/736x/d7/c2/59/d7c2593939551cdc026767eaa789be63--case-closed-magic-kaito.jpg' },
    rightIcon: { name: 'angle-right', color: 'blue', type: 'font-awesome' },
    rightSubtitle: '10 November 2018',
    rightSubtitleStyle: { color: 'black' },
    onPress: () => { console.log('first item') }
  },
  {
    title: 'Its a Very Very Long Dummy Title ',
    titleStyle: { fontWeight: 'normal' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: {},
    leftImage: { uri: 'https://i.pinimg.com/736x/5d/8e/62/5d8e62c46449981ea92a454ff61c9c02--smile-fary.jpg' },
    rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
    //rightSubtitle: '10 November',
    rightSubtitleStyle: {},
  },
  {
    title: 'Its a Very Very Long Dummy Title ',
    titleStyle: { fontWeight: 'normal' },
    leftImage: { uri: 'https://i.pinimg.com/736x/5d/8e/62/5d8e62c46449981ea92a454ff61c9c02--smile-fary.jpg' },
    //rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
    //rightSubtitle: '10 November',
    rightSubtitleStyle: {},
  },
  {
    containerStyle: { height: 100 },
    title: 'Dummy Title',
    titleStyle: { color: 'white', fontWeight: 'bold' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: { color: 'white' },
    rightIcon: { name: 'star-o', color: 'white', size: 35, type: 'font-awesome' },
    backgroundImage: { uri: 'https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg' },
    isBackgroundMask: true,
    onPress: () => { console.log('first item') }
  },
  {
    containerStyle: { height: 100 },
    title: 'Dummy Title',
    titleStyle: { color: 'white', fontWeight: 'bold' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: { color: 'white' },
    rightIcon: { name: 'star-o', color: 'white', size: 35, type: 'font-awesome' },
    backgroundImage: { uri: 'https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg' },
    isBackgroundMask: true,
    onPress: () => { console.log('first item') }
  },

]

const markedDates = [
  '2018-01-15',
  '2018-01-16',
  '2018-01-17',
  '2018-01-18'
]

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

