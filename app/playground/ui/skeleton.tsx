import { Skeleton } from "heroui-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const SkeletonDemo = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className=" gap-2">
        <View className="w-50 h-50 rounded-2xl overflow-hidden ">
          <Skeleton variant="shimmer" className="h-full w-full" />
        </View>
        <View className="w-50 h-5 rounded-full overflow-hidden ">
          <Skeleton variant="shimmer" className="h-full w-full" />
        </View>
        <View className="w-30 h-5 rounded-full overflow-hidden ">
          <Skeleton variant="shimmer" className="h-full w-full" />
        </View>
      </View>
    </View>
  );
};

export default SkeletonDemo;

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
