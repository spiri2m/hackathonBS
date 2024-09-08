import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Alert, View} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import forum from "./components/forum/forum";
import home from "./components/home/home";
import events from "./components/calendar/calendar";
import profile from "./components/profile/profile";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import homeRouter from "./components/home/homeRouter";
import profileRoute from "./components/profile/profileRoute";
import Spinner from "react-native-loading-spinner-overlay"
import {getDoc, setDoc, collection, doc} from 'firebase/firestore'
import {FIREBASE_AUTH} from "./FirebaseConfig";
import {FIREBASE_DB} from "./FirebaseConfig";
import {useEffect, useState} from "react";
const Main = () => {

    async function checkIsLoaded() {
        try {
            setLoading(true)
            const data = await getDoc(doc(db, 'users', auth.currentUser.uid))
            if(data.exists()) {
                setIsLoaded(true)
            } else {
                await setDoc(doc(db, 'users', auth.currentUser.uid), {
                    id: auth.currentUser.uid,
                    books: [1, 2, 3]
                })
            }
        } catch (e) {
            Alert.alert(e.message)
        } finally {
            setLoading(false)
        }
        return () => {}
    }
    useEffect(() => {
        checkIsLoaded()
    }, [])
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [loaded, setIsLoaded] = useState(false)
    const Tab = createBottomTabNavigator()
    const auth = FIREBASE_AUTH
    const db = FIREBASE_DB
    return (
        <Tab.Navigator  screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    height: 70,
                },
                tabBarHideOnKeyboard: true,
            }} initialRouteName="home">
            <Tab.Screen name={'home'} component={homeRouter} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? <Entypo name="home" size={24} color="#06c"/> : <Entypo name="home" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'events'} component={events} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? <FontAwesome6 name="calendar-alt" size={24} color="#06c" /> : <FontAwesome6 name="calendar-alt" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'forum'} component={forum} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? <FontAwesome6 name="message" size={24} color="#06c" /> : <FontAwesome6 name="message" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'profile'} component={profileRoute} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? <FontAwesome name="user" size={24} color="#06c" /> : <FontAwesome name="user" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
        </Tab.Navigator>
    )
}
export default Main