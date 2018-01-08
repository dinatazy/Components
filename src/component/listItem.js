import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class ListItem extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (

            <View style={styles.container} >
                <View style={styles.leftImageContainer}>
                    <View style={styles.content}>
                        <View style={styles.leftContainer}>
                            <Image
                                style={styles.leftImage}
                                source={{ uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' }}
                            />
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Dummy Title..</Text>
                                <Text style={styles.subtitle}>Arbeitsplatz</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <Icon
                                name='angle-right'
                                size={30}
                                color='black'
                            >
                            </Icon>
                            <Text style={styles.rightSubtitle}>
                                10 November
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}