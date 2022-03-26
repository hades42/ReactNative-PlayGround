import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>I'm changing thing at run-time</Text>
            <Button
                title="Go to List Demo"
                onPress={() => props.navigation.navigate("List")}
            />
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Component")}
            >
                <Text>Go to Component demo</Text>
            </TouchableOpacity>
            <Button
                title="Go to Image"
                onPress={() => props.navigation.navigate("Image")}
            />
            <Button
                title="Go to ColorScreen"
                onPress={() => props.navigation.navigate("Color")}
            />
            <Button
                title="Go to SquareScreen"
                onPress={() => props.navigation.navigate("Square")}
            />

            <Button
                title="Go to TextInput"
                onPress={() => props.navigation.navigate("Text")}
            />

            <Button
                title="Go to BoxScreen"
                onPress={() => props.navigation.navigate("Box")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
