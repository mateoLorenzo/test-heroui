import { Divider } from "heroui-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DivisorDemo = () => {
  return (
    <View className="flex-1 justify-center items-center px-[20] ">
      {/* <View>
        <Text>Horizontal divider</Text>
        <Divider orientation="horizontal" />
        <Text>Content below</Text>
      </View> */}
      <View className="h-24 flex-row w-full items-center justify-center gap-4">
        <View className="flex-1">
          <Divider orientation="horizontal" variant="thin" />
        </View>
        <Text>O CONTINUAR CON</Text>
        <View className="flex-1">
          <Divider orientation="horizontal" variant="thin" />
        </View>
      </View>
    </View>
  );
};

export default DivisorDemo;

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
