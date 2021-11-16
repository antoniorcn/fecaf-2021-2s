import React, {useState} from 'react';
import { Button, ListViewBase, Text, TextInput, View } from 'react-native';


const Pet = (props) => {
  return(
    <View>
      <Text>Nome: {props.nome}</Text>
      <Text>Raca: {props.raca}</Text>
    </View>
  )
}

export default function App() {
  //     consulta   mudanca
  const [raca,      setRaca] = useState("Poodle");
  const [nome,      setNome] = useState("Fifi");
  const [pets,      setPets] = useState([]);

  const petsView = [];
  for (let i = 0; i < pets.length; i++) { 
    const pet = pets[i];
    petsView.push(
      <Pet nome={pet.nome} raca={pet.raca}></Pet>
    )
  }

  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={(txt) => {
        setNome(txt);
      }}/>
      <Text>Raça:</Text>
      <TextInput value={raca} onChangeText={(txt)=> {
        setRaca(txt);
      }}/>
      <Button title={"Salvar cachorro " + nome} 
      onPress={(e) => { 
        const petsTemp = [...pets]
        const obj = {nome: nome, raca: raca};
        // const obj = {nome, raca};
        petsTemp.push(
          obj
        );
        setPets(petsTemp);
      }}/>

      {petsView}
    </View>
    
  );
}
