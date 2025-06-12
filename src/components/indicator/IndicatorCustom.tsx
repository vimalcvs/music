import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.overlay}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#fff' />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#bfbfbf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        padding: 20,
        backgroundColor: '#404040',
        borderRadius: 10,
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        color: '#ffffff',
    },
});