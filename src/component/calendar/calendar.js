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

const CalendarItem = props => {
    /*     const {
    
        } = props; */

    return (
        <Calendar
            style={styles.calendar}
/*             dayComponent={({ date, state, marking }) => {
                console.log('my marking', marking)
                return (<View style={{ flex: 1 }}><Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text></View>);
            }} */
            // Initially visible month. Default = Date()
            current={Date()}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2012-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => { console.log('selected day', day) }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MMMM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => { console.log('month changed', month) }}
            // Hide month navigation arrows. Default = false
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // renderArrow={(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            //hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            //disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}

/*             markedDates={{
                '2018-01-08': { selected: true, color: 'blue', marked: true },
            }} */
            markingType={'simple'}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}

            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: 'black',
                selectedDayBackgroundColor: 'black',
                selectedDayTextColor: 'black',
                todayTextColor: 'black',
                dayTextColor: 'black',
                textDisabledColor: 'black',
                dotColor: 'black',
                selectedDotColor: 'black',
                arrowColor: 'orange',
                monthTextColor: 'blue',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
            }}
        />

    )
};
export default CalendarItem;