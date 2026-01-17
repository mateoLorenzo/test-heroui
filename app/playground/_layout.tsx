import { Stack } from "expo-router";

export default function PlaygroundLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ui" options={{ headerShown: false }} />
      <Stack.Screen name="components" options={{ headerShown: false }} />
    </Stack>
  );
}
