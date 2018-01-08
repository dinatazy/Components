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

import ListItem from './src/component/listItem'

const list = [
  {
    title: 'Dummy Title',
    titleStyle: { fontWeight: 'normal' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: {},
    leftImage: { uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' },
    rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
    rightSubtitle: '10 November',
    rightSubtitleStyle: {},
    onPress: () => { console.log('first item') }
  },
  {
    title: 'Dummy Title',
    titleStyle: { color: 'white', fontWeight: 'bold' },
    subtitle: 'Arbeitsplatz',
    subtitleStyle: { color: 'white' },
    rightIcon: { name: 'star-o', color: 'white', size: 35, type: 'font-awesome' },
    backgroundImage: { uri: 'https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg' },
    isBackgroundMask: true,
  },

]

export default class App extends Component<{}> {

  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }

  _renderItem = ({ item }) => (

    <ListItem
      title={item.title}
      titleStyle={item.titleStyle}
      subtitle={item.subtitle}
      subtitleStyle={item.subtitleStyle}
      leftImage={item.leftImage}
      rightIcon={item.rightIcon}
      rightSubtitle={item.rightSubtitle}
      rightSubtitleStyle={item.rightSubtitleStyle}
      backgroundImage={item.backgroundImage}
      onPress={item.onPress}
    />

  );

  render() {
    return (
      <FlatList
        data={list}
        renderItem={this._renderItem}
        extraData={this.state}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
