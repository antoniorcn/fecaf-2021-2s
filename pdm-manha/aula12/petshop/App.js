import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  //     consulta   mudanca
  const [raca,      setRaca] = useState("Poodle");
  const [nome,      setNome] = useState("Fifi");
  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={(txt) => {
        setNome(txt);
      }}/>
      <Text>Raça:</Text>
      <TextInput value={raca}/>
      <Button title={"Salvar cachorro " + nome} 
      onPress={(e) => { 
        console.log();
      }}/>
    </View>
  );
}
