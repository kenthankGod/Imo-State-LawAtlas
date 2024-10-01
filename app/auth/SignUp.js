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
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { moderateScale, scale } from "react-native-size-matters";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in the blank fields");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    setLoading(false);
    console.log("session:", session);
    console.log("error:", error);
    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Sign Up Success", "Account created successfully!");
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
            source={require("../../assets/images/imobg.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.signupText}>
          Create an account to continue{" "}
          <Text style={styles.signupTextAtlas}>LawAtlas</Text>
        </Text>
        <View style={styles.errorContainer}>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        {/* <View style={styles.successContainer}>
          {successMessage ? (
            <Text style={styles.successText}>{successMessage}</Text>
          ) : null}
        </View> */}

        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="name"
          autoCapitalize="none"
          value={name}
          onChangeText={(text) => setName(text)}
        />

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
            {loading ? <ActivityIndicator color="#fff" /> : "Create account"}
          </Text>
        </TouchableOpacity>
        <View style={styles.accountsTextContainer}>
          <Text style={{ fontFamily: "Montserrat-Bold" }}>
            Already have an account?{"  "}
            <Text
              style={styles.accountsText}
              onPress={() => router.push("auth/Login")}
            >
              Login
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
    // marginBottom: moderateScale(20),
  },
  image: {
    width: scale(100),
    height: moderateScale(150),
  },
  signupText: {
    fontSize: moderateScale(15),
    fontFamily: "Montserrat-Bold",
    color: "#6B7280",
    paddingTop: scale(10),
  },
  signupTextAtlas: {
    color: "#800020",
    fontFamily: "Montserrat-Bold",
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
    fontFamily: "Montserrat-Light",
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
    fontFamily: "Montserrat-Bold",
  },
  accountsText: {
    fontFamily: "Montserrat-Bold",
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
    fontFamily: "Montserrat-Bold",
  },
  successContainer: {
    margin: 10,
    width: "100%",
  },

  successText: {
    backgroundColor: "#FFBABA",
    padding: 15,
    borderRadius: 2,
    color: "#DFF2BF",
    textAlign: "center",
  },
});
