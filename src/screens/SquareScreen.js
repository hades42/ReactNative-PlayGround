import React, { useReducer, useState } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case "red":
            if (
                state.red + action.amount > 255 ||
                state.red + action.amount < 0
            ) {
                return state;
            }
            return { ...state, red: state.red + action.amount };
        case "green":
            if (
                state.green + action.amount > 255 ||
                state.green + action.amount < 0
            ) {
                return state;
            }
            return { ...state, green: state.green + action.amount };

        case "blue":
            if (
                state.blue + action.amount > 255 ||
                state.blue + action.amount < 0
            ) {
                return state;
            }
            return { ...state, blue: state.blue + action.amount };

        default:
            return { state };
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    return (
        <View>
            <Text>Something here I guess</Text>
            <ColorCounter
                onIncrease={() =>
                    dispatch({ type: "red", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "red", amount: -1 * COLOR_INCREMENT })
                }
                text="Red"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({ type: "blue", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "blue", amount: -1 * COLOR_INCREMENT })
                }
                text="Blue"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({ type: "green", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({ type: "green", amount: -1 * COLOR_INCREMENT })
                }
                text="Green"
            />
            <View
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`,
                }}
            />
        </View>
    );
};

export default SquareScreen;
