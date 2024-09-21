import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ product }) => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Detail', { id: product.id })}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: product.thumbnail }}
            />
            <Text style={styles.title}>{product.title}</Text>
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.azulClaro,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10, // Bordes más redondeados
        padding: 15, // Aumento de padding
        width: '90%', // Usar el 100% del ancho
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3, // Aumento de opacidad
        shadowRadius: 6, // Mayor difuminado
        elevation: 5, // Sombra en Android
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Color del texto
        paddingLeft: 30, // Espacio entre la imagen y el texto
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8, // Bordes redondeados para la imagen
    },
});
