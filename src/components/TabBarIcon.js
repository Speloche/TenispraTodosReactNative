import { StyleSheet, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const TabBarIcon = ({text, icon, focused}) => {
    return (
        <View style={styles.container}>
            <Feather style={styles.icon} 
            name={icon} 
            size={29} 
            color={focused ? "yellow" : "white"} 
            />
            <Text style={{color:focused ? "yellow" : "white"}}>{text}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap:10,
        position:"absolute",
        bottom: -18
    },
})