import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";




const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <View style={styles.StarImg2}>
          <Text style={styles.logoTest}>Profile</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View>
          <Image
            style={styles.Image}
            source={require("../../assets/images/profile.jpg")}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Tom</Text>
          <Text style={styles.positionText}>Hello</Text>
        </View>
      </View>
      <View style={styles.profileContainer1}>
        <Image
          style={styles.Image1}
          source={require("../../assets/images/OIP24.jpg")}
        />
        <Image
          style={styles.Image1}
          source={require("../../assets/images/R23.png")}
        />
      </View>
      <View style={styles.profileContainer2}>
        <Feather name="phone" size={20} color="gray" />
        <Text style={styles.numberText}> +233 (054) xxxxxxx</Text>
      </View>
      <View style={styles.profileContainer2}>
        <Feather name="mail" size={20} color="gray" />
        <Text style={styles.numberText}>example@gmail.com</Text>
      </View>
      <View style={styles.profileContainer2}>
        <Ionicons name="location" size={30} color="gray" />
        <Text style={styles.numberText}>Codetrain</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profileContainer1: {
    flexDirection: "row",
  },
  profileContainer2: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 20,
    width: 300,
  },
  Image: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 50,
  },
  Image1: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    marginLeft: 30,
    marginRight: 0,
    marginTop: 40,
    borderRadius: 20,
  },
  infoContainer: {
    justifyContent: "center",
    marginHorizontal: 0,
    marginTop: 70,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: "gray",
  },
  icons: {
    flex: 1,
  },
  numberText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  positionText: {
    color: "white",
    fontSize: 20,
  },
  TopContainer: {
    flexDirection: "row",
    marginTop: -10,
    height: 200,
    width: "100%",
    backgroundColor: "#01796F",
    justifyContent: "center",
    alignItems: "center",
  },
  StarImg2: {
    marginTop: 2,
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  StarImg1: {
    marginTop: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "relative",
    marginLeft: 60,
  },
  logoTest: {
    fontSize: 25,
    color: "white",
  },
});

export default Profile;