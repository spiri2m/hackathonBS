import {Text, View, TouchableOpacity, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from "./profileStyles";
import arrow from '../../Arrow.png';
import friends from '../../Group 6958.png'
import star from '../../Star1.png'
import support from '../../Group 6960.png'
import karim from '../../Group 6961.png'
import edit from '../../Edit.png'
import extra from '../../Add.png'
import {FIREBASE_AUTH} from "../../FirebaseConfig";
import LinearGradient from 'expo-linear-gradient';
const auth = FIREBASE_AUTH
const Profile = ({navigation, route}) => {
    const data = [
        {
            id: 0,
            text: 'Друзья',
            img: friends
        },
        {
            id: 1,
            text: 'Мои достижения',
            img: star
        },
        {
            id: 2,
            text: 'Рейтинг',
            img: karim
        },
        {
            id: 3,
            text: 'Настройки',
            img: edit
        },
        {
            id: 4,
            text: 'Поддержка',
            img: support
        },
        {
            id: 5,
            text: 'Дополнительно',
            img: extra
        },
    ]
    const currentLevel = 1;
    const nextLevel = 2;
    const progress = 75;
    const Stat = (props) => {
        return (
            <TouchableOpacity style={styles.stats}>
                <Image source={props.img} style={{width: 23, height: 23}}/>
                <Text style={{fontSize: 14, fontFamily: 'OS-Regular', marginLeft: 10,}}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainWrapper}>
                <View style={styles.helloWrapper}>
                    <View style={styles.hello}>
                        <View style={styles.helloText}>
                            <Text style={styles.helloHello}>Привет, Карим!</Text>
                            <Text style={styles.helloWelcome}>Добро пожаловать в профиль!</Text>
                        </View>
                        <View style={styles.helloImg}>
                            <Feather name="user" size={36} color="#000" />
                        </View>
                    </View>
                </View>
                <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
                    <Text style={{color: '#000', fontFamily: 'OS-Bold', fontSize: 20, marginBottom: 10,}}>
                        Ваш уровень
                    </Text>
                    <View style={styles.levels}>
                        <Text style={styles.levelLabel}>{currentLevel}lvl</Text>
                        <Text style={styles.levelLabel}>{nextLevel}lvl</Text>
                    </View>
                    <View style={styles.bar}>
                        <View style={styles.progressBarContainer}>
                            <View style={[styles.progressBar, { width: `${progress}%` }]} />
                        </View>
                </View>
                </View>
                <TouchableOpacity style={styles.catalogue} onPress={() => navigation.navigate('catalogue')}>
                    <Text style={{color: '#000', fontFamily: 'OS-Bold', fontSize: 16,}}>
                        Мой каталог книг
                    </Text>
                    <Image source={arrow}/>
                </TouchableOpacity>
                <View style={styles.statsWrapper}>
                    {data.map((item) => {
                        return (
                            <Stat text={item.text} key={item.id} img={item.img}/>
                        )
                    })}
                </View>
                <TouchableOpacity style={styles.logOutButton} onPress={() => auth.signOut()}>
                    <Text style={{color: '#FF0000', fontFamily: 'OS-Regular'}}>
                        Выйти из профиля
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile