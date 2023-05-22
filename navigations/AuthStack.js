import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Custom Imports
import Login from '../screens/Login'

//Global Level initializaton
const Stack = createNativeStackNavigator()


const AuthStack = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Sign In" component={Login} />
    </Stack.Navigator>
}

export default AuthStack