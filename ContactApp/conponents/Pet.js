import React from 'react';
import { View,Text,Image,StyleSheet, TextInput} from 'react-native';
import PetList from "./PetList" 

import { MaterialIcons, Feather, Entypo, MaterialCommunityIcons, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";
const Pet = ({name,phone,model,age,location}) => {
  return (
    <View style={styles.container}>
        <View style={styles.location} >
           <Image style={styles.Image} source={require("../assets/Cats.jpg")} />     
           <View style={styles.infoContainer}>
              <Text style={styles.name} numberOfLines={1}>Pastel</Text>
              <Text style={styles.number}>{model}</Text>
              <Text style={styles.number}>2 years old</Text>
        
              <View style={styles.location}>
                  <EvilIcons style={styles.location} 
                    name="location" size={24} 
                    color="black"/>
                    <Text numberOfLines={1} >Legon Hills</Text>
              </View>
            
        </View> 
         
        </View>
        
        <View style={styles.location} >
           <Image style={styles.Image} source={require("../assets/Dog.jpg")} />     
           <View style={styles.infoContainer}>
           <Text style={styles.name} numberOfLines={1}>Pastel</Text>
           <Text style={styles.number}>{model}</Text>
           <Text style={styles.number}>2 years old</Text>
        
        <View style={styles.location}>
          <EvilIcons style={styles.location} 
           name="location" size={24} 
           color="black"/>
           <Text numberOfLines={1} 
           style={styles.location}>Legon Hills</Text></View>   
        </View> 
         
        </View>

        <View style={styles.location} >
        <Image style={styles.Image} source={require("../assets/DOG1.jpg")} />     
        <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>Pastel</Text>
        <Text style={styles.number}>cat{model}</Text>
        <Text style={styles.number}>2 years old</Text>
        
        <View style={styles.location}>
            
             <EvilIcons name="location" size={24} color="black"/><Text numberOfLines={1}  style={styles.location}>Legon Hills</Text></View>
            
        </View> 
         
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        marginHorizontal:20,
        alignItems:"center",
        backgroundColor:"#f0f5f5",
        marginVertical:5
    },
    Image: {
        width:200,
         height:150,
         marginHorizontal:10, 
        marginVertical:20,
       // alignSelf: "",
        borderRadius:15,
        flex:6
      },
      infoContainer:{
        justifyContent:"center",
        height:140,
        marginLeft:5,
       borderBottomRightRadius:20,
       borderTopRightRadius:20,
        backgroundColor:"white",
        flex:4
      },
      name:{
        fontWeight:"bold",
        fontSize:20,
        color:"blue",
        marginHorizontal:10
      },
      icons:{
        flex:1
      },
      number:{
        marginVertical:1,
        marginHorizontal:5,
        fontSize:18,
        color:"#a8a8a8",
        alignItems:"center",
        marginLeft:10
      },
      location:{
        //marginHorizontal:1,
        color:"#a8a8a8",
        flexDirection:"row",
        alignItems:"center",
      
      }

});
export default Pet