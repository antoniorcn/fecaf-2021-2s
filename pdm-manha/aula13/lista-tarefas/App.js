import React from 'react';
import { Dimensions, Image, ImageBackground, Text, ScrollView, View, TextInput} from 'react-native';
import listaTarefas from './assets/images/tasklist.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const unchecked = require('./assets/images/Circle.png');
const checked = require('./assets/images/Check.png');
const {width, height} = Dimensions.get("window");


const Formulario = () => { 
  return (
    <View>
      <Text>Titulo</Text>
      <TextInput/>
      <Text>Data</Text>
      <TextInput/>
    </View>
  )
}

const Tarefa = (props) => {
  let imagemTarefa = unchecked;
  if (props.concluido == true) {
    imagemTarefa = checked;
  }

  return (
    <View style={{
      flexDirection: "row",
      width: width,
      backgroundColor: "white",
      margin: 10,
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottomColor: "lightgray",
      borderBottomWidth: 2,
      paddingBottom: 25,
      marginTop: 30,
    }}>
      <Image 
        style={{
          width: 32,
          height: 32,
          marginLeft: 20,
          marginRight: 15,
        }}
        source={imagemTarefa}></Image>

        <View style={{
          flexDirection: "column",
          marginLeft: 15,
        }}>
          <Text style={{
            fontWeight: "bold",
          }}>{props.titulo}</Text>
          <Text style={{
            color: "gray"
          }}>{props.data}</Text>
        </View>
    </View>
  )
}


const TodasTarefas = () => {
  return(
    <View
      style={{
        flex: 1,
      }}>

      <View
        style={{
          backgroundColor: "yellow",
          marginTop: 30,
          flex: 1
        }}>
        <ImageBackground 
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "stretch",
          }}
          source={listaTarefas}>
            <Text style={{
              fontSize: 48,
              color: "white",
              //                      R    G    B   A 
              backgroundColor: "rgba(100, 100, 100, 0.5)",
              textAlign: "center",
              margin: 15,
            }}>Hoje</Text>
            <Text style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "rgba(100, 100, 100, 0.5)",
              textAlign: "center",
              margin: 15,
            }}>ter, 23 de novembro</Text>
        </ImageBackground>
      </View>

      <View 
        style={{
          backgroundColor: "white",
          flex: 2,
          flexDirection: "column",

        }}>
          <ScrollView>
            <Tarefa titulo="Estudar para a prova de PDM" data="Seg, 23 de novembro" concluido={true}/>
            <Tarefa titulo="Levar o carro no mecanico" data="Ter, 24 de novembro" concluido={false}/>
            <Tarefa titulo="Reunião com os professores" data="Qua, 25 de novembro" concluido={true}/>
            <Tarefa titulo="Arrumar o apartamento" data="Qui, 26 de novembro" concluido={false}/>
            <Tarefa titulo="Estudar para a Prova" data="Sex, 27 de novembro" concluido={false}/>
            <Tarefa titulo="Estudar para a Prova" data="Sab, 28 de novembro" concluido={false}/>
            <Tarefa titulo="Estudar para a Prova" data="Dom, 29 de novembro" concluido={false}/>
          </ScrollView>
      </View>
    </View>
  )
}

const Tab = createBottomTabNavigator();


export default () => { 
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator 
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Formulario') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Lista') {
              iconName = 'ios-list'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        
        >
          <Tab.Screen name="Formulario" component={Formulario} />
          <Tab.Screen name="Lista" component={TodasTarefas}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}