
// ======= AppRegistry.js start here ============
// import Scanner from './screens/Scanner';
// import Profile from './screens/Profile';
// import Member from './screens/Member';
// import Home from './screens/Member';

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <Stack.Navigator>
//        <Stack.Screen name="Home" component={Home} />
//        <Stack.Scanner name="Scanner" component={Scanner} />
//        <Stack.Screen name="Profile" component={Profile} />
//        <Stack.Screen name="Member" component={Member} />
//     </Stack.Navigator>
//   );
// }

// export default () => {
//   return(
//     <NavigationContainer>
//        <App />
//     </NavigationContainer>
//   )
// }

// ======= AppRegistry.js end here ============



// import { View, Button, StyleSheet } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// export default function Home(){
//     const navigation = useNavigation();

//     return(
//         <View style={styles.container}>
//             <Button title='Scan' onPress={() => navigation.navigate('Scanner')} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Home() {
  return (
    <View style={styles.container}>
      <QRCode 
        title='Scan' onPress={() => navigation.navigate('Scanner')}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});