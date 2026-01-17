import { Ionicons } from "@expo/vector-icons";
import { Switch } from "heroui-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { ZoomIn } from "react-native-reanimated";

const SwitchDemo = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-row gap-4">
        <Switch
          isSelected={darkMode}
          onSelectedChange={setDarkMode}
          className="w-[56px] h-[32px]"
          animation={{
            backgroundColor: {
              value: ["#172554", "#eab308"],
            },
          }}
        >
          <Switch.Thumb
            className="size-[22px]"
            animation={{
              left: {
                value: 4,
                springConfig: {
                  damping: 30,
                  stiffness: 300,
                  mass: 1,
                },
              },
            }}
          />
          <Switch.StartContent className="left-2">
            {darkMode && (
              <Animated.View key="sun" entering={ZoomIn.springify()}>
                <Ionicons name="sunny" size={16} color="#854d0e" />
              </Animated.View>
            )}
          </Switch.StartContent>
          <Switch.EndContent className="right-2">
            {!darkMode && (
              <Animated.View key="moon" entering={ZoomIn.springify()}>
                <Ionicons name="moon" size={16} color="#dbeafe" />
              </Animated.View>
            )}
          </Switch.EndContent>
        </Switch>
      </View>
    </View>
  );
};

export default SwitchDemo;

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
