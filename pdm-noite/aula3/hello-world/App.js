import React from 'react';
import {Text, TextInput, View} from 'react-native';

let estilos = { 
  textos : { 
    fontSize: 20, 
    fontWeight: "bold", 
    fontStyle: "italic",
  },
  titulo: { 
    fontSize: 48,
    backgroundColor: "yellow",
  }
}


function Principal() {
  return (
    // <React.Fragment>
    // <>
    // [
    <View style={{backgroundColor: "red"}}>
      <View>
          <Text></Text>
          <Text></Text>
          <Text style={estilos.titulo}>Hello World</Text>
      </View>
      <View style={{backgroundColor: "green"}}>
        <Text selectable={true} 
              numberOfLines={5} 
              style={estilos.textos}>
          <Text>çãorem ipsum dolor sit amet, {"\n"} consectetur {"\n"} adipiscing elit. </Text>
          <Text>Mauris sem mauris, sollicitudin sed tincidunt et, </Text>
        </Text>
      </View>                              
      <TextInput  style={{backgroundColor: "rgba(184, 237, 255, 1)"}} 
                  keyboardType={"default"}
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Faça um resumo de como foi seu dia"
                  />
    </View>
    // ]
    // </>
    // </React.Fragment>
  );
}

export default Principal;