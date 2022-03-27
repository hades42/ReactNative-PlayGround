import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>Box Screen</Text>
            <Text style={styles.textStyle}>Box Screen</Text>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        borderWidth: 5,
        borderColor: "red",
        margin: 20,
    },
    textStyleOne: {
        borderWidth: 5,
        borderColor: "blue",
        ...StyleSheet.absoluteFillObject,
    },
});

export default BoxScreen;
