import {Text, FlatList, TouchableOpacity, Linking, TextInput, View, Image, ImageBackground} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import styles from './homeStyles'
import library from '../../image 1.png'
import search from '../../search (1).png'
import kow from '../../image 3.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import abay from '../../image 4.png'
import potter from '../../potter.jpeg'
import star from '../../Star.png'
import papa from '../../papa.jpg'
import EvilIcons from '@expo/vector-icons/EvilIcons';
const url = 'https://2gis.kz/karaganda/geo/11822477302874725'
const books =  [{
    id: 0,
    book: kow
    },
    {
        id: 1,
        book: abay
    },
    {
        id: 2,
        book: potter
    },
    {
        id: 3,
        book: papa,
    }
]
const Home = ({navigation, route}) => {
    const Book = (props) => {
        return (
            <Image
                style={{
                    width: 140,
                    height: 200,
                    marginTop: 15,
                    marginLeft: 5,
                    marginRight: 5,
                    borderRadius: 30,
                }}
                resizeMode="contain"
                source={props.img}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.topText}>
                    Областная библиотека им. Н.В. Гоголя
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                    <Ionicons name="notifications" size={24} color="#06c" />
                </TouchableOpacity>
            </View>
            <Text style={styles.dummy}>
                Найдите свою следующую книгу
            </Text>
            <Text style={styles.dummy2}>
                Где? Где? В Караганде!
            </Text>
            <Text style={styles.dummy3}>
                Наши библиотеки
            </Text>
            <TouchableOpacity style={{width: '100%', height: 140, marginTop: 10,}} onPress={() => Linking.openURL(url)}>
            <ImageBackground source={library} resizeMode="cover" style={styles.card} imageStyle={styles.imageCard}>
                <View style={{marginTop: 10, marginLeft: 10, flexDirection: 'row', width: 60, justifyContent: 'space-evenly'}}>
                    <Image source={star} style={{width: 20, height: 20}}/>
                    <Text style={{color: '#fff', fontFamily: 'OS-Regular'}}>4.79</Text>
                </View>
                <View style={{marginBottom: 10, marginLeft: 10,}}>
                    <Text style={{color: '#fff', fontFamily: 'OS-Regular'}}>Карта библиотеки Н.В.Гоголя</Text>
                    <Text style={{color: '#fff', fontFamily: 'OS-Regular', marginTop: 10}}>Улица Ерубаева, 44</Text>
                </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.dummy3}>
                Популярные книги
            </Text>
            <FlatList
            data={books}
            renderItem={({item}) => <Book img={item.book}/>}
            keyExtractor={item => item.id}
            horizontal
            />
        </View>
    )
}
export default Home