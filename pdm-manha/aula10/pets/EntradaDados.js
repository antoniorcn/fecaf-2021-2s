import React from 'react';
import {View, Text, TextInput} from 'react-native';
import estilos from './estilos';

export default (props) => { 
    return (
        <View style={estilos.inputGroup}>
            <Text style={estilos.label}>{props.label}</Text>
            <TextInput 
                style={estilos.input}
                placeholder={props.info}
            />
        </View>
    );
}