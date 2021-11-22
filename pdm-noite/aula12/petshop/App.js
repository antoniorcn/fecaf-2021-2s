import React, {useState} from 'react';
import {Button, Text, TextInput, ToastAndroid, View} from 'react-native';

// let raca = "Viralata";

export default () => {
  let [nome, setNome] = useState("Toto");
  let [raca, setRaca] = useState("ViraLata");

  const lista = [
    {nome: "Toto", raca: "Viralata"},
    {nome: "Fifi", raca: "Poodle"},
    {nome: "Rex", raca: "Pastor Alemão"},
    {nome: "Donzela", raca: "Lhasa Apso"},
  ];

  const listaViews = [

  ];


  for (let i = 0; i < lista.length; i++) {
    const pet = lista[i];
    listaViews.push(
      <View>
        <Text>{pet.nome}</Text>
        <Text>{pet.raca}</Text>
      </View>
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
          setNome("Fifi");
          setRaca("Poodle");
          ToastAndroid.show(`Pet ${nome} foi gravado com sucesso`, 
            ToastAndroid.LONG);
        }}/>
      </View>

      <View style={{
        flex: 2,
        marginTop: 10,
        padding: 10,
      }}>
        <Text>Lista de Pets</Text>
        {listaViews}
      </View>
    </View>
  );
}


