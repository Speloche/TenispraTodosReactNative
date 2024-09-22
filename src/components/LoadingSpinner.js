import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { colors } from '../global/colors';

const LoadingSpinner = ({ message }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
            
        </View>
    );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.azul,
    },
    message: {
        marginTop: 10,
        fontSize: 16,
        color: 'white',
    },
});

