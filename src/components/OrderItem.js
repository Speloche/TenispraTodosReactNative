import { Pressable, StyleSheet, Text, View } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.id}>Código: {item.id}</Text>
                <Text style={styles.date}>Compra el: {item.createdAt}</Text>
                <Text style={styles.total}>Total: $ {item.total.toFixed(2)}</Text>
            </View>
            <Pressable style={styles.iconContainer} onPress={() => navigation.navigate("OrderDetail", { id: item.id })}>
                <EvilIcons name="search" size={34} color="white" />
            </Pressable>
        </View>
    );
};

export default OrderItem;

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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    containerText: {
        gap: 10,
    },
    id: {
        fontSize: 16,
        color: "white",
        fontWeight: "600",  
    },
    date: {
        fontSize: 16,
        color: "white",
        opacity: 0.8,  
    },
    total: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    iconContainer: {
        backgroundColor: colors.amarillo, 
        borderRadius: 40, 
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
