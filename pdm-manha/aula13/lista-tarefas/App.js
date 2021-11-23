import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import listaTarefas from './assets/images/tasklist.png';

const unchecked = require('./assets/images/Circle.png');
const checked = require('./assets/images/Check.png');

const Tarefa = (props) => {
  let imagemTarefa = unchecked;
  if (props.concluido == true) {
    imagemTarefa = checked;
  }

  return (
    <View style={{
      flexDirection: "row",
      height: 50,
      width: 375,
      backgroundColor: "white",
      margin: 10,
      justifyContent: "flex-start",
      alignItems: "center"
    }}>
      <Image 
        style={{
          width: 32,
          height: 32,
          marginLeft: 20,
          marginRight: 15,
        }}
        source={imagemTarefa}></Image>

        <View style={{
          flexDirection: "column",
          marginLeft: 15,
        }}>
          <Text style={{
            fontWeight: "bold",
          }}>{props.titulo}</Text>
          <Text>{props.data}</Text>
        </View>
    </View>
  )
}


const OutroComponente = (props) => { 

}


export default () => {
  return(
    <View
      style={{flex: 1}}>

      <View
        style={{
          backgroundColor: "yellow",
          flex: 1
        }}>
        <ImageBackground 
          style={{
            flex: 1
          }}
          source={listaTarefas}>

        </ImageBackground>
      </View>

      <View 
        style={{
          backgroundColor: "lightcyan",
          flex: 2,
          flexDirection: "column",

        }}>
          <Tarefa titulo="Estudar para a prova de PDM" data="Seg, 23 de novembro" concluido={true}/>
          <Tarefa titulo="Levar o carro no mecanico" data="Ter, 24 de novembro" concluido={false}/>
          <Tarefa titulo="Reunião com os professores" data="Qua, 25 de novembro" concluido={true}/>
          <Tarefa titulo="Arrumar o apartamento" data="Qui, 26 de novembro" concluido={false}/>

      </View>
    </View>
  )
}
