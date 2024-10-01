import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Carousels from "../../components/Carousels";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";

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
          All Imo Sate law you need {"\n"} at one place
        </Text>
        <Text style={styles.subtitle}>Eastern Heartland.</Text>
      </View>

      <Carousels />

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("/auth/Login")}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => router.push("/auth/SignUp")}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => router.push("/auth/Login")}>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: moderateScale(20),
    justifyContent: "space-between",
  },
  topSection: {
    marginTop: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(22),
    // fontWeight: "bold",
    marginBottom: verticalScale(6),
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: "gray",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: scale(50),
    height: verticalScale(50),
    resizeMode: "contain",
  },
  bottomSection: {
    marginBottom: verticalScale(18),
  },
  signInButton: {
    backgroundColor: "#800020",
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(25),
    marginBottom: verticalScale(12),
  },
  signInButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
  },
  signInText: {
    color: "#6B7280",
    textAlign: "center",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Regular",
  },
  signInLink: {
    color: "#800020",
    fontWeight: "600",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
  },

  signUpButton: {
    backgroundColor: "#f5f5f5",
    borderColor: "#800020",
    borderWidth: 0.9,
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(25),
    marginBottom: verticalScale(12),
  },

  signUpButtonText:{
    color: "black",
    textAlign: "center",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
    color: "#800020"
  }
});
