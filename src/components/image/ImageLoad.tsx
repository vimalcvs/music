import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FoodImage from './assets/images/settings.png'; // Local Path

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={FoodImage} />
                <Text style={styles.text}>Local Image</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{uri: 'https://dummyimage.com/16:9x1080/0077b3/fff.png&text=Remote+URL'}} />
                <Text style={styles.text}>Remote URL</Text>
            </View>
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
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: 300,
        height: 150,
    },
    text: {
        fontSize: 18,
        color: '#1c1c1e',
        marginVertical: 5,
    },
});