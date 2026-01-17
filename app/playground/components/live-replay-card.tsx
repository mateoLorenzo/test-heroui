import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LiveReplayCardDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LiveReplayCard</Text>
    </View>
  );
};

export default LiveReplayCardDemo;

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
