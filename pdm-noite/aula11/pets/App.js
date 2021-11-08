import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import petImage from './assets/pets.png';



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
            // source={petImage}
            source={{uri: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"}}
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
        }}></View>

      <View></View>

    </View>
  )

}
