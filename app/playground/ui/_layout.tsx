import { Stack } from "expo-router";

export default function UILayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="showcase" options={{ headerShown: false }} />
    </Stack>
  );
}
