import { StyleSheet, Text, View } from 'react-native'


const OrderVacio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No tienes órdenes aún</Text>
            <Text style={styles.subtext}>Tus órdenes aparecerán aquí cuando realices una compra</Text>
        </View>
    )
}

export default OrderVacio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f8f8f8",  
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtext: {
        fontSize: 20,
        color: "#888",
        textAlign: "center",
    },
})