import { useRouter } from "expo-router";
import { Button } from "heroui-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const PlaygroundHandler = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => router.push("/playground/ui")}
          style={styles.button}
        >
          UI Components
        </Button>

        <Button
          onPress={() => router.push("/playground/components")}
          variant="secondary"
          style={styles.button}
        >
          Components
        </Button>
      </View>
    </View>
  );
};

export default PlaygroundHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  buttonContainer: {
    gap: 16,
    width: "100%",
    maxWidth: 300,
  },
  button: {
    width: "100%",
  },
});
