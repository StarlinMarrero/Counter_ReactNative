import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CalculatorScreen from '../screens/CalculatorScreen';
import CounterScreen from '../screens/CounterScreen';
import HomeScreen from '../screens/HomeScreen';


export type RootStackParams{
    CalculatorScreen: undefined,
    CounterScreen: undefined,
    Home: undefined,
    // PersonaScreen: { id: number, nombre: string }, if you send props else undefined
}


const StackNavigator = () => {




    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{ 
                headerStyle: {
                    elevation: 1,
                    shadowColor: 'transparent',
                    // backgroundColor: "#0097e6",
                    borderBottomColor: "#00a8ff"
                    
            },

                cardStyle: {
                backgroundColor: "white",
                // marginHorizontal: 10
            },
            
        }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="CalculatorScreen"  options={{title: 'Calculator'}} component={CalculatorScreen}/>
            <Stack.Screen name="CounterScreen" options={{title: 'Counter'}} component={CounterScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator
