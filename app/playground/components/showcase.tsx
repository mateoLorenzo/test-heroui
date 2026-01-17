import { useRouter, type Href } from "expo-router";
import { Button } from "heroui-native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const COMPONENTS = [
  {
    id: "country-code-dropdown",
    name: "CountryCodeDropdown",
    description: "Selector de código de país para auth",
  },
  { id: "header", name: "Header", description: "Cabecera de navegación" },
  { id: "course-card", name: "CourseCard", description: "Tarjeta de curso" },
  {
    id: "course-progress-banner",
    name: "CourseProgressBanner",
    description: "Banner de progreso fijo en home",
  },
  {
    id: "lesson-card",
    name: "LessonCard",
    description: "Tarjeta de lección con descripción e icono",
  },
  {
    id: "lesson-status-indicator",
    name: "LessonStatusIndicator",
    description: "Indicador de estado de lección",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Navegación por pestañas (Resumen, Lecciones, Recursos)",
  },
  {
    id: "live-event-card",
    name: "LiveEventCard",
    description: "Tarjeta de evento en vivo",
  },
  {
    id: "live-replay-card",
    name: "LiveReplayCard",
    description: "Tarjeta de repetición de evento",
  },
  { id: "habit-item", name: "HabitItem", description: "Item de hábito" },
  {
    id: "achievement-card",
    name: "AchievementCard",
    description: "Tarjeta de logro",
  },
  {
    id: "message-composer",
    name: "MessageComposer",
    description: "Compositor de mensajes para chat",
  },
];

const Showcase = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Components</Text>
        <Text style={styles.subtitle}>Componentes de negocio y features</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {COMPONENTS.map((component) => (
          <View key={component.id} style={styles.componentItem}>
            <Button
              onPress={() =>
                router.push(`/playground/components/${component.id}` as Href)
              }
              variant="secondary"
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
