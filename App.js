import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CelsiustoFahrenheit from './src/pages/CelciusToFahrenheit';


export default function App() {
  return (
    <View >
      <CelsiustoFahrenheit />
    </View>
  );
}

