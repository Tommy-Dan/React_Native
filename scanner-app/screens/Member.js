import React from 'react';
import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from 'react-native';
import member from '../assets/BarackObama.png';
import { SocialIcon } from 'react-native-elements';



const Member = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image source={member} style={styles.img} />
            <View style={styles.name}>
                <Text style={{fontSize: 20}}>Barack Obama</Text>
            </View>
        </View>
        <View style={styles.socialmedia}>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('twitter');
                  }}
                />
                {/* <Text style={{ textAlign: 'center' }}>twitter</Text> */}
            </View>
            <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('linkedin');
                  }}
                />
                {/* <Text style={{ textAlign: 'center' }}>linkedin</Text> */}
            </View> 
        </View>
        <View style={styles.textmargintop}>
           <Text>
             <SimpleLineIcons 
                  name="phone"
                  size={20}
                  color="dodgerblue"
              />
                +233 (245)23123
            </Text>
           <Text>
              <Fontisto
                  name="email"
                  size={20}
                  color="dodgerblue"
              />
              barackobama@hotmail.co
            </Text>
            <Text>
              <Ionicons
                  name="md-location-outline"
                  size={20}
                  color="dodgerblue"
                />
              Shareditch, NW
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
      width: 60,
      height: 60,
      marginTop: 20,
      borderRadius: 100,
      marginLeft: 50,
  },
  profile: {
      flex: 1,
      flexDirection: 'row',
  },
  name: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 30,
      marginLeft: 20
  },
  socialmedia: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -150,
    marginTop: 0,
  },
  textmargintop: {
    marginBottom: 200,
    marginLeft: -100,
  }
})

export default Member;