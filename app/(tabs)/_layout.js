import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true, // Hide tab bar when keyboard appears
        tabBarStyle: styles.tabBar, // Apply general styling to the tab bar
        tabBarLabelStyle: styles.tabBarLabel, // General label styling
        tabBarIconStyle: styles.tabBarIcon, // General icon styling
        tabBarActiveTintColor: "#800020", // Active tab icon and label color (red in this case)
        tabBarInactiveTintColor: "#6B7280", // Inactive tab color
        tabBarIndicatorStyle: styles.tabBarIndicator, // Underline/indicator styling
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />, // Use `color` prop to control icon color
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />, // Use `color` prop here as well
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />, // Same here
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#f8f9fa", // Background color of tab bar
    height: 60, // Height of tab bar
    paddingBottom: 5, // Padding at the bottom
    borderTopWidth: 0, // Remove top border
  },
  tabBarLabel: {
    fontSize: 12, // Font size for tab labels
    fontWeight: "600", // Bold labels
  },
  tabBarIcon: {
    marginBottom: -2, // Adjust icon spacing
  },
  tabBarIndicator: {
    height: 4, // Thickness of the underline
    backgroundColor: "#800020", // Color of the underline (matches active tab)
    borderRadius: 2, // Optional: rounded edges for the line
  },
});
