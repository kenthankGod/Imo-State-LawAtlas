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
            source={require("../../assets/images/coatbg.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.signupText}>
          Please create an account to continue{" "}
          <Text style={styles.signupTextAtlas}>LawAtlas</Text>
        </Text>
        <View style={styles.errorContainer}>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        <View style={styles.successContainer}>
          {successMessage ? (
            <Text style={styles.successText}>{successMessage}</Text>
          ) : null}
        </View>

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
          <Text>
            Already have an accoubn?{"  "}
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    paddingTop: Platform.OS === "ios" ? 40 : 30,
  },
  backButton: {
    padding: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 100,
  },
  signupText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6B7280",
  },
  signupTextAtlas: {
    color: "#800020",
  },
  input: {
    width: "100%",
    maxWidth: 400,
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    backgroundColor: "#D1D5DB",
  },
  button: {
    width: "100%",
    backgroundColor: "#800020",
    paddingVertical: 18,
    marginBottom: 16,
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
    margin: 10,
    width: "100%",
  },
  errorText: {
    backgroundColor: "#FFBABA",
    padding: 15,
    borderRadius: 2,
    color: "#D8000C",
    textAlign: "center",
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
