import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentsScreen = () => {
    const [number, setNumber] = useState(0);
    const increaseNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    return (
        <View>
            <Text style={styles.textStyle}>{number}</Text>
            <Button onPress={increaseNumber} title="Increase Number" />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ComponentsScreen;
