import React from 'react';
import {Alert, Button, Image, ImageBackground, ToastAndroid, View} from 'react-native';
import Entrada from './EntradaDados';
import estilos from './estilos';
import petImage from './assets/pets.jpg';

export default () => { 
  return (
    <View style={estilos.painel}>
      {/* <Image source={require('./assets/pets.jpg')} /> */}
      {/* <Image source={petImage} style={estilos.imagem}/> */}
      <ImageBackground source={petImage} style={estilos.imagem}>
        <Entrada label="Nome:" info="Digite aqui o nome do seu Pet"/>
        <Entrada label="Raça:" info="Informe a raça do seu Pet"/>
        <Entrada label="Peso:" info="Digite o peso usando apenas 1 decimal"/>    
        <Entrada label="Nascimento:" info="DD/MM/AAAA"/>
        <Button title="Salvar" color="red" onPress={ () => {
          // console.log("Botão Pressionado");
          // Alert.alert("Gestão de Pets", "Seu Pet foi salvo com sucesso");
          // ToastAndroid.show("Seu Pet foi salvo com sucesso", ToastAndroid.LONG);
          ToastAndroid.showWithGravity("Seu Pet foi salvo com sucesso", 
                ToastAndroid.LONG, ToastAndroid.TOP)
        }}/>
      </ImageBackground>
    </View>    
  ); 
}