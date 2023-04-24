import React from 'react'
import { FlatList, View, Text } from 'react-native';
import Contact from "./conponents/Contact";



const ContactsScreen = () => {
    const contacts=[
      {name:"Francis Jah",number:"+2488522180"},
      {name:"Grace Odonko",number:"+2488512180"},
      {name:"Prince William",number:"+2488524180"},
      {name:"Rama Boku",number:"+2488352180"},
      {name:"Alex Manuu",number:"+2488552180"},
      {name:"Tom Hilfiger",number:"0244852180"},
      {name:"Chris Brown",number:"02448052181"},
      {name:"Francess Addo",number:"+24228852180"},
    ]
  return (
    <View>
         <Text style={{
           marginLeft: 50,
           marginBottom: 20,
           fontSize: 25,
           color: 'skyblue',
           fontWeight: '700'
         }}
         >Contacts</Text>
       <FlatList 
       data={contacts}
       renderItem={({item})=>{
        return<Contact 
        image={item.image}
        name={item.name}
        phone={item.number}
         />
       }}
       keyExtractor={(item)=>item.number}
       />
    </View>
  )
}
export default ContactsScreen;