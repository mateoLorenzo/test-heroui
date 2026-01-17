import { Accordion, Avatar, Button, Chip, Spinner, Tabs } from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={{}} className="bg-black items-center justify-center flex-1">
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
    </View>
  );
}
