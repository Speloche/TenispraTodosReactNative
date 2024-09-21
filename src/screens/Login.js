import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import { insertSession } from '../db'
import { colors } from '../global/colors'
import logo from '../../assets/logoAzul.png'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [triggerLogin, { data, isSuccess,isError,error }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isError) {
            setErrorEmail("Email o Contraseña incorrecta")
            setErrorPassword("Email o Contraseña incorrecta")
        }

    },[isError])



    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data } = await triggerLogin({ email, password })
            insertSession(data)

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
                    break
                case "password":
                    setErrorPassword(error.message)
                    setErrorEmail("")
                    break
                default:
                    break
            }
        }
    }

    return (
        <View style={styles.main}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                    labelStyle={{ color: 'white' }}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                    style={styles.input}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
                <Text style={styles.sub}>¿No tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Regístrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.azul,
    },
    container: {
        width: "90%",
        backgroundColor: colors.azulClaro,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    title: {
        fontSize: 35,
        fontFamily: "Lobster",
        color: colors.amarillo,
        marginBottom: 50,
    },
    input: {
        width: "100%",
    },
    sub: {
        fontSize: 18,
        color: "white",
        marginTop: 45,
    },
    subLink: {
        fontSize: 22,
        color: colors.amarillo,
        marginTop: 10,
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10
    },
})
