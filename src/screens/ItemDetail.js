import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import { addItemCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useGetProductQuery } from '../services/shop';
import LoadingSpinner from '../components/LoadingSpinner';
import { showMessage } from 'react-native-flash-message';


const ItemDetail = ({ route }) => {
    const { id } = route.params;
    const { data: product, isLoading } = useGetProductQuery(id);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAddItemCart = () => {
        dispatch(addItemCart({ ...product, quantity: 1 }));
        showMessage({
            message: "Artículo agregado al carrito",
            description: `${product.title} ha sido agregado.`,
            type: "success",
        });
        
        navigation.navigate("CartStack");
    };
    if (isLoading) return <LoadingSpinner />;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: product.thumbnail }}
            />
            <View style={styles.containerDetail}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>Precio: ${product.price}</Text>
                <Pressable style={styles.button} onPress={handleAddItemCart}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 45,
    },
    containerDetail: {
        marginTop: 15,
        alignItems: 'center',
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: colors.azul, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center', 
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center', 
        marginBottom: 15,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.azul, 
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 10, 
        overflow: 'hidden',
        marginBottom: 15,
    },
    button: {
        backgroundColor: colors.azulClaro,
        borderRadius: 7,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    },
});
