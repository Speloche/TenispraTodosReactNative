import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'

const MyProfile = ({ navigation }) => {

const localId = useSelector( state => state.auth.localId)
const {data:user,isLoading} = useGetUserQuery({localId})

    if(isLoading) return <LoadingSpinner/>

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Bienvenido</Text>
            <Image
                source={user?.image ? {uri:user.image}: require("../../assets/profile.jpg")}
                resizeMode='cover'
                style={styles.image}
            />

            <SubmitButton title="Agregar imagen de perfil" onPress={() => navigation.navigate("ImageSelector")} />
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        alignItems: "center",
        gap: 20
    },
    greeting: {
        fontSize: 28, 
        fontWeight: 'bold',
        color:colors.azul, 
        marginBottom: 20, 
        textAlign: 'center', 
        fontFamily: 'JosefinRegular', 
        
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    }
})