import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    ImageBackground
} from 'react-native'
import { styles } from './style'
import getIconType from '../helpers/getIconType';


const ListItem = props => {
    const {
        leftImage,
        title,
        subtitle,
        rightIcon,
        rightSubtitle,
        rightSubtitleStyle,
        onPress,
        titleStyle,
        subtitleStyle,
        backgroundImage,
        backgroundImageStyle,
        ...attributes
    } = props;

    let Component = View;
    if (onPress) {
        Component = TouchableOpacity;
    }
    let ComponentBackground = View;
    if (backgroundImage) {
        ComponentBackground = ImageBackground
    }
    let Icon;
    if (rightIcon) {
        Icon = getIconType(rightIcon.type)
    }
    return (

        <Component
            style={styles.container}
            onPress={onPress}
            {...attributes}
        >
            <ComponentBackground
                style={[styles.imageBackground, backgroundImageStyle]}
                source={backgroundImage}
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
                                <Text numberOfLines={1} style={[styles.title, titleStyle]}>{title}</Text>
                                <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            {rightIcon ?
                                <Icon
                                    name={rightIcon.name}
                                    size={rightIcon.size || 30}
                                    color={rightIcon.color || 'black'}
                                >
                                </Icon>
                                : null}
                            <Text numberOfLines={1} style={[styles.rightSubtitle, rightSubtitleStyle]}>
                                {rightSubtitle}
                            </Text>
                        </View>
                    </View>
                </View>
            </ComponentBackground>
        </Component>

    )
};
export default ListItem;