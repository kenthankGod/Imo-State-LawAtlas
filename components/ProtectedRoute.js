import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/Login");
    }
  }, [session]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
