import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CartVacio = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/keep-calm.jpg")} 
                style={styles.image}
            />
            <Text style={styles.text}>Tu carrito está vacío</Text>
            <Text style={styles.subtext}>Agrega productos para comenzar</Text>
        </View>
    )
}

export default CartVacio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f8f8f8",
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 80,
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    subtext: {
        fontSize: 20,
        color: "#888",
    },
})