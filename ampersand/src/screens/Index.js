import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.png";
import backNav from "../../assets/images/back.jpg";


const Index = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.logoContainer}>
                <Image source={backNav} style={StyleSheet.img} />
            </View>
            <View style={StyleSheet.logoContainer}>
                <Text style={StyleSheet.logoText}>
                    KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN
                </Text>
                <Text style={StyleSheet.logoText1}>
                    Sign in or Register with your email{""}
                </Text>
            </View>
            <View style={styles.LoginRegisterContainer}>
               <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("RegisterScreen");
                    }}>
                    <Text style={styles.LetstartText}>REGISTER</Text>
                  </TouchableOpacity>
                  <View style={styles.LetstartText2}></View>
                </View>
                <View>
                   <TouchableOpacity
                     onPress={() => {
                       navigation.navigate("LoginScreen");
                     }}>
                     <Text style={styles.LetstartText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={styles.LetstartText2}></View>
                </View>
            </View>    
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    marginTop: 38,
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 0,
    borderBottomColor: "orange",
  },
  LetstartText2: {
    width: 70,
    height: 2,
    marginHorizontal: 50,
    justifyContent: "left",
    alignSelf: "left",
    backgroundColor: "red",
  },
  logoContainer: {
    width: 380,
    height: 280,
    marginBottom: 20,
  },
  logoText: {
    marginTop: 230,
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: -5,
  },
  logoText2: {
    color: "#8c8c8c",
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    marginLeft: -90,
  },
  LetstartText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  img: {
    width: 700,
    height: 600,
    alignSelf: "center",
    marginTop: -100,
  },
  LoginRegisterContainer: {
    marginTop: 140,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    marginBottom: 100,
    borderRadius: 20,
    marginLeft: -37,
  },
});

export default Index;