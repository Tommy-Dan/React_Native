import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import QRscanner from "./Scanner";



const QRgenerator = ({ navigation }) => {
  const userInfo = {
    fullname: "Tommy Dan Tucker",
    email: "admin@gmail.com",
    phone: "0540000000",
    twitter: "@example",
    linkedin: "/example",
  };

  return (
    <View>
      <View style={styles.TopContainer}>
        <View style={styles.StarImg2}>
          <Text style={styles.logoTest}>Profile info</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}>
          <Image
            style={styles.StarImg1}
            source={require("../../assets/images/img200.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.toptextContainer}>
        <Text style={styles.toptext}>Exchange Contact Information</Text>
      </View>
      <View style={styles.toptextContainer1}>
        <Text style={styles.toptext1}>
          Scan this QR below to share your contacts
        </Text>
      </View>
      <View style={styles.QRCode}>
        <QRCode
          value={JSON.stringify(userInfo)}
          size={250}
        />
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
          <Text>0540000000</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.wantText}>Want to add a new connection?</Text>
        </View>
        <View style={styles.scanContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BQScanner");
            }}>
            <Text style={styles.LetstartText}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  QRCode: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,
    marginTop: 1,
  },
  LetstartText: {
    textAlign: "center",
    alignSelf: "center",
    color: "#01796F",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  LetstartText2: {
    width: 70,
    height: 2,
    marginHorizontal: 50,
    alignSelf: "center",
    backgroundColor: "#ff1a75",
  },
  toptextContainer: {
    marginTop: 70,
    marginHorizontal: 40,
  },
  toptextContainer1: {
    width: "85%",
    marginTop: 10,
    marginHorizontal: 40,
    marginBottom: 40,
  },
  toptext: {
    fontSize: 21,
  },
  toptext1: {
    fontSize: 21,
    color: "gray",
  },
  bottomContainer: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    borderColor: "black",
    borderTopWidth: 1,

    marginTop: 60,
  },
  Image: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginTop: 60,
    borderRadius: 50,
  },
  wantText: {
    marginTop: 36,
    marginHorizontal: 20,
  },
  scanContainer: {
    width: 130,
    height: 50,
    borderWidth: 1,
    marginTop: 20,

    justifyContent: "center",

    borderColor: "#01796F",
  },
  infoContainer: {
    justifyContent: "center",
    marginHorizontal: 0,
    marginTop: 70,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  profileContainer: {
    flexDirection: "row",
  },
  StarsTop: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "blue",
    marginBottom: 20,
  },
  StarsTopArrow: {
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  StarImg: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
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
  TopContainer: {
    flexDirection: "row",
    marginTop: 0,
    height: 120,
    width: "100%",
    backgroundColor: "#01796F",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTest: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 50,
  },
});


export default QRgenerator;