import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo,AntDesign,Ionicons,MaterialCommunityIcons} from "@expo/vector-icons";

import Scanner from "./screens/Scanner";
import Profile from "./screens/Profile";
import Member from "./screens/Member";
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "QR Code",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              height: 120,
            },
            headerLeft: () => {
              return (
                <View style={styles.headerBefore}>
                  <MaterialCommunityIcons
                    name="dots-grid"
                    size={30}
                    color="black"
                    style={styles.lefticon1}
                />
              </View>
              );
            },
            headerRight: () => {
              return (
                <Ionicons
                  name="ios-person"
                  size={30}
                  color="black"
                  style={styles.righticon}
                />
              );
            },
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="send"
                  size={30}
                  color="dodgerblue"
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Scanner"
          component={Scanner}
          options={{
            title: "Scan",
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={30}
                  color="red"
                  style={styles.lefticon}
                />
              );
            },
            headerRight: () => {
              return (
                <Ionicons
                  name="close"
                  size={30}
                  color="black"
                  style={styles.righticon}
                />
              );
            },
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="scan"
                  size={24}
                  color="dodgerblue"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              height: 120,
            },
            headerLeft: () => {
              return (
                <View style={styles.headerBefore}>
                  <MaterialCommunityIcons
                     name="arrow-left"
                     size={30}
                     color="white"
                     style={styles.lefticon1}
                  />
                </View>
              );
            },
            tabBarIcon: () => {
              return (
                <AntDesign name="folderopen" size={30} color="dodgerblue" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Member"
          component={Member}
          options={{
            title: "Members",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              height: 120,
            },
            headerLeft: () => {
              return (
                <View style={styles.headerBefore}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={30}
                    color="white"
                    style={styles.lefticon1}
                />
                </View>
              )
            },
            tabBarIcon: () => {
              return (
                <AntDesign name="team" size={30} color="dodgerblue" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconView: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },

  lefticon: {
    marginLeft: 20,
  },

  lefticon1: {
    marginLeft: 20,
    marginTop: -50
  },

  righticon: {
    marginRight: 15,
    color: '#353535'
  },

  headerBefore: {
    width: 400,
    height: 200,
    borderTopWidth: 80,
    borderRadius: 1,
    borderColor: '#FF69B4',
    position: 'absolute',
    top: 12,
    left: 0,
  },
});
