import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';
import user from '../assets/computerScientist.jpg';



const Home = () => {
    const [msg, setMsg] = useState('sssssssdfa');
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity 
                style={{
                    width:'90%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
               }}
              >
              <Text style={{fontSize: 20}}>Exchange Contact Information</Text>
              <Text>Scan this QR below to share your contacts</Text>
            </TouchableOpacity>
            <View style={{
                marginTop: 30,
                width: '100%',
                height: 250,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
             <QRCode value={msg} size={250} />
            </View>
            <View style={styles.profile}>
                <Image source={user} style={styles.img} />
                <View style={styles.name}>
                    <Text style={{fontSize: 20}}>Joan Shay</Text>
                    <Text>Head of Marketing</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>Want to add a new connection?</Text>
                <Text style={styles.btn}>Scan QR</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
        marginTop: 30,
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
    footer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginTop: 60,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btn: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 80,
        height: 40,
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 20
    }
})

export default Home;