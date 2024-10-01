import { Link, Redirect, SplashScreen, Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function RootLayout() {
  const [fontIsLoaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontIsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

const MainLayout = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session user", session?.user.id);

      if (session) {
        setAuth(session?.user);
        router.replace("/(tabs)");
      } else {
        setAuth(null);
        router.replace("auth/Welcome");
      }
    });
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/Login" />
      <Stack.Screen name="auth/SignUp" />
    </Stack>
  );
};
