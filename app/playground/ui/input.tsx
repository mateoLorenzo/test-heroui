import { Ionicons } from "@expo/vector-icons";
import { TextField } from "heroui-native";
import React, { useState } from "react";
import { Keyboard, Pressable, View } from "react-native";
import { withUniwind } from "uniwind";

const StyledIonicons = withUniwind(Ionicons);

const InputDemo = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <View className="flex-1 px-5 pt-10 ">
        <TextField>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input placeholder="Enter your email" />
          <TextField.Description>
            We&apos;ll never share your email
          </TextField.Description>
          <TextField.ErrorMessage>
            This is an error message
          </TextField.ErrorMessage>
        </TextField>

        <TextField isRequired isInvalid>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input placeholder="Enter your email" />
          <TextField.Description>
            We&apos;ll never share your email
          </TextField.Description>
          <TextField.ErrorMessage>
            This is an error message
          </TextField.ErrorMessage>
        </TextField>

        <TextField isRequired>
          <TextField.Label>New password</TextField.Label>
          <View className="w-full flex-row items-center">
            <TextField.Input
              value={password}
              onChangeText={setPassword}
              className="flex-1 px-10"
              placeholder="Enter your password"
              secureTextEntry={!isPasswordVisible}
            />
            <StyledIonicons
              name="lock-closed-outline"
              size={16}
              className="absolute left-3.5 text-muted"
              pointerEvents="none"
            />
            <Pressable
              className="absolute right-4"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <StyledIonicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={16}
                className="text-muted"
              />
            </Pressable>
          </View>
          <TextField.Description>
            Password must be at least 6 characters
          </TextField.Description>
        </TextField>
      </View>
    </Pressable>
  );
};

export default InputDemo;
