import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

const App: React.FC = () => {
    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
            {Array.from({length: 20}, (_, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Item {index + 1}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        paddingVertical: 20,
    },
    itemContainer: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    itemText: {
        color: '#1c1c1e',
        fontWeight: 'bold',
    },
});