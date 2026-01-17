import { Button, Toast, useToast } from "heroui-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <SafeAreaView className="flex-1 jsutify-center items-center">
      <View className="gap-4 p-4">
        <Button
          onPress={() =>
            toast.show({
              variant: "success",
              label: "You have upgraded your plan",
              description: "You can continue using HeroUI Chat",
              actionLabel: "Close",
              onActionPress: ({ hide }) => hide(),
              placement: "top",
              isSwipeable: true,
              animation: true,
            })
          }
        >
          Show Success Toast
        </Button>
        <Button
          onPress={() =>
            toast.show({
              component: (props) => (
                <Toast variant="accent" {...props}>
                  <Toast.Title>Custom Toast</Toast.Title>
                  <Toast.Description>
                    This uses a custom component
                  </Toast.Description>
                  <Toast.Action onPress={() => props.hide()}>Undo</Toast.Action>
                  <Toast.Close className="absolute top-0 right-0" />
                </Toast>
              ),
            })
          }
        >
          Show Custom Toast
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ToastDemo;

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
