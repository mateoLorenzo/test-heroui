import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LessonStatusIndicatorDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LessonStatusIndicator</Text>
    </View>
  );
};

export default LessonStatusIndicatorDemo;

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
