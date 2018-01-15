import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList
} from 'react-native';

import { ListItem } from 'react-native-simplelistitem'


const list = [
    {
        data: [
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
                //containerStyle: { height: 100 },
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
                onPress: () => { console.log('first item') },
                rightSubtitleStyle: {},
            },
            {
                title: 'Not Clickable',
                titleStyle: { fontWeight: 'normal' },
                leftImage: { uri: 'https://i.pinimg.com/736x/5d/8e/62/5d8e62c46449981ea92a454ff61c9c02--smile-fary.jpg' },
                //rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
                //rightSubtitle: '10 November',
                rightSubtitleStyle: {},
            },],
        title: 'Regular List with Images',
    },
    {
        data: [
            {
                containerStyle: { backgroundColor: '#f3f3f3' },
                title: 'Dummy Title',
                titleStyle: { fontWeight: 'bold' },
                subtitle: 'Arbeitsplatz',
                subtitleStyle: {},
                rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
                rightSubtitle: '10 November',
                rightSubtitleStyle: {},
                onPress: () => { console.log('first item') }
            },
            {
                containerStyle: { backgroundColor: '#f3f3f3' },
                title: 'Dummy Title',
                titleStyle: { fontWeight: 'bold' },
                subtitle: 'Arbeitsplatz',
                subtitleStyle: {},
                rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
                rightSubtitle: '10 November',
                rightSubtitleStyle: {},
                onPress: () => { console.log('first item') }
            },
            {
                containerStyle: { backgroundColor: '#f3f3f3' },
                title: 'Dummy Title',
                titleStyle: { fontWeight: 'bold' },
                subtitle: 'Arbeitsplatz',
                subtitleStyle: {},
                rightIcon: { name: 'angle-right', color: 'black', type: 'font-awesome' },
                rightSubtitle: '10 November',
                rightSubtitleStyle: {},
                onPress: () => { console.log('first item') }
            },
        ],
        title: 'Regular List no Images',
    },

    {

        data: [
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
                rightIcon: { name: 'angle-right', color: 'white', size: 35, type: 'font-awesome' },
                backgroundImage: { uri: 'https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg' },
                isBackgroundMask: true,
                onPress: () => { console.log('first item') }
            },
        ],
        title: 'Regular List Background Image',
    },
]

export default class ListScreen extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 18,
            }
        }
    };

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    _renderItem = ({ item }) => (

        <ListItem
            containerStyle={item.containerStyle}
            title={item.title}
            titleStyle={item.titleStyle}
            subtitle={item.subtitle}
            subtitleStyle={item.subtitleStyle}
            leftImage={item.leftImage}
            rightIcon={item.rightIcon}
            rightSubtitle={item.rightSubtitle}
            rightSubtitleStyle={item.rightSubtitleStyle}
            backgroundImage={item.backgroundImage}
            isBackgroundMask={item.isBackgroundMask}
            onPress={item.onPress}
        />

    );

    _renderSectionHeader = (Header) => (
        <View style={{ backgroundColor: '#D3D3D3' }}>
            <Text style={{
                color: '#4a4a4a',
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                alignItems: 'center'
            }}>{Header.section.title}</Text>
        </View>
    );

    render() {
        return (
            <SectionList
                stickySectionHeadersEnabled={false}
                sections={list}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                extraData={this.state}
                contentContainerStyle={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 60,
    },
});


