import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: "#1a1a1a",
      
       
    },
    textResult: {
        color: "#353b48",
        fontSize: 60,
        textAlign: "right"
    },
    textResultSmall: {
        color: "#8a8a8a",
        fontSize: 30,
        textAlign: "right"
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        justifyContent: "flex-end"
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 5
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 35,
        color: "white",
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 18,
        // left: 20,
        // right: 20
        // paddingHorizontal: 0
    }
})