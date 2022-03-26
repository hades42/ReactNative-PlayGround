import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail
                title="Forest"
                imageSource="https://images.unsplash.com/photo-1646442412837-bd9683f90f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
            <ImageDetail
                title="Mountain"
                imageSource="https://images.unsplash.com/photo-1646491730237-4b35c171c908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <ImageDetail
                title="Beach"
                imageSource="https://images.unsplash.com/photo-1646423170540-cad995369595?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
