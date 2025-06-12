
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';

type ItemData = {
    id: string;
    title: string;
};

const DATA: ItemData[] = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
    {id: '6', title: 'Item 6'},
    {id: '7', title: 'Item 7'},
    {id: '8', title: 'Item 8'},
    {id: '9', title: 'Item 9'},
    {id: '10', title: 'Item 10'},
];

type ItemProps = {
    title: string;
};

const Item: React.FC<ItemProps> = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const App: React.FC = () => {
    const renderItem: ListRenderItem<ItemData> = ({item}) => <Item title={item.title} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
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
    title: {
        color: '#1c1c1e',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 20,
    },
});
