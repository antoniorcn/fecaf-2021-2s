import React from 'react';
import {Text, TextInput, View} from 'react-native';
import estilos from './Estilos';

class Componente1 extends React.Component { 

}

function Componente2() { 
  return (
    <View>
      
    </View>
  );
}

function soma(x, y) { 
  return x + y;
}



function Principal() {
  return (
    // <View>
    // <>
    // [
      <React.Fragment>
        <View style={[estilos.viewPadrao, estilos.viewComBorda]}>
          <Text style={estilos.titulo}>Minha App</Text>
          <TextInput/>
        </View>
        <View>
          <Text
            style={{
              color: "black",
              padding: 10,
              borderWidth: 10,
              borderColor: "blue",
              margin: 50,
            }}
          >Exemplo de componente e camadas</Text>
        </View>
        <View
          style={ [ {
                      borderColor: "yellow",
                      borderWidth: 5,

                    }, 
                    estilos.viewPadrao
          ] }
          focusable={true}
          >
          <Text
            // style={ {
            //   fontSize: 30,
            //   fontWeight: "bold",
            //   fontStyle: "italic",
            //   color: "rgba(0, 255, 0, 1)"
            // } }
            style = {estilos.titulo}
          >Agenda de contatos:</Text>
        </View>
        <Text style={{
          marginTop: 20,
        }}>Digite o seu nome:</Text>
        <TextInput style={{
          backgroundColor: "#ADF",
          borderColor: "red",
          borderWidth: 2,
          borderRadius: 20,
          paddingLeft: 20,
          paddingRight: 20
        }}/>
        <Text style={{
          marginTop: 20,
        }}>Digite seu telefone:</Text>
        <TextInput style={{
          backgroundColor: "#ADF",
          borderColor: "red",
          borderWidth: 2,
          borderRadius: 20,
          paddingLeft: 20,
          paddingRight: 20
        }}
          placeholder="(XX) XXXXX-XXXX"
        />
      </React.Fragment>
    // ]
    // </>
    // </View>
  );
}

export default Principal;