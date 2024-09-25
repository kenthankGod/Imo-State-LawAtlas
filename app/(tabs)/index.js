import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import SearchInput from "../../components/SearchInput";
import { supabase } from "../../lib/supabase";

export default function TabHome() {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign Out error");
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput />

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box}>
          <Text>Property and Land Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Tenancy Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Civil Law</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Criminal Law</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Family and Inheritance Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text> Environmental Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Property and Land Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>Property and Land Laws</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logout: {
    width: "100%",
    padding: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#DC143C",
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 20,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#FAF9F6",
  },

  box: {
    backgroundColor: "#f0f0f0",
    // width: 80,
    // height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    margin: 5,
    padding: 10,
  },
});
