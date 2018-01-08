import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'

let { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: 70,
        borderBottomWidth: 0.3,
        borderColor: 'grey',
        marginBottom: 5,
        // backgroundColor:'green'
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
    },

    leftImage: {
        width: 52,
        height: 52,
        borderRadius: 2,
        alignSelf: 'center'
    },

    titleContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
    },

    titleAndSubtitleContainer: {
        paddingLeft: 10,
        justifyContent: 'flex-start',
    },

    title: {
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        width: 250,
    },

    subtitle: {
        fontSize: 15,
        color: 'grey',
        width: 190,
        paddingTop: 5,
    },

    rightContainer: {
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    rightSubtitle: {
        color: 'grey',
        width: 100,
    }
})