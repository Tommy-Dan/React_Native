import React from 'react'
import { FlatList, View } from 'react-native';
import Contact from "./conponents/Contact";



const ContactsScreen = () => {
    const contacts=[
        {name:"Francis",number:"+2488522180"},
        {name:"Grace",number:"+2488512180"},
        {name:"Prince",number:"+2488524180"},
        {name:"Rama",number:"+2488352180"},
        {name:"Alex",number:"+2488552180"},
        {name:"Malik",number:"+2489852180"},
        {name:"Tom",number:"0244852180"},
        {name:"Mambu",number:"02448052181"},
        {name:"Francis",number:"+24228852180"},
        {name:"Grace",number:"+2488452180"},
        {name:"Prince",number:"+2488582180"},
        {name:"Rama",number:"+2488552180"},
        {name:"Alex",number:"+2488527180"},
        {name:"Malik",number:"+2488582180"},
        {name:"Tom",number:"+2332448952180"},
        {name:"Mambu",number:"+233244852180"},
        {name:"Alex",number:"+24885282180"},
        {name:"Malik",number:"+24884252180"},
        {name:"Tom",number:"+23324481252180"},
        {name:"Mambu",number:"+2332448252180"},
    ]
  return (
    <View>
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