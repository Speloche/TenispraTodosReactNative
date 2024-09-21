import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import ShadowWrapper from './ShadowWrapper';
import { useNavigation } from '@react-navigation/native';

const Category = ({ item }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate("Products", { category: item })}>
            <ShadowWrapper style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </ShadowWrapper>
        </Pressable>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: colors.azulClaro,
        marginVertical: 10,
        paddingVertical: 20, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, 
        },
        shadowOpacity: 0.3, 
        shadowRadius: 6, 
        elevation: 5, 
    },
    text: {
        fontSize: 22, 
        fontFamily: "JosefinRegular",
        color: '#fff', 
        fontWeight: "bold", 
    },
});
