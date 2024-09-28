import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from "react-native";
import { supabase } from "../../lib/supabase";
import { Feather } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in the blank fields");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    console.log("error:", error);
    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push("/(tabs)");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/coatbg.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.loginText}>
          Please sign in to continue{" "}
          <Text style={styles.loginTextAtlas}>LawAtlas</Text>
        </Text>
        
        <View style={styles.errorContainer}>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>
            {loading ? <ActivityIndicator color="#fff" /> : "Sign in"}
          </Text>
        </TouchableOpacity>
        <View style={styles.accountsTextContainer}>
          <Text>
            Don't have an account?{"  "}
            <Text
              style={styles.accountsText}
              onPress={() => router.push("auth/SignUp")}
            >
              Create account
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: moderateScale(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: moderateScale(10),
  },
  backButton: {
    padding: scale(10),
  },
  mainContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginBottom: moderateScale(20),
  },
  image: {
    width: scale(150),
    height: moderateScale(150),
  },
  loginText: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "#6B7280",
  },
  loginTextAtlas: {
    color: "#800020",
  },
  input: {
    width: "100%",
    // maxWidth: 400,
    padding: scale(10),
    paddingLeft: scale(24),
    margin: scale(5),
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    backgroundColor: "#D1D5DB",
  },
  button: {
    width: "100%",
    backgroundColor: "#800020",
    paddingVertical: moderateScale(18),
    borderRadius: 2,
    marginTop: scale(5),
    marginBottom: scale(16),
    borderRadius: 28,
  },
  buttonDisabled: {
    backgroundColor: "#888",
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  accountsText: {
    fontWeight: "bold",
    color: "#800020",
  },
  errorContainer: {
    margin: scale(10),
    width: "100%",
  },
  errorText: {
    backgroundColor: "#FFBABA",
    padding: scale(15),
    borderRadius: 2,
    color: "#D8000C",
    textAlign: "center",
  },
});
