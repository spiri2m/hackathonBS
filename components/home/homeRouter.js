import {createStackNavigator} from "@react-navigation/stack";
import home from "./home";
import notifications from "../notifications/notifications";
const HomeRouter = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={home} options={{headerShown: false}}/>
            <Stack.Screen name='notification' component={notifications} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default HomeRouter