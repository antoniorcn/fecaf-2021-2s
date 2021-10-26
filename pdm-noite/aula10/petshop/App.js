import React from 'react';
import {Alert, ImageBackground, Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import Entrada from './InputGroup';
import estilos from './estilos';
import dog from './assets/dog.jpg';

// const Principal = () => { 

const executarBotao = () => { 
  // console.log("Botão pressionado");
  // Alert.alert("Botão Pressionado", "Dados do Pets foram salvos");
  ToastAndroid.showWithGravity("Dados do Pet foram salvos", 
              ToastAndroid.LONG, ToastAndroid.TOP);
}

export default () => { 
  return (
    <View style={estilos.container}>
      <ImageBackground source={dog} style={{width: 200, height:100}}/>
      <Entrada texto="Nome do Pet" enabled={true}/>
      <Entrada texto="Raça" enabled={false}/>
      <Entrada texto="Peso" enabled={true}/>
      <Button title="Salvar" onPress={executarBotao}/> 
    </View>
  );

}

// export default Principal;