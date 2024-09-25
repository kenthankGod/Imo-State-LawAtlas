import { StyleSheet, SafeAreaView,Text, View } from "react-native";


export default function ScreenWrapper({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25, // Apply padding to the top globally
  },
});
