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
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome'
import { LocaleConfig } from 'react-native-calendars';


LocaleConfig.locales['de'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['M', 'D', 'M', 'D', 'F', 'S', 'S']
};

LocaleConfig.defaultLocale = 'de';

export default class CalendarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                markedDates={{ [this.state.selected]: { selected: true } }}
                theme={{
                    arrowColor: 'red',
                    todayTextColor: 'black',
                }}
                monthFormat={'MMMM'}
                renderArrow={(direction) => (
                    direction == 'left' ?
                        <Icon name='angle-left' size={40} color='red' />
                        :
                        <Icon name='angle-right' size={40} color='red' />
                )}
                hideArrows={false}
                hideExtraDays={false}
                markedDates={{
                    '2018-01-15': { color: 'red', textColor: 'red'},
                    '2018-01-16': { color: 'red', textColor: 'red'},
                    '2018-01-17': { color: 'red', textColor: 'red'},
                    '2018-01-18': { color: 'red', textColor: 'red'},
                }}
            />
        )
    }
};