import {createStackNavigator} from "@react-navigation/stack";
import profile from "./profile";
import catalogue from "../catalogue/catalogue";
import book from "../book/book";
const ProfileRoute = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={'profilePage'} component={profile} options={{headerShown: false}}/>
            <Stack.Screen name={'catalogue'} component={catalogue} options={{headerShown: false}}/>
            <Stack.Screen name={'book'} component={book} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default ProfileRoute