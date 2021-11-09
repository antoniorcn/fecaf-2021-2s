import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import petImage from './assets/pets.png';


const PetSummary = ({nome, raca, peso, nascimento}) => { 

  // const {nome, raca, peso, nascimento} = props

  return (
    <View 
        style = {{
          flex: 1,
          backgroundColor: "lightyellow",
          justifyContent: "center"
        }}>
        <Text style={{
          fontWeight: "bold"
        }}>

          {/* {props.nome} */}
          {nome}

        </Text>
        <Text
        style={{
          color: "gray"
        }}
        >
          {/* {props.raca} - {props.peso} kilos - {props.nascimento} */}
          {raca} - {peso} kilos - {nascimento}
          </Text>
    </View>
  )
}


export default () => { 

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: "blue"
    }}>

        <View style={{
          flex: 1,
          backgroundColor: "red"
        }}>
          
          <ImageBackground 
            style={{
              flex: 1,
              width: 400,
              padding: 30,
              alignItems: "center"
            }}
            source={petImage}
            // source={{uri: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"}}
            > 
            <Text style={{
              color : "pink",
              fontWeight: "bold",
              fontSize: 48,
              textShadowColor: "black",
              textShadowOffset: {width: 3, height: 3},
              textShadowRadius: 10,
            }}>PETS</Text>

          </ImageBackground>

        </View>
        <View style={{
          flex: 2,
          backgroundColor: "yellow"
        }}>
          <PetSummary nome="Mike" raca="Viralata" peso="11,4" nascimento="25/01/2014"/>

          <PetSummary nome="Princesa" raca="Poodle" peso="7,6" nascimento="10/06/2018"/>

          <PetSummary nome="Rex" raca="Pastor Alemão" peso="24,6" nascimento="05/04/2017"/>

          <PetSummary nome="Totó" raca="Bulldog" peso="12,7" nascimento="10/05/2015"/>

        </View>

      <View></View>

    </View>
  )

}
