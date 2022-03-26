import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ text, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{text}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${text}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${text}`} />
        </View>
    );
};

export default ColorCounter;
