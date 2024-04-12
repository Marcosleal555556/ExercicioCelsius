import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CelsiustoFahrenheit from "./src/pages/CelciusToFahrenheit";
import { styles } from "./src/styles/Style";

export default function App() {
  return (
    <View style={styles.app}>
      <CelsiustoFahrenheit />
    </View>
  );
}
