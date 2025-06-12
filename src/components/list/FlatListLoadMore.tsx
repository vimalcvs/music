import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';

type Item = {
    id: number;
    title: string;
};

const createInitialData = (): Item[] => {
    return Array.from({length: 15}, (_, index) => ({
        id: index,
        title: `Item ${index}`,
    }));
};

const App: React.FC = () => {
    const [data, setData] = useState<Item[]>(createInitialData());
    const [loading, setLoading] = useState<boolean>(false);

    const LoadingIndicator = () => (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>
    );

    const loadMoreItems = () => {
        if (loading) {
            return;
        }
        setLoading(true);

        setTimeout(() => {
            const newData = Array.from({length: 20}, (_, index) => ({
                id: data.length + index,
                title: `Item ${data.length + index}`,
            }));

            setData(data.concat(newData));
            setLoading(false);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? LoadingIndicator : null}
            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    text: {
        color: '#1c1c1e',
        fontWeight: 'bold',
    },
    loadingContainer: {
        paddingVertical: 20,
    },
});