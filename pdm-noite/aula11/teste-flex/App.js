import React from 'react';
import {StyleSheet, View} from 'react-native';

// const estilos = StyleSheet.create({
//   caixa: { 
//     flex: 1,
//     // width: 50,
//     // height: 50
//   },

//   vermelho: { 
//     backgroundColor: "red"
//   },

//   amarelo: { 
//     backgroundColor: "yellow"
//   },

//   verde: { 
//     backgroundColor: "green"
//   }
// });

export default function TesteFlex() { 
  return (
    <View style={{
      flex: 1,
      flexDirection:"row",
      justifyContent: "space-around",
      alignItems: "stretch",
      backgroundColor: "blue",
      padding: 40,
    }}>
      {/* <View style={StyleSheet.compose(estilos.caixa, estilos.vermelho)}></View>
      <View style={StyleSheet.compose(estilos.caixa, estilos.amarelo)}></View>
      <View style={StyleSheet.compose(estilos.caixa, estilos.verde)}></View> */}
      <View style={{
          flex: 2,
          backgroundColor: "red",
      }}></View>
      <View style={{
          flex: 1,
          backgroundColor: "green",
      }}></View>
      <View style={{
          flex: 4,
          backgroundColor: "yellow",
      }}></View>
    </View>
  )
}