import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backIcon}>
            <TouchableOpacity
              onPress={() => Keyboard.dismiss()}
              style={styles.backButton}
            >
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <Feather name="search" size={18} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Search here..." />
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/coatbg.png")}
              style={styles.logo}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },

  backIcon: {
    marginRight: 15,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D1D5DB",
    paddingHorizontal: 10,
    borderRadius: 18,
    borderColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    paddingVertical: 5,
  },
  logoContainer: {
    marginLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
});
