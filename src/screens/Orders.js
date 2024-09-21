import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../components/OrderItem';
import { useGetOrdersByUserQuery } from '../services/orders';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';
import OrderVacio from '../components/OrderVacio';

const Orders = () => {

const localId = useSelector(state=> state.auth.localId)

const {data:orders,isSuccess,isLoading} = useGetOrdersByUserQuery(localId)

if(isLoading) return <LoadingSpinner/> 
if(orders.length === 0) return <OrderVacio/>  

    return (
        <View>
            <FlatList
            data={orders}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> <OrderItem item={item}/>}
            />
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({})