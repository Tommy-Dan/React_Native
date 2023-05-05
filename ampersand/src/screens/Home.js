import React from "react";
import Logo from "../../assets/logo.png";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";


const Home = ({ navigation }) => {
    rturn (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.img} />
            </View>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Take my Contact</Text>
            </View>

            <View style={styles.logoContainer}>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("Index");
                    }}
                >
                    <Text style={styles.getStarted}>GET STARTED</Text>
                </TouchableOpacity>
                <View style={styles.getStarted1}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        alignSelf: "center",
        marginHorizontal: 20,
        flex:1
    },
    getStarted1: {
        width: 130,
        height: 4,
        marginLeft: 30,
        alignSelf: "center",
        backgroundColor: "red"
    },
    logoContainer: {
        width: 350,
        height: 250,
        marginBottom: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    logoText: {
        color: "#000",
        textAlign: "center",
        marginTop: 80,
        fontsize: 25,
        fontWeight: "bold",
        justifyContent: "center"
    },
    getStarted: {
        textAlign: "center",
        marginTop: 80,
        fontsize: 22,
        fontWeight: "bold",
        justifyContent: "center"
    },
    img: {
        width: 350,
        height: 300,
        alignItems: "center"
    }

});

export default Home;