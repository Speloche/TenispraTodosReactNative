import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../services/orders'
import LoadingSpinner from '../components/LoadingSpinner'

import { colors } from '../global/colors'

const OrderDetail = ({ route }) => {
    const { id } = route.params
    const localId = useSelector(state => state.auth.localId)
    const { data: order, isSuccess } = useGetOrderByUserQuery({ localId, orderId: id })


    if (!isSuccess || !order) return <LoadingSpinner/>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles de la Orden</Text>
            <Text style={styles.date}>Fecha y Hora: {order.createdAt}</Text>
            <Text style={styles.total}>Precio Total: ${order.total}</Text>

            <FlatList
                data={order.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDetails}>
                            Cantidad: {item.quantity} | Precio: ${item.price} 
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    date: {
        fontSize: 16,
        marginBottom: 10,
    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: {
        backgroundColor: colors.azulClaro,
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color:"white"
    },
    itemDetails: {
        fontSize: 16,
        color: "white",
        marginTop: 10,
    },
})
