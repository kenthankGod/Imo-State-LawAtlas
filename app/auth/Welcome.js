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
        <Text style={styles.subtitle}>
          Eastern Heartland.
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
    backgroundColor: 'white',
    padding: moderateScale(20), // Using moderateScale for padding
    justifyContent: 'space-between',
  },
  topSection: {
    marginTop: verticalScale(20), // Vertical scaling for margin top
  },
  title: {
    fontSize: moderateScale(22), // Moderate scaling for font size
    fontWeight: 'bold',
    marginBottom: verticalScale(6), // Vertical scaling for margin bottom
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(16), // Moderate scaling for subtitle font size
    color: 'gray',
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: scale(50), // Using scale for width
    height: verticalScale(50), // Using verticalScale for height
    resizeMode: 'contain',
  },
  bottomSection: {
    marginBottom: verticalScale(18), // Vertical scaling for margin bottom
  },
  googleButton: {
    backgroundColor: '#800020',
    paddingVertical: verticalScale(16), // Vertical scaling for padding
    borderRadius: moderateScale(25), // Moderate scaling for border radius
    marginBottom: verticalScale(12), // Vertical scaling for margin bottom
  },
  googleButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: moderateScale(14), // Moderate scaling for font size
  },
  signInText: {
    color: '#6B7280',
    textAlign: 'center',
    fontSize: moderateScale(14), // Moderate scaling for font size
  },
  signInLink: {
    color: '#800020',
    fontWeight: '600',
    fontSize: moderateScale(14), // Moderate scaling for font size
  },
});
