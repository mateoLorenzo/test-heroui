import { Button } from "heroui-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const ButtonDemo = () => {
  return (
    <View className="flex-1 justify-center px-[20%] gap-4 ">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </View>
  );
};

export default ButtonDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "20%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
