import { useRouter, type Href } from "expo-router";
import { Button } from "heroui-native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const UI_COMPONENTS = [
  { id: "text", name: "Text", description: "Componente de texto base" },
  {
    id: "input",
    name: "Input",
    description: "Campo de entrada con label opcional",
  },
  { id: "button", name: "Button", description: "Botón genérico" },
  {
    id: "code-input",
    name: "CodeInput",
    description: "Input de código para auth",
  },
  { id: "divisor", name: "Divisor", description: "Divisor usado en auth" },
  {
    id: "status-message",
    name: "StatusMessage",
    description: "Mensajes de estado del sistema",
  },
  { id: "toast", name: "Toast", description: "Notificaciones temporales" },
  {
    id: "image",
    name: "Image",
    description: "Imagen con fade-in y estado de loading",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "UI de loading con dimensiones dinámicas",
  },
  {
    id: "switch",
    name: "Switch",
    description: "Toggle genérico (dark/light mode)",
  },
  { id: "modal", name: "Modal", description: "Modal genérico wrapper" },
];

const Showcase = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>UI Components</Text>
        <Text style={styles.subtitle}>Componentes de UI base y primitivos</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {UI_COMPONENTS.map((component) => (
          <View key={component.id} style={styles.componentItem}>
            <Button
              onPress={() =>
                router.push(`/playground/ui/${component.id}` as Href)
              }
              style={styles.componentButton}
            >
              {component.name}
            </Button>
            <Text style={styles.componentDescription}>
              {component.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Showcase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
    gap: 16,
  },
  componentItem: {
    marginBottom: 8,
  },
  componentButton: {
    width: "100%",
  },
  componentDescription: {
    marginTop: 4,
    fontSize: 13,
    color: "#666",
    paddingHorizontal: 4,
  },
});
