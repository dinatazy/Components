import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'

let { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: 80,
        borderBottomWidth:0.3,
        borderColor:'grey',
        //backgroundColor:'green'
    },

    content:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },

    leftContainer:{
        flex:1,
        flexDirection:'row',
        margin:12,
    },

    leftImage:{
        width:52,
        height:52,
        borderRadius:2, 
    },

    titleContainer:{
        paddingLeft:10,
        justifyContent:'space-between',
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
    },

    subtitle:{
       fontSize:15,
        color:'grey'
    },

    rightContainer:{
       margin:10,
       alignItems:'flex-end',
       justifyContent:'flex-end',
    },

    rightSubtitle:{
        color:'grey'
    }
})