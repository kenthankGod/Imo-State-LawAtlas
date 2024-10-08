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
import { verticalScale, scale, moderateScale } from "react-native-size-matters";

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
          <Text style={{ fontFamily: "Montserrat-Regular" }}>Property and Land Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={{ fontFamily: "Montserrat-Regular" }}>Tenancy Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={{ fontFamily: "Montserrat-Regular" }}>Civil Law</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={{ fontFamily: "Montserrat-Regular" }}>Criminal Law</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text  style={{ fontFamily: "Montserrat-Regular" }}>Family and Inheritance Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text  style={{ fontFamily: "Montserrat-Regular" }}> Environmental Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text  style={{ fontFamily: "Montserrat-Regular" }}>Commercial and Business Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text  style={{ fontFamily: "Montserrat-Regular" }}>Taxation Laws</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text  style={{ fontFamily: "Montserrat-Regular" }}>Human Rights and Civil Liberties</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={{ color: "white", fontFamily: "Montserrat-Bold" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
  logout: {
    width: "100%",
    padding: scale(20),
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
    marginTop: scale(20),
    padding: moderateScale(6),
    borderRadius: moderateScale(5),
    backgroundColor: "#FAF9F6",
  },

  box: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(28),
    borderWidth: 0.7,
    borderColor: "#D1D5DB",
    margin: moderateScale(8),
    padding: moderateScale(10),
    fontFamily: "Montserrat-Bold",
  },
});
