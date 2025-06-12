import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useColors } from '../../context/ThemeContext';
import { useStyles } from '../../styles/globalStyles';

const AlertCustomComponent = () => {
    const {colors} = useColors();
    const styles = useStyles();
    const onPressTwoOptionsAlert = () => {
        Alert.alert('Title', 'Two Options Alert', [
            {
                text: 'OK',
                onPress: () => console.log('OK!'),
            },
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => console.log('Cancel!'),
            },
        ]);
    };

    const onPressThreeOptionsAlert = () => {
        Alert.alert('Title', 'Three Options Alert', [
            {
                text: 'destructive',
                style: 'destructive',
                onPress: () => console.log('Destructive!'),
            },
            {
                text: 'OK',
                onPress: () => console.log('OK!'),
            },
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => console.log('Cancel!'),
            },
        ]);
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={styles.bodyText}>Alert Custom</Text>
            <TouchableOpacity onPress={onPressTwoOptionsAlert} style={styles.button}>
                <Text style={styles.button}>Show Two Options Alert</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={onPressThreeOptionsAlert} style={styles.button}>
                <Text style={styles.button}>Show Three Options Alert</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AlertCustomComponent;