import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
    console.log(imageSource);
    return (
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: `${imageSource}`,
                }}
            />
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});

export default ImageDetail;
