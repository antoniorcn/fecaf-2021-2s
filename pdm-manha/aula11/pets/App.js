import React from 'react';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import petImage from './assets/pets.png';

const win = Dimensions.get('window');


const PetView = (props) => { 
  return (
      <View style={{
              flex: 1,
              justifyContent: "center",
              padding: 10}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18
          }}>{props.nome}</Text>
        <Text
          style={{
            color: "gray",
            fontSize: 16
          }}>{props.raca} - {props.peso} kilos - {props.nascimento}</Text>
      </View>
  );
}


export default function App() {
  return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        flex: 1
      }}>
        <ImageBackground style={{
          width: win.width,
          height: win.height / 3,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"

        }}
        source={petImage}>

          <Text style={{
            fontSize: 48,
            color: "pink",
            textShadowColor: "black",
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 15,
            backgroundColor: "black",
          }}>Pets</Text>

        </ImageBackground>
      </View>

      <View style={{
        flex: 2
      }}>
        
        <PetView nome="Mike" raca="Viralata" 
                  peso="11,4" nascimento="25/01/2014"/>
        <PetView nome="Princesa" raca="Poodle" 
                  peso="7,3" nascimento="10/06/2018"/>
        <PetView nome="Rex" raca="Pastor Alemão" 
                  peso="24,6" nascimento="05/04/2017"/>
        <PetView nome="Totó" raca="Bulldog" 
                  peso="12,7" nascimento="10/05/2015"/>

      </View>
      
    </View>
  );
}
