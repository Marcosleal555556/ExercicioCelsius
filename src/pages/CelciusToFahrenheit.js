import { Text, View, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import { TextInput } from "react-native-web";
import TxtComponent from "../components/TxtComponent";

export default function CelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState("");

  const [resultado, setResultado] = useState("");
  const [visible, setVisible] = useState(false);

  console.log(resultado);

  const calc_Fah = () => {
    if (celsius === "") {
      alert("Por favor, insira um número válido");
    } else {
      setResultado(celsius * 1.8 + 32);
      setVisible(true);
    }
  };

  const calcularNovamente = () => {
    setCelsius("");

    setVisible(false);

    console.log("Graus zerado: ", celsius);
  };

  return (
    <View style={styles.container}>
      <TxtComponent title="Converta graus Celsius para Fahrenheit" />

      <TxtInputComponent
        txtplace="Digite os graus celsius"
        value={celsius}
        changeText={setCelsius}
      />
      <TouchableOpacity onPress={calc_Fah}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text>Modal</Text>
          <TouchableOpacity onPress={calcularNovamente}>
            <Text>Calcular novamente</Text>
          </TouchableOpacity>
          <Text>{resultado}</Text>
        </View>
      </Modal>
    </View>
  );
}
