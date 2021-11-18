import { StackScreenProps } from '@react-navigation/stack'
import React, { useRef, useState } from 'react'
import { Button, Text, View } from 'react-native'
import BtnCalculator from '../components/calculator/BtnCalculator'
import { style } from '../themes/calculatorTheme'

//#2D2D2D gris dark
//#9B9B9B gris white
//#FF9427 Orange
enum Operators {
    divide, sum, multiply, subtract
}
interface props extends StackScreenProps<any, any> {


}
const CalculatorScreen = ({ navigation }: props) => {

    const [lastNumber, setLastNumber] = useState('0')
    const [number, setNumero] = useState('0')
    const lastOperator = useRef<Operators>()
    const clear = () => {
        setNumero('0')
        setLastNumber('0')
    }

    const putNumber = (textNumber: string) => {


        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (textNumber === '.') {

                setNumero(number + textNumber);

            } else if (textNumber === '0' && number.includes('.')) {

                setNumero(number + textNumber);

            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumero(textNumber);

            } else if (textNumber === '0' && !number.includes('.')) {
                setNumero(number)
            } else {
                setNumero(textNumber);
            }

        } else {
            setNumero(number + textNumber)

        }

    }

    const changeOperator = () => {

        if (number.includes('-')) {
            setNumero(number.replace('-', ''))
        } else {
            setNumero('-' + number)
        }

    }

    const btnDelete = () => {

        let negative = '';
        let numberTemp = number;
        if (number.includes('-')) {
            negative = '-'
            numberTemp = number.substr(1);
        }

        if (numberTemp.length > 1) {
            setNumero(negative + numberTemp.slice(0, -1));
        } else {
            setNumero('0')
        }

    }

    const changeNumberForLast = () => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0, -1))
        } else {
            setLastNumber(number)
        }
        setNumero('0')
    }

    const btnDivide = () => {
        changeNumberForLast()
        lastOperator.current = Operators.divide
    }


    const btnMultiply = () => {
        changeNumberForLast()
        lastOperator.current = Operators.multiply
    }
    const btnSubtract = () => {
        changeNumberForLast()
        lastOperator.current = Operators.subtract
    }
    const btnSum = () => {
        changeNumberForLast()
        lastOperator.current = Operators.sum
    }

    const calculator = () => {

        const num1 = Number(number);
        const num2 = Number(lastNumber);

        switch (lastOperator.current) {
            case Operators.sum:
                setNumero(`${num1 + num2}`);

                break;

            case Operators.subtract :
                setNumero(`${num2 - num1}`);

                break;
            case Operators.multiply :
                setNumero(`${num1 * num2}`);

                break;
            case Operators.divide :
                setNumero(`${num2 / num1}`);

                break;

            default:
                break;
        }
        setLastNumber('0');

    }

    return (
        <View style={style.container}>
            {
                (lastNumber !== '0') && <Text style={style.textResultSmall}>{lastNumber}</Text>
            }

            <Text

                style={style.textResult}>{number}</Text>


            <View style={style.row}>

                <BtnCalculator text="C" color="#9B9B9B" onPress={clear} />
                <BtnCalculator text="+/-" color="#9B9B9B" onPress={changeOperator} />
                <BtnCalculator text="del" color="#9B9B9B" onPress={btnDelete} />
                <BtnCalculator text="/" color="#FF9427" onPress={btnDivide} />

            </View>
            <View style={style.row}>

                <BtnCalculator text="7" onPress={putNumber} />
                <BtnCalculator text="8" onPress={putNumber} />
                <BtnCalculator text="9" onPress={putNumber} />
                <BtnCalculator text="X" color="#FF9427" onPress={btnMultiply} />

            </View>
            <View style={style.row}>

                <BtnCalculator text="4" onPress={putNumber} />
                <BtnCalculator text="5" onPress={putNumber} />
                <BtnCalculator text="6" onPress={putNumber} />
                <BtnCalculator text="-" color="#FF9427" onPress={btnSubtract} />

            </View>
            <View style={style.row}>

                <BtnCalculator text="1" onPress={putNumber} />
                <BtnCalculator text="2" onPress={putNumber} />
                <BtnCalculator text="3" onPress={putNumber} />
                <BtnCalculator text="+" color="#FF9427" onPress={btnSum} />

            </View>
            <View style={style.row}>

                <BtnCalculator text="0" BtnWidth onPress={putNumber} />
                <BtnCalculator text="." onPress={putNumber} />
                <BtnCalculator text="=" color="#FF9427" onPress={calculator} />

            </View>
        </View>
    )
}

export default CalculatorScreen
