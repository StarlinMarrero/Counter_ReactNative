import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from '../../themes/calculatorTheme'

interface props {
    text: string,
    color?: string,
    BtnWidth?: boolean,
    onPress: (textNumber: string) => void
}
//#2D2D2D gris dark
//#FF9427 Orange

const BtnCalculator = ({ text, color = '#2D2D2D', BtnWidth = false, onPress }: props) => {

    

    return (
        <TouchableOpacity onPress={ () => onPress(text) }>

            <View style={{ ...style.button, backgroundColor: color, width: (BtnWidth) ? 180 : 80 }}>
                <Text style={{
                    ...style.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnCalculator
