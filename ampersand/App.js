import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Index from "./src/screens/Index";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import QRgenerator from "./src/screens/QRgenerator";
import Scanner from "./src/screens/Scanner";
import Profile from "./src/screens/Profile";
import ShotImage from "./src/screens/ShotImage";
import { Entypo, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from "@expo/vector-icons";



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
       screenOptions={{
           header:()=>null
       }}
      >
        {/* <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRgenerator"
          component={QRgenerator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#01796F",
            },

            headerTintColor: "white",
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#01796F",
            },

            headerTintColor: "white",
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "normal",
            },
          }}
          name="Register"
          component={Register}
        />

        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#01796F",
            },

            headerTintColor: "white",
            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          }}
          name="Scanner"
          component={Scanner}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          options={{
            title: "Member Profile",
            headerStyle: {
              backgroundColor: "#01796F",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "normal",
            },
          }}
          name="ShotImage"
          component={ShotImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01796F",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});