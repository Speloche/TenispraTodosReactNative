import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';
import { useGetProductsQuery } from '../services/shop';
import LoadingSpinner from '../components/LoadingSpinner';

const ItemListCategories = ({ route }) => {
    const { category } = route.params;
    const { data: products, isSuccess, isLoading, isError, error } = useGetProductsQuery(category);
    const [productsFilted, setProductsFilted] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            setProductsFilted(products);
        }
    }, [category, isSuccess]);

    const onSearch = (input) => {
        if (input) {
            setProductsFilted(productsFilted.filter(product => product.title.toLowerCase().includes(input.toLowerCase())));
        } else {
            setProductsFilted(products);
        }
    };

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <View style={styles.errorContainer}><Text>{error.message}</Text></View>;

    return (
        <SafeAreaView style={styles.container}>
            <Search onSearch={onSearch} />
            <FlatList
                data={productsFilted}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductItem product={item} />}
                contentContainerStyle={styles.listContainer} 
                showsVerticalScrollIndicator={false} 
            />
        </SafeAreaView>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        padding: 10, 
        
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingBottom: 20, 
    },
});
