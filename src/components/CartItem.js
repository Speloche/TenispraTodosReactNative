import { StyleSheet, Text, View, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { colors } from '../global/colors';

const CartItem = ({ item, onRemove }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>
            <Pressable style={styles.iconContainer} onPress={() => onRemove(item.id)}>
                <Feather name="trash-2" size={28} color="white" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: colors.azulClaro,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 3, 
    },
    containerText: {
        width: "80%",
        gap: 5,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: '600', 
    },
    brand: {
        color: "white",
        fontSize: 18,
        opacity: 0.8, 
    },
    price: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    iconContainer: {
        backgroundColor: "red", 
        padding: 10,
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});
