import {Text, View, TouchableOpacity, Image, FlatList, Alert} from 'react-native'
import styles from './catalogueStyles'
import AntDesign from '@expo/vector-icons/AntDesign';
import abay from '../../abay.png'
import kow from '../../koww.png'
import agata from '../../agata.png'
import Spinner from "react-native-loading-spinner-overlay";
import {getDoc, setDoc, doc, collection} from 'firebase/firestore'
import {FIREBASE_DB, FIREBASE_AUTH} from "../../FirebaseConfig";
import {useEffect, useState} from "react";
const Catalogue = ({navigation, route}) => {
    const [info, setInfo] = useState([
        {
            id: 0,
            img: abay,
            name: 'Абай жолы',
            author: 'Мұхтар Әуезов',
            f: () => {
                navigation.navigate('book', {id: 1})
            }
        },
        {
            id: 1,
            img: agata,
            name: 'Десять негритят',
            author: 'Агата Кристи',
            f: () => {
                navigation.navigate('book', {id: 2})
            }
        },
        {
            id: 2,
            img: kow,
            name: 'Көшпенділер',
            author: 'Ілияс Есенберлин',
            f: () => {
                navigation.navigate('book', {id: 3})
            }
        }
    ])
    const [data, setData] = useState({})
    async function loadData () {
        try {
            setIsLoading(true)
            const res = await getDoc(docRef)
            if (res.exists()) {
                setData(res.data())
                const books = data.books
            }
        } catch (e) {
            Alert.alert(e.message)
        } finally {
            setIsLoading(false)
        }
        return () => {}
    }
    useEffect(() => {
        loadData()
    }, [])
    const [isLoading, setIsLoading] = useState(false)
    const db = FIREBASE_DB
    const auth = FIREBASE_AUTH

    const docRef = doc(db, 'users', auth.currentUser.uid)
    const Book = (props) => {
        const {id, img, name, author, f} = props.data
        return (
            <View style={styles.bookWrapper}>
                <Image source={img} style={styles.bookImg} resizeMode="contain"/>
                <View style={{justifyContent: 'space-between', height: '100%'}}>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.bookName}>{name}</Text>
                        <Text style={styles.bookAuthor}>{author}</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.button} onPress={f}>
                            <AntDesign name="forward" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Spinner
                visible={isLoading}
                textContent={"Загрузка..."}
                textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
                cancelable={false}
            />
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={24} color="#06c"/>
                <Text style={{color: '#06c', fontFamily: 'OS-Regular'}}> Профиль </Text>
            </TouchableOpacity>
            {info.map((item) => {
                return (
                <Book data={item} key={item.id}/>
                )
            })}
        </View>
    )
}
export default Catalogue