import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Carousels from "../../components/Carousels";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top section */}
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/imobg.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>
          Every state law you need {"\n"} at one place
        </Text>
        <Text style={styles.subtitle}>
          Accessing your state laws {"\n"}so quick and easy.
        </Text>
      </View>

      <Carousels />

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => router.push("/auth/Login")}
        >
          <Text style={styles.googleButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/Login")}>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
    justifyContent: "space-between",
  },
  topSection: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  bottomSection: {
    marginBottom: 32,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#800020",
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  googleButton: {
    backgroundColor: "#800020",
    paddingVertical: 18,
    borderRadius: 28,
    marginBottom: 16,
  },
  googleButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  signUpText: {
    color: "#800020",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 16,
  },
  signInText: {
    color: "#6B7280",
    textAlign: "center",
  },
  signInLink: {
    color: "#800020",
    fontWeight: "600",
  },
});
