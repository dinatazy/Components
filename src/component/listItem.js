import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

const ListItem = props => {
    const {
        leftImage,
        title,
        subtitle,
        rightIcon,
        rightSubtitle,
    } = props;

    return (

        <View style={styles.container} >
            <View style={styles.leftImageContainer}>
                <View style={styles.content}>
                    <View style={styles.leftContainer}>
                        <Image
                            style={styles.leftImage}
                            source={leftImage}
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Icon
                            name={rightIcon}
                            size={30}
                            color='black'
                        >
                        </Icon>
                        <Text style={styles.rightSubtitle}>
                            {rightSubtitle}
                        </Text>
                    </View>
                </View>
            </View>
        </View>

    )
};
export default ListItem;