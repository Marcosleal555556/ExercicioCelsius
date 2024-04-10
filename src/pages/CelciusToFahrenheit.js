
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles } from "../styles/Style";


// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import { TextInput } from "react-native-web";


export default function CelsiusToFahrenheit() {
    const [celsius, setCelsius] = useState("");
    
    const [resultado, setResultado] = useState("");
    const [visible, setVisible] = useState(false);
  
    console.log( resultado);
  
    const calc_Fah = () => {
      const setResultado = celsius * 1.8 + 32;
      setVisible(true);
  
    };
  
    const calcularNovamente = () => {
      setCelsius("");
      
      setVisible(false);
  
      console.log("Graus zerado: ", celsius);
    };
  
    return (
      <View style={styles.contain}>
        <Text>Graus To Fahrenheit</Text>
       
        <TxtInputComponent
          txtplace="Digite os graus celsius"
          value={celsius}
          changeText={setCelsius}
        />
        <TouchableOpacity onPress={calc_Fah}>
          <Text>Transforme celcius em Fahrenheit</Text>
        </TouchableOpacity>
  
        <Modal visible={visible}>
          <View>
            <Text>Modal</Text>
            <TouchableOpacity onPress={calcularNovamente}>
              <Text>Fechar</Text>
            </TouchableOpacity>
            <Text>{resultado}</Text>
          </View>
        </Modal>
      </View>
    );
  }