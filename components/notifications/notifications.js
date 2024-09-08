import {Text, View, TouchableOpacity, Image} from 'react-native'
import styles from './notificationStyles'
import check from '../../Group 481834.png'
import warn from '../../Group 481835.png'
import info from '../../Group 481836.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
const Notifications = ({navigation, route}) => {
    const Card = (props) => {
        return (
            <View style={styles.nWrapper}>
                <View style={[styles.vLine, {backgroundColor: props.cLine}]}/>
                <View style={[styles.nDesc, {backgroundColor: props.bc}]}>
                    <Image
                        source={props.img}
                        style={{width: '25%', height: '70%', alignSelf: 'center'}}
                        resizeMode="contain"
                    />
                    <View style={styles.nTextWrapper}>
                        <View style={styles.nTitle}>
                            <Text style={styles.status}>
                                {props.status}
                            </Text>
                            <Text style={styles.date}>
                                {props.date1 + '\n' + props.date2}
                            </Text>
                        </View>
                        <Text style={styles.details}>
                            {props.details}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={20} color="#06c" />
                <Text style={styles.headerText}>
                    Главная
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Уведомления
            </Text>
            <Card cLine="#00CC99" bc='#e6faf5' img={check} status="Успешно" date1="02.09.24" date2="понедельник 16.52" details="Ваша книга “Абай жолы” успешно забронирована. Спасибо за ваше доверие."/>
            <Card cLine="#F2C94C" bc="#fdf8e8" img={warn} status="Внимание" date1="29.08.24" date2="четверг 8:02" details="Через неделю истекает срок сдачи книги “Десять Нигритят”. Для дальнейшого продления можете настроить в разделе “Автопродление” "/>
            <Card cLine="#5458F7" bc="#eeefff" img={info} status="Внимание" date1="27.08.24" date2="вторник 15:00" details="Скоро 01.09.24 в библиотеке имени Н.В. Гоголя пройдет встреча на тему “Планирование и тайм-менеджмент”, спикер встречи Маргулан Сейсенбай. Время: 17:00."/>

        </View>
    )
}
export default Notifications