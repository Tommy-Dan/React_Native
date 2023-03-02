import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from './LoginScreen';
import Register from "./conponents/Register";
import ContactsScreen from './ContactsScreen';
import Contact from "./conponents/Contact";
import PetList from "./conponents/PetList";
import Pet from "./conponents/Pet";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names: ["Tom", 
              "Coker", 
              "Nana",
              "Henry", 
              "Nana", 
              "Eric", 
              "Prince", 
              "Alex", 
              "Michael", 
              "Eric", 
              "Foster", 
              "Heney", 
              "Nana", 
              "Eric", 
              "Joyce", 
              "Nana",
              "Henry", 
              "Nana", 
              "Eric", 
              "Prince", 
              "Alex", 
              "Michael", 
              "Eric", 
              "Foster", 
              "Heney", 
              "Nana", 
              "Eric", 
              "Joyce", 
              "Henry", 
              "Nana", 
              "Eric", 
              "Prince", 
              "Alex", 
              "Michael", 
             ]
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Register />
        {/* <Contact /> */}
        {/* <ContactsScreen /> */}
       {/* <LoginScreen /> */}
       {/* <PetList  /> */}
       {/* <Pet /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    height: 60,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  button: {
    color: "white",
    fontSize: 20
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "skyblue",
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});

export default App;
