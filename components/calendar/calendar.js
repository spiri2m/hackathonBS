import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import styles from "./calendarStyles";
import landscape from '../../landscapes-karkaraly-national-park-kazakhstan-2 1.png'
import {useState} from "react";
import add from '../../add-circle.png'
import star from '../../Star.png'
const Events = () => {

    const [selectedDates, setSelectedDates] = useState({
        '2024-09-01': { selected: true, marked: true, selectedColor: '#FF9A23' },
        '2024-09-29': { selected: true, marked: true, selectedColor: '#FF9A23' }
    });
    const [text, setText] = useState('2024-09-01')
    LocaleConfig.locales['ru'] = {
        monthNames: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр', 'Май', 'Июнь', 'Июль.', 'Авг', 'Сен.', 'Окт.', 'Ноя', 'Дек'],
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        dayNamesShort: ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'],
        today: "Сегодня"
    };
    LocaleConfig.defaultLocale = 'ru';
    const shiftDateByWeek = (dateString) => {
        // Parse the date string into a Date object
        let date = new Date(dateString);

        // Add 7 days to the date
        date.setDate(date.getDate() + 7);

        // Convert the date back to 'YYYY-MM-DD' format
        let shiftedDate = date.toISOString().split('T')[0];

        return shiftedDate;
    };
    const handleExtension = () => {
        const newDates = {...selectedDates}
        delete newDates[text]
        const date = shiftDateByWeek(text)
        setText(date)
        const karim = {...newDates, [date]: { selected: true, marked: true, selectedColor: '#FF9A23' }}
        setSelectedDates(karim)
    }
    const Card = (props) => {
        return (
            <View style={styles.cardWrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={{color: '#fff', marginTop: 10, fontFamily: 'OS-Regular', marginRight: 5}}>Дедлайн сдачи</Text>
                    <Image source={star} style={{width: 20, height: 20, marginTop: 10,}}/>
                </View>
                <Text style={[styles.titleWrapper, {marginTop: 5, color: '#fff', fontFamily: 'OS-Regular'}]}>
                    {props.name}
                </Text>
                <View style={styles.line}/>
                <View style={styles.dateWrapper}>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: '70%', height: '100%', borderBottomLeftRadius: 15,}}>
                        <Text style={styles.time}>{props.time}</Text>
                        <Text style={styles.day}>{text.slice(8,10) + '.' + text.slice(5, 7)}</Text>
                    </View>
                    <TouchableOpacity onPress={handleExtension} style={{backgroundColor: '#FFB155', width: '30%', height: '100%', borderBottomRightRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{alignSelf: 'center', color: '#fff', fontFamily: 'OS-Regular'}}>
                            Продлить
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const checkIn = () => {
        const date = '2024-09-30'
        setSelectedDates((prevDates) => {
            const isSelected = prevDates[date];
            if (isSelected) {
                const updatedDates = { ...prevDates };
                delete updatedDates[date];
                return updatedDates;
            } else {
                return {
                    ...prevDates,
                    [date]: { selected: true, marked: true, selectedColor: 'blue' }
                };
            }
        })
    }
    return (
        <View style={styles.container}>

            <Text style={{fontSize: 20, fontFamily: 'OS-Bold', alignSelf: 'center'}}>
                Календарь событий
            </Text>
            <Calendar
                markedDates={selectedDates}
                markingType={'multi-dot'}
                theme={{
                    textDayFontFamily: 'OS-Regular', // Font for day numbers
                    textMonthFontFamily: 'OS-Bold',  // Font for the month title
                    textDayHeaderFontFamily: 'OS-Regular', // Font for weekday names (Mon, Tue, etc.)

                    textDayFontSize: 16,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 14,
                }}
                style={styles.calendar}
            />
            <Card name="Абай жолы" time="14:00" day="20.09"/>
            <Text style={{color: '#000', fontFamily: 'OS-Bold', letterSpacing: 1, width: '85%', alignSelf: 'center', marginTop: 10, fontSize: 20}}>
                События
            </Text>
            <View style={styles.meetingWrapper}>
                <Image source={landscape} style={{width: '100%', height: '50%', borderTopLeftRadius: 15, borderTopRightRadius: 15,}}/>
                <View>
                    <Text style={{fontSize: 20, fontFamily: 'OS-Bold', width: '90%',  alignSelf: 'center', marginTop: 5,}}>
                        ZOOM Conference
                    </Text>
                    <Text style={{fontSize: 14, fontFamily: 'OS-Regular', width: '90%', alignSelf: 'center', marginTop: 4,}}>
                        Дата конференции: 30.09 в 17:00. Ссылка будет отправлена в уведомления
                    </Text>
                    <TouchableOpacity onPress={checkIn}>
                        <Image source={add} style={{width: 20, height: 20, alignSelf: 'flex-end', marginRight: 10}}/>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
    )
}
export default Events