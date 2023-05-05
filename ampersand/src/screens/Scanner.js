import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Scanner = ({ navigation }) => {
    const [getPermission, setGetPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setGetPermission(status === "granted");
        })();
    },[]);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate("Profile");
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.containerScan}>
                <View style={styles.QRborder1}></View>
                <View style={styles.QRborder}></View>
            </View>
            <View style={styles.containerScan}>
                <View style={styles.QRborder3}></View>
                <View style={styles.QRborder2}></View>
            </View>
            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.wantText}>Want to share your contact?</Text>
                </View>
                <View style={styles.scanContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("BQScanner")
                      }}>
                      <Text style={styles.letstartText}>Send QR</Text>  
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const opacity = "rgba(0, 0, 0, 0.6)";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: 300,
        marginHorizontal: 20,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "black"
    },
    containerScan: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 120,
        justifyContent: "center"
    },
    QRborder: {
        height: 30,
        width: 30,
        borderColor: "white",
        borderBottomWidth: 0,
        borderWidth: 5,
        borderLeftWidth: 0,
        borderRadius: 5,
        marginHorizontal: 100
    },
    QRborder1: {
        width: 30,
        borderColor: "white",
        height: 30,
        borderWidth: 5,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginHorizontal: 100,
        borderRadius: 5
    },
    QRborder2: {
        height: 30,
        width: 30,
        borderColor: "white",
        borderWidth: 5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRadius: 5,
        marginHorizontal: 100,
    },
    QRborder3: {
        width: 30,
        borderColor: "white",
        height: 30,
        borderWidth: 5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        marginHorizontal: 100,
        borderRadius: 5,
    },
    bottomContainer: {
        width: "100%",
        backgroundColor: "white",
        height: "15%",
        flexDirection: "row",
        borderColor: "black",
        borderTopWidth: 1,
        marginHorizontal: 20,
        marginTop: 90
    },
    wantText: {
        marginTop: 36,
        marginHorizontal: 2
    },
    scanContainer: {
        width: 150,
        height: 50,
        borderWidth: 1,
        marginTop: 20,
        justifyContent: "center",
        marginHorizontal: 10,
        borderColor: "#01796F"
    },
    letstartText: {
        textAlign: "center",
        color: "#01796f",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Scanner;