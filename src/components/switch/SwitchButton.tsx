import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const App: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Switch is {isEnabled ? 'On' : 'Off'}</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} trackColor={{false: '#1c1c1e'}} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#1c1c1e',
        marginBottom: 10,
    },
});