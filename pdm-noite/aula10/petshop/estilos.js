import { StyleSheet } from "react-native";

const estilos = 
    StyleSheet.create(
{ 
    container: { 
        backgroundColor: "#EEE",
        marginTop: 50,
        borderColor: "lightgray",
        borderWidth: 2,
      },    
    label: { 
        fontSize: 18,
        fontWeight: "bold"
      },
      input: {
        backgroundColor: "lightcyan",
        height: 50,
        borderRadius: 30,
        borderColor: "red",
        borderWidth: 2
      },
      inputGroup: { 
        marginTop: 15,
        marginBottom: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        padding: 10,
        paddingBottom: 30
      }
}
 );

export default estilos;