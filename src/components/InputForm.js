import { StyleSheet, Text, View, TextInput } from 'react-native'

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                secureTextEntry={isSecure}
            />
            <View><Text style={styles.error}>{error ? error : ""} </Text></View>
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%"
    },
    input: {
        width: "90%",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: "white",
        padding: 5,
        fontFamily: "Josefin",
        fontSize: 20,
        marginHorizontal: "5%",
        marginVertical: 15,
        color: "white",
    },
    titleInput: {
        width: "90%",
        marginHorizontal: "5%",
        fontSize: 20,
        fontFamily: "Josefin",
        color: "white",
    },
    error: {
        fontSize: 18,
        color: "red",
        fontFamily: "Josefin",
        fontStyle: "italic",
        marginLeft: 20
    }
})