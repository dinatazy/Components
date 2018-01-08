import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableHighlight
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
        onPress,
        ...attributes
    } = props;

    let Component = View;
    if (onPress) {
        Component = TouchableOpacity;
    }
    return (

        <Component
            style={styles.container}
            onPress={onPress}
            {...attributes}
        >
            <View style={styles.leftImageContainer}>
                <View style={styles.content}>
                    <View style={styles.leftContainer}>
                        {leftImage ?
                            <Image
                                style={styles.leftImage}
                                source={leftImage}
                            />
                            : null}
                        <View style={subtitle ? styles.titleAndSubtitleContainer : styles.titleContainer}>
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
        </Component>

    )
};
export default ListItem;