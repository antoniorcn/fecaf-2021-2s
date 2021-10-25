import React from 'react';
import { Text, TextInput, View } from 'react-native';
import estilos from './estilos';

export default (props) => { 
    return(
        <View style={estilos.inputGroup}>
            <Text style={estilos.label}> {props.texto} </Text>
            <TextInput style={estilos.input} editable={props.enabled}/>
        </View>
    )
}