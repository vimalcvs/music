import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AlertComponent = () => {
    const showAlert = () => {
      Alert.alert('Title', 'Message', [{text: 'OK'}]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showAlert} style={styles.button}>
                <Text style={styles.buttonText}>Show Alert</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AlertComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#f1f1f1',
    },
});