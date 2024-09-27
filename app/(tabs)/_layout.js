import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

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
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          headerShown: false,
          title: "bookmark",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ), // Same here
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#f8f9fa", // Background color of tab bar
    height: scale(60), // Height of tab bar
    padding: moderateScale(10), // Padding at the bottom
  },
  tabBarLabel: {
    fontSize: moderateScale(12), // Font size for tab labels
    fontWeight: moderateScale(600), // Bold labels
  },
  tabBarIcon: {
    backgroundColor: "red",
  },
});
