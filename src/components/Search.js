import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Search = ({ onSearch }) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = (t) => {
        setInput(t)
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {

        const regex = /[^a-zA-Z0-9]/
        if (regex.test(input)) {
            setError("Caracteres no validos")
        } else {
            setError("")
            onSearch(input)

        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput style={styles.input}
                    placeholder='Buscar Producto'
                    placeholderTextColor="#fff"
                    value={input}
                    onChangeText={handleInputChange}
                />

                <View style={styles.buttonContainer}>
                    <Pressable onPress={search}>
                        <AntDesign name="search1" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={handleRemoveInput}>
                        <MaterialCommunityIcons name="cancel" size={26} color="black" />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 20,
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 3,
    },
    error: {
        color: "red",
        fontWeight: "bold",
        marginLeft: 20,
    },
    input: {
        margin: 5,
        backgroundColor: colors.azul,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        color: "white",
        width: "78%"
    },
})