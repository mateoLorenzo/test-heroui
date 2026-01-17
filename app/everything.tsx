import { Ionicons } from "@expo/vector-icons";
import {
  Accordion,
  Avatar,
  BottomSheet,
  Button,
  Chip,
  Spinner,
  Tabs,
} from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Everything = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const insets = useSafeAreaInsets();

  return (
    <View className="bg-black items-center justify-center flex-1">
      <Button className="" onPress={() => console.log("Pressed!")}>
        Get Started
      </Button>
      <Button variant="danger">Save</Button>
      <Button variant="secondary">Save</Button>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="profile">
            <Tabs.Label>
              <Text>Profile</Text>
            </Tabs.Label>
          </Tabs.Trigger>
          <Tabs.Trigger value="security">
            <Tabs.Label>
              <Text>Security</Text>
            </Tabs.Label>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="profile">
          <Text className="text-white">Content 1</Text>
        </Tabs.Content>
        <Tabs.Content value="security">
          <Text className="text-white">Content 2</Text>
        </Tabs.Content>
      </Tabs>

      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>
            <Text className="text-white">Question Text</Text>
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            <Text className="text-white">Answer content</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Button
        variant="primary"
        isDisabled={isLoading}
        onPress={() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          setIsLoading(true);
        }}
      >
        {isLoading ? (
          <>
            <Spinner size="sm" color="success" />
            <Button.Label>Loading...</Button.Label>
          </>
        ) : (
          <Button.Label>Submit</Button.Label>
        )}
      </Button>

      <Button size="lg" variant="primary" className="custom">
        <Button.Label>Click me</Button.Label>
      </Button>
      <Chip size="lg" color="danger" className="custom">
        <Chip.Label>Success</Chip.Label>
      </Chip>
      <Avatar alt="Avatar" size="lg" className="custom">
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>

      <BottomSheet>
        <BottomSheet.Trigger asChild>
          <Button>Open Bottom Sheet</Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content>
            <BottomSheet.Close />
            <BottomSheet.Title>...</BottomSheet.Title>
            <BottomSheet.Description>...</BottomSheet.Description>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet>

      <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen}>
        <BottomSheet.Trigger asChild>
          <Button variant="secondary" isDisabled={isOpen}>
            Detached bottom sheet
          </Button>
        </BottomSheet.Trigger>
        <BottomSheet.Portal>
          <BottomSheet.Overlay />
          <BottomSheet.Content
            detached={true}
            bottomInset={insets.bottom + 12}
            className="mx-4"
            backgroundClassName="rounded-[32px]"
            contentContainerClassName="pb-4"
          >
            <View className="items-center mb-5">
              <View className="">
                <Ionicons
                  name="wallet-outline"
                  size={48}
                  className="text-green-500"
                />
              </View>
            </View>
            <View className="mb-6 items-center">
              <BottomSheet.Title className="text-center text-xl font-bold">
                Oh! Your wallet is empty
              </BottomSheet.Title>
              <BottomSheet.Description className="text-center">
                You&apos;ll need to top up to buy
              </BottomSheet.Description>
            </View>
            <Button
              variant="primary"
              className="bg-green-500 mb-2"
              onPress={() => setIsOpen(false)}
              pressableFeedbackVariant="none"
            >
              <Button.Label className="text-white font-semibold">
                Add Cash
              </Button.Label>
            </Button>
            <View className="flex-row items-center justify-center">
              {["Apple Pay", "Mastercard", "Visa", "Amex"].map(
                (label, index, array) => (
                  <View key={label} className="flex-row items-center">
                    <Text className="text-xs font-normal text-muted">
                      {label}
                    </Text>
                    {index < array.length - 1 && (
                      <Text className="text-xs font-normal text-muted mx-1.5">
                        •
                      </Text>
                    )}
                  </View>
                )
              )}
            </View>
          </BottomSheet.Content>
        </BottomSheet.Portal>
      </BottomSheet>
    </View>
  );
};

export default Everything;
