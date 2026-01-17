import { Surface } from "heroui-native";
import { CircleAlert } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatusMessageDemo = () => {
  return (
    <View className="flex-1 justify-center items-center px-[20] ">
      <View className="gap-4 w-full">
        <Surface
          variant="default"
          className="flex-row bg-[#F4FDFF] border border-[#0D6F85] rounded-lg "
        >
          <CircleAlert color={"#0D6F85"} />
          {/* <View className="w-full"> */}
          {/* <Text className="text-foreground">Surface Content</Text> */}
          <View className="pr-5 pl-2">
            <Text className="text-left text-[#0D6F85] ">
              Por favor aprueba el inicio de sesión desde tu WhatsApp
            </Text>
          </View>
          {/* </View> */}
        </Surface>
        <Surface variant="default" className="gap-4 flex-row">
          <View className="gap-2">
            <Text className="text-foreground">Surface Content</Text>
            <Text className="text-muted">
              This is a default surface variant. It uses bg-surface styling.
            </Text>
          </View>
        </Surface>
        <Surface variant="secondary" className="gap-2">
          <Text className="text-foreground">Surface Content</Text>
          <Text className="text-muted">
            This is a secondary surface variant. It uses bg-surface-secondary
            styling.
          </Text>
        </Surface>
        <Surface variant="tertiary" className="gap-2">
          <Text className="text-foreground">Surface Content</Text>
          <Text className="text-muted">
            This is a tertiary surface variant. It uses bg-surface-tertiary
            styling.
          </Text>
        </Surface>
        <Surface variant="quaternary" className="gap-2">
          <Text className="text-foreground">Surface Content</Text>
          <Text className="text-muted">
            This is a quaternary surface variant. It uses bg-surface-quaternary
            styling.
          </Text>
        </Surface>
      </View>
    </View>
  );
};

export default StatusMessageDemo;

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
