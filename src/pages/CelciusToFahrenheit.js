import { Text, View, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TxtComponent from "../components/TxtComponent";

export default function CelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [visible, setVisible] = useState(false);

  console.log(resultado);

// Emitir um alerta caso o input esteja vazio
  const converter = () => {
    if (celsius === "") {
      alert("Por favor, insira um número válido");
    }

    // Conversão Celsius para Fahrenheit
    else {
      setResultado(celsius * 1.8 + 32);
      setVisible(true);
    }
  };
// Recalcular os campos
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
      <TouchableOpacity onPress={converter}>
        <Text>Converter</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text>Conversão realizada!</Text>

          <Text>
            {celsius} graus Celsius equivalem a {resultado} graus Fahrenheit
          </Text>

          <TouchableOpacity
            style={styles.calcularnovamente}
            onPress={calcularNovamente}
          >
            <Text>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}