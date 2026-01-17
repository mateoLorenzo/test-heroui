import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ImageDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image</Text>
    </View>
  );
};

export default ImageDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
