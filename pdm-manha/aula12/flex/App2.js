import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "stretch"
    }}>
      <View style={{
        // flex: 30,
        width: 50, // height: 50,
        backgroundColor: "red"
      }}>
      </View>

      <View style={{
        // flex: 30,
        alignSelf: "center",
        width: 50, height: 50,
        backgroundColor: "yellow"
      }}></View>

      <View style={{
        // flex: 40,
        width: 50, // height: 50,
        backgroundColor: "green"
      }}></View>      
    </View>
  );
}
