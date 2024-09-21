import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/orders';
import { clearCart } from '../features/cart/cartSlice';
import CartVacio from '../components/CartVacio';
import { removeItemCart } from '../features/cart/cartSlice';

const Cart = ({ navigation }) => {
    const cart = useSelector(state => state.cart);
    const localId = useSelector(state => state.auth.localId);
    const dispatch = useDispatch();
    const [triggerPostOrder] = usePostOrderMutation();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemCart(itemId)); 
    };

    const handleAddOrder = () => {
        const createdAt = new Date().toLocaleString();
        const order = {
            ...cart,
            createdAt
        };

        triggerPostOrder({ localId, order });
        dispatch(clearCart());
        navigation.navigate("OrdersStack");
    };

    if (cart.total === 0) return <CartVacio />;

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CartItem item={item} onRemove={handleRemoveItem} />
                )}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.containerConfirm}>
                <Pressable style={styles.buttonConfirm} onPress={handleAddOrder}>
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </Pressable>
                <Text style={styles.textTotal}>Total: {cart.total} $</Text>
            </View>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: "white", 
        padding: 10, 
    },
    listContainer: {
        paddingBottom: 20, 
    },
    containerConfirm: {
        backgroundColor: colors.azulClaro,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center', 
        borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5,
    },
    buttonConfirm: {
        backgroundColor: colors.azulClaro, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,      
        borderColor: 'white'
    },
    textConfirm: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold', 
    },
    textTotal: {
        color: colors.amarillo,
        fontSize: 20,
        
    },
});
