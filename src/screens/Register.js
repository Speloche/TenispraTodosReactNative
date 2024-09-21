import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useRegisterMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../validations/registerSchema'



const Register = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [triggerRegister, { data, isSuccess, isError,error }] = useRegisterMutation()
    const dispatch = useDispatch()


    useEffect(()=>{
        if(isError) {
            setErrorEmail("Email ya registrado")
            
        }

    },[isError])




    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPassword })
            const { data } = await triggerRegister({ email, password })
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    setErrorPassword("")
                    setErrorConfirmPassword("")
                    break
                case "password":
                    setErrorEmail("")
                    setErrorPassword(error.message)
                    setErrorConfirmPassword("")
                    break
                case "confirmPassword":
                    setErrorEmail("")
                    setErrorPassword("")
                    setErrorConfirmPassword(error.message)
                    break

            }
        }
    }



    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirmPassword}
                />
                <SubmitButton  onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>Ya tenes una cuenta?</Text>
                <Pressable style={styles.linkContainer} onPress={() => navigation.navigate("Login")} >
                    <Text style={styles.subLink}>Incio de sesion</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colors.azulClaro,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        fontFamily: "Lobster",
        color: colors.amarillo,
    },
    sub: {
        fontSize: 20,
        fontFamily: "Josefin",
        color: "white",
        marginTop:20,
    },
    linkContainer: {
        borderWidth: 1,         
        borderColor: colors.amarillo, 
        borderRadius: 5,        
        padding: 5,             
        margin: 12
    },
    subLink: {
        fontSize: 22,
        fontFamily: "Josefin",
        color: colors.amarillo,
        padding: 8,
    }
})