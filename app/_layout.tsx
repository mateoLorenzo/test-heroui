import { Stack } from "expo-router";
import { HeroUINativeProvider, type HeroUINativeConfig } from "heroui-native";
import { KeyboardAvoidingView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import "../global.css";

const generateConfig = (insets: EdgeInsets) => {
  const config: HeroUINativeConfig = {
    textProps: {
      // Disable font scaling for accessibility
      allowFontScaling: true,
      // Auto-adjust font size to fit container
      adjustsFontSizeToFit: false,
      // Maximum font size multiplier when scaling
      maxFontSizeMultiplier: 1.5,
      // Minimum font scale (iOS only, 0.01-1.0)
      minimumFontScale: 0.5,
    },
    // Disable all animations across the application (cascades to all children)
    // animation: "disable-all",
    devInfo: {
      // Disable styling principles information message
      stylingPrinciples: false,
    },

    toast: {
      // Global toast configuration (used as defaults for all toasts)
      defaultProps: {
        variant: "default",
        placement: "top",
        isSwipeable: true,
        animation: true,
      },
      // Insets for spacing from screen edges (added to safe area insets)
      insets: {
        top: insets.top, // Default: iOS = 0, Android = 12
        bottom: 6, // Default: iOS = 6, Android = 12
        left: 12, // Default: 12
        right: 12, // Default: 12
      },
      // Maximum number of visible toasts before opacity starts fading
      maxVisibleToasts: 3,
      // Custom wrapper function to wrap the toast content
      contentWrapper: (children) => (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={24}
          className="flex-1"
          pointerEvents="box-none"
        >
          {children}
        </KeyboardAvoidingView>
      ),
    },
  };
  return config;
};

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const config = generateConfig(insets);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <HeroUINativeProvider config={config}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="playground" options={{ headerShown: false }} />
          </Stack>
        </HeroUINativeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
