import React from 'react';
import {View, Text} from 'react-native';
function Principal() { 
  let a = 456;
  let b = 8;
  let c = 2;
  let resultado = a * b / c;

  return(
    <View>
      <Text></Text>
      <Text>{a} * {b} / {c} = {resultado}</Text>
    </View>
  );
}
export default Principal;