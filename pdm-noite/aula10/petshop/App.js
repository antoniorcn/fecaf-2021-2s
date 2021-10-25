import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Entrada from './InputGroup';
import estilos from './estilos';

// const Principal = () => { 

export default () => { 
  return (
    <View style={estilos.container}>
      <Entrada texto="Nome do Pet" enabled={true}/>
      <Entrada texto="Raça" enabled={false}/>
      <Entrada texto="Peso" enabled={true}/>
    </View>
  );

}

// export default Principal;