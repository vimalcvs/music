import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const App: React.FC = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size='large' />
            <ActivityIndicator size='small' color='#0077b3' />
            <ActivityIndicator size='large' color='#ffb3ff' />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});