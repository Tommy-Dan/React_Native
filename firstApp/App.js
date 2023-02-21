import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import profile from './assets/Obama.png'

function App() {
  return (
  <View style={styles.container}>
     <Image source={profile} style={styles.image}/>
     <View style={styles.detailContainer}>
      <Text style={styles.label}>Name</Text>
      <Text style={[styles.label,styles.info]}>Barack Obama</Text>
     </View>
     <View style={styles.detailContainer}>
      <Text style={styles.label}>Email</Text>
      <Text style={[styles.label,styles.info]}>baraco@yahoo.com</Text>
     </View>
     <View style={styles.detailContainer}>
      <Text style={styles.label}>Gender</Text>
      <Text style={[styles.label,styles.info]}>Male</Text>
     </View>
     <View style={styles.detailContainer}>
      <Text style={styles.label}>Title</Text>
      <Text style={[styles.label,styles.info]}>Formal president of United States</Text>
     </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 20

  },
  image:{
    width:150,
    height:150,
    marginTop: 100,
    marginBottom:30,
    alignSelf: "center",
    borderRadius: 75
  },
  detailContainer:{
    flexDirection: "row",
    marginVertical: 3
  },
  label:{
    borderColor: "black",
    borderWidth:1,
    fontSize:20,
    flex:2.5,
    paddingHorizontal:5
  },
  info:{
    flex:7.5  
  }
});

export default App;

