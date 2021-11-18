import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../themes/calculatorTheme'

interface props extends StackScreenProps<any, any> {

}


const HomeScreen = ({ navigation }: props) => {

    navigation.setOptions({
        title: 'Welcome Starlin',
        headerBackTitle: "Back "
    })


    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            // backgroundColor: '#f5f6fa',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: '#313132',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        btnImg: {
            marginRight: 10
        }
    })

    return (
        <View style={styles.container}>
            <Image source={require('../themes/img/tool-box.png')} style={{ width: 200, height: 200 }} />
            <Text style={styles.text}>Welcome To Home</Text>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.btnImg} onPress={() => navigation.navigate("CalculatorScreen")}>

                    <Image style={{ width: 50, height: 50 }} source={require('../themes/img/calculator.png')} />


                </TouchableOpacity>
                <TouchableOpacity style={styles.btnImg} onPress={() => navigation.navigate("CounterScreen")}>
                    <Image style={{ width: 50, height: 50 }} source={require('../themes/img/counter.png')} />
                    {/* <Text>Counter</Text> */}

                </TouchableOpacity>

                {/* <Button title="Counter" onPress={() => navigation.navigate("CounterScreen")} /> */}
            </View>
        </View>
    )
}

export default HomeScreen
