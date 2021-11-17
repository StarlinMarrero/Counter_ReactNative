import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    const styles = StyleSheet.create({
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 50,
            // marginTop: 50,
            bottom: -300
        },
        button: {
            alignItems: "center",
            backgroundColor: "#3498db",
            padding: 10,
            borderRadius: 100,
            width: 60,
            height: 60,
            // position: 'absolute',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,


        },
        buttonLeft: {
            position: 'absolute',
            bottom: 0,
        },
        title: {
            color: "#fff",
            fontSize: 40,
            textAlign: "center",
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    })


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#34495e',
            justifyContent: 'center'
        }}>
            <Text style={{ color: "white", fontSize: 30, textAlign: 'center', fontWeight: '700' }}>Counter: {counter}</Text>

            <View style={styles.fixToText}>
                <TouchableOpacity
                activeOpacity={0.75}
                    style={styles.button}
                    onPress={() => setCounter(counter + 1)}
                >
                    <Text style={styles.title}>+</Text>

                </TouchableOpacity>

                <TouchableOpacity
                 activeOpacity={0.75}
                    style={styles.button}
                    onPress={() => setCounter(counter - 1)}
                >

                    <Text style={styles.title}>-</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CounterScreen
