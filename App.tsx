import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
// import { Text, View } from 'react-native';
import CounterScreen from './src/screens/CounterScreen';
import { style } from './src/themes/calculatorTheme';
// import HiWordScreen from './src/screens/HiWordScreen';

const App = () => {
  return (
    <NavigationContainer>

      <StackNavigator />

      {/* <SafeAreaView style={style.bg}> */}
        {/* <StatusBar backgroundColor="#2f3640" />
        <CalculatorScreen /> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
    // <HiWordScreen />
    // <CounterScreen />


  )
}

export default App
