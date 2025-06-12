import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

type Item = {
    title: string;
};

type Section = {
    title: string;
    data: Item[];
};

const DATA: Section[] = [
    {
        title: 'Main dishes',
        data: [
            {title: 'Pizza'},
            {title: 'Burger'},
            {title: 'Risotto'},
            {title: 'Steak'},
            {title: 'Pasta'},
        ],
    },
    {
        title: 'Sides',
        data: [
            {title: 'French Fries'},
            {title: 'Onion Rings'},
            {title: 'Fried Shrimps'},
            {title: 'Salad'},
            {title: 'Garlic Bread'},
        ],
    },
    {
        title: 'Drinks',
        data: [
            {title: 'Water'},
            {title: 'Coke'},
            {title: 'Beer'},
            {title: 'Wine'},
            {title: 'Juice'},
        ],
    },
    {
        title: 'Desserts',
        data: [
            {title: 'Cheese Cake'},
            {title: 'Ice Cream'},
            {title: 'Brownie'},
            {title: 'Pudding'},
            {title: 'Tiramisu'},
        ],
    },
    {
        title: 'Appetizers',
        data: [
            {title: 'Bruschetta'},
            {title: 'Stuffed Mushrooms'},
            {title: 'Deviled Eggs'},
            {title: 'Spring Rolls'},
            {title: 'Garlic Knots'},
        ],
    },
    {
        title: 'Soups',
        data: [
            {title: 'Tomato Soup'},
            {title: 'Chicken Noodle Soup'},
            {title: 'Miso Soup'},
            {title: 'Clam Chowder'},
            {title: 'French Onion Soup'},
        ],
    },
];

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                stickySectionHeadersEnabled={true}
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
    header: {
        backgroundColor: '#fff',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1c1c1e',
    },
    item: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#1c1c1e',
    },
    listContainer: {
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
});