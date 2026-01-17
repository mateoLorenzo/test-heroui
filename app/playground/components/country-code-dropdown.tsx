import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CountryCodeDropdownDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CountryCodeDropdown</Text>
    </View>
  );
};

export default CountryCodeDropdownDemo;

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
