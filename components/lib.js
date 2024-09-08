import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import login from "./login/login";
import register from "./register/register";
const Lib = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={'login'} component={login}  options={{headerShown: false}}/>
            <Stack.Screen name={'register'} component={register}  options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default  Lib