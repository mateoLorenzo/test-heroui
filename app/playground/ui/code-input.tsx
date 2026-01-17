import { InputOTP } from "heroui-native";
import React from "react";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";

const CodeInputDemo = () => {
  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center">
        <InputOTP maxLength={6} onComplete={(code) => console.log(code)}>
          <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
          </InputOTP.Group>
          <InputOTP.Separator />
          <InputOTP.Group>
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
          </InputOTP.Group>
        </InputOTP>
      </View>
    </Pressable>
  );
};

export default CodeInputDemo;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
