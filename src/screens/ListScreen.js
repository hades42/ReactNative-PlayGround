import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Card = ({ name, age }) => {
    return (
        <View
            style={{
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "blank",
                borderRadius: 2,
                height: 30,
                width: 140,
                marginBottom: 7,
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                }}
            >
                {name} - {age}
            </Text>
        </View>
    );
};

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 1 },
        { name: "Friend #2", age: 2 },
        { name: "Friend #3", age: 2 },
        { name: "Friend #4", age: 2 },
        { name: "Friend #5", age: 2 },
        { name: "Friend #6", age: 2 },
    ];
    return (
        <View style={styles.container}>
            <FlatList
                vertical
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({ item }) => {
                    return <Card name={item.name} age={item.age} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flex: 1,
    },
});

export default ListScreen;
