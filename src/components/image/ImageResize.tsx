import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>width: 150, height: 150</Text>
            <View style={styles.row}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://dummyimage.com/16:9x1080/0077b3/fff.png'}}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>resizeMode: cover</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://dummyimage.com/16:9x1080/0077b3/fff'}}
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>resizeMode: contain</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://dummyimage.com/16:9x1080/0077b3/fff'}}
                        resizeMode="stretch"
                    />
                    <Text style={styles.text}>resizeMode: stretch</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://dummyimage.com/16:9x1080/0077b3/fff'}}
                        resizeMode="center"
                    />
                    <Text style={styles.text}>resizeMode: center</Text>
                </View>
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
    title: {
        fontSize: 20,
        color: '#1c1c1e',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        margin: 20,
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: '#1c1c1e',
    },
    text: {
        color: '#1c1c1e',
        marginVertical: 5,
    },
});