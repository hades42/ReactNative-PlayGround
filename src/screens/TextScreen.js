import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
    const [currText, setCurrText] = useState("");
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setCurrText(value)}
            ></TextInput>
            <Text>{currText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default TextScreen;
