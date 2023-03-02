import React from 'react'
import { FlatList, View } from 'react-native';
import Pet from "./Pet";



const ContactsScreen = () => {
    const contacts=[{
                    name:"Pastel",
                    number:"+23354852180",
                    model:"cat",
                    age:"2 years old",
                    location:"Legon Hills" 
                  },

                  {name:"Tom",number:"+23359300000"},
                  {name:"Coker",number:"+2348809000"},
    ]
  return (
    <View>
       <FlatList 
       data={contacts}
       renderItem={({item})=>{
        return<Pet 
        name={item.name}
        phone={item.number}
        model={item.model}
        age={item.age}
        location={item.location}
         />
       }}
       keyExtractor={(item)=>item.number}
       />
    </View>
  )
}
export default ContactsScreen;