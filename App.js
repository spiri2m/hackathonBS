import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, LogBox, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {useState, useEffect} from "react";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import {createStackNavigator} from "@react-navigation/stack";
import {LinearGradient} from "expo-linear-gradient";
import {FIREBASE_AUTH} from "./FirebaseConfig";
import {onAuthStateChanged} from 'firebase/auth'
import {NavigationContainer} from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import main from "./main";
import Lib from "./components/lib";
export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])
  let [fontsLoaded, fontError] = useFonts({
    'OS-Light': require('./assets/static/OpenSans-Light.ttf'),
    'OS-Regular': require('./assets/static/OpenSans-Regular.ttf'),
    'OS-Bold': require('./assets/static/OpenSans-Bold.ttf')
  })
  if(!fontsLoaded) {
    return null
  }

  const Stack = createStackNavigator()
  LogBox.ignoreLogs([' @firebase/auth: Auth'])
  return (
  <NavigationContainer>
    <Stack.Navigator>
      {!user ? (<Stack.Screen name={'lib'} component={Lib} options={{headerShown: false}}/>)
          : (<Stack.Screen name={'main'} component={main} options={{headerShown: false}}/> )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}