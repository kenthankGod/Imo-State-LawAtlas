import { Tabs } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="home" size={24} />,
          tabBarLabelStyle: {
            marginTop: 2,
            fontSize: 15,
          },
          tabBarIconStyle: {
            marginBottom: -2,
          },
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => <Feather name="user" size={24} />,
          tabBarLabelStyle: {
            marginTop: 2, // Adjust this value to reduce space between icon and label
            fontSize: 15, // Optional: adjust font size if needed
          },
          tabBarIconStyle: {
            marginBottom: -2, // Adjust this value if needed for better spacing
          },
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} />,
          tabBarLabelStyle: {
            marginTop: 2, // Adjust this value to reduce space between icon and label
            fontSize: 15, // Optional: adjust font size if needed
          },
          tabBarIconStyle: {
            marginBottom: -2, // Adjust this value if needed for better spacing
          },
        }}
      />
    </Tabs>
  );
}
