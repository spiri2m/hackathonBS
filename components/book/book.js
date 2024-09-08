import {Alert, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {FIREBASE_AUTH} from "../../FirebaseConfig";
import {FIREBASE_DB} from "../../FirebaseConfig";
import {doc, getDoc} from "firebase/firestore";
import styles from "./bookStyles";
import abay from '../../abay.png'
import agata from '../../agata.png'
import koww from '../../koww.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import Spinner from "react-native-loading-spinner-overlay";
import {useEffect, useState} from "react";
const Book = ({navigation, route}) => {
    const data = [
        {
        id: 1,
        bookName: 'Абай жолы',
        bookAuthor: 'Мұхтар Әуезов',
            bookDesc: '                «Путь Абая» — роман-эпопея Мухтара Ауэзова, описывающий жизнь казахского поэта Абая Кунанбаева. Первая эпопея, написанная на казахском языке. «Путь Абая» широко известен в Казахстане и далеко за его пределами. Роман-эпопея состоит из четырех книг.\n',
            bookImg: abay
        },
        {
            id: 2,
            bookAuthor: "Агата Кристи",
            bookDesc: "Десять негритят — детективный роман Агаты Кристи, написанный в 1939 году. Это самая продаваемая книга писательницы и, по её признанию, самая сложная в создании. Роман был экранизирован 8 раз. Входит в «100 лучших детективных романов всех времён».",
            bookImg: agata,
            bookName: "Десять негритят",
        },
        {
            id: 3,
            bookAuthor: "Ілияс Есенберлин",
            bookDesc: "Көшпенділер — роман-хроника известного казахского писателя Ильяса Есенберлина. Охватывает исторические события XV—XIX веков, происходившие на территории Казахстана. Трилогия состоит из частей «Заговорённый меч», «Отчаяние» и «Хан Кене».",
            bookImg: koww,
            bookName: "Көшпенділер",
        }
    ]
    const [text, onChangeText] = useState('')
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.header}>
                <AntDesign name="left" size={24} color="black" />
                <Text style={{fontSize: 20, fontFamily: 'OS-Regular'}}>Мой каталог</Text>
            </TouchableOpacity>
            <Image
            source={abay}
            style={{width: '50%', height: 200, alignSelf: 'center', marginTop: 10,}}
            resizeMode="contain"
            />
            <Text style={{fontSize: 20, fontFamily: 'OS-Bold', alignSelf: 'center', marginTop: 10,}}>
                Абай жолы
            </Text>
            <Text style={{fontSize: 14, fontFamily: 'OS-Light', alignSelf: 'center'}}>
                Мұхтар Әуезов
            </Text>
            <Text style={{fontSize: 20, fontFamily: 'OS-Regular', alignSelf: 'center', marginTop: 10,}}>
                Описание
            </Text>
            <Text style={{width: '60%', height: 200, textAlign: 'justify', alignSelf: 'center', marginTop: 10, fontFamily: 'OS-Regular'}}>
                «Путь Абая» — роман-эпопея Мухтара Ауэзова, описывающий жизнь казахского поэта Абая Кунанбаева. Первая эпопея, написанная на казахском языке. «Путь Абая» широко известен в Казахстане и далеко за его пределами. Роман-эпопея состоит из четырех книг.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Поделитесь впечатлениями о книге"
                value={text}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => {onChangeText('')}}>
                <Text style={{fontFamily: 'OS-Light', color: '#0373F3'}}>
                    Опубликовать
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Book