import { Pressable, StyleSheet, Text, View, StatusBar, Platform, Image } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { deleteSession } from '../db';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import logo from '../../assets/logoAzul.png';

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const idToken = useSelector(state => state.auth.idToken);
  const navigation = useNavigation();
  const route = useRoute();

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      {route.name !== "Home" ? (
        <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
        </Pressable>
      ) : (
        <Image source={logo} style={styles.logo} />
      )}
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <Feather name="log-out" size={28} color="white" />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.azul,
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 45,
    flexDirection: "row",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    color: colors.amarillo,
    fontFamily: "Josefin",
    marginHorizontal: 10, 
    textAlign: 'center',
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  logout: {
    position: "absolute",
    right: 20,
    bottom: 25,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    position: "absolute",
    left: 20, 
    borderRadius: 10,
  },
});
