import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, ToastAndroid, View} from 'react-native';

// let raca = "Viralata";

const Pet = (props) => {
  return (
    <View style={{marginTop: 10, backgroundColor: "cyan"}}>
      <Text>{props.nome}</Text>
      <Text>{props.raca}</Text>
    </View>
  )
}

export default () => {
  let [nome, setNome] = useState("Toto");
  let [raca, setRaca] = useState("ViraLata");
  const [lista, setLista] = useState([]);

  const listaViews = [

  ];

  for (let i = 0; i < lista.length; i++) {
    const pet = lista[i];
    listaViews.push(
      <Pet nome={pet.nome} raca={pet.raca}/>
    );
  }


  return(
    <View style={{
      flex: 1,
      flexDirection: "column"
    }}>
      <View style={{
        flex: 1,
        marginTop: 30,
        padding: 10,
      }}>
        <Text>Formulário de Pets</Text>
        <Text>Nome: </Text>
        <TextInput value={nome} onChangeText={(txt)=> { 
          setNome(txt);
        }}/>
        <Text>Raça: </Text>
        <TextInput value={raca} onChangeText={(txt)=>{
          setRaca(txt);
        }}/>

        <Button title="Gravar" onPress = { (e) => { 
          lista.push( {nome, raca} );
          const listaTemp = [...lista];
          setLista(listaTemp);
          setNome("");
          setRaca("");
          // lista.push( {nome: nome, raca: raca} );
          ToastAndroid.show(`Pet ${nome} foi gravado com sucesso`, 
            ToastAndroid.LONG);
          console.log(lista);
        }}/>
      </View>

      <View style={{
        flex: 2,
        marginTop: 10,
        padding: 10,
      }}>
        <Text>Lista de Pets</Text>
        <ScrollView>
          {listaViews}
        </ScrollView>
      </View>
    </View>
  );
}


