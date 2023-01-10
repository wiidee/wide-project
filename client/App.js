const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Intrests from "./screens/Intrests";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({ Jost: require("./assets/fonts/Jost.ttf") });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        
          <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intrests"
              component={Intrests}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
};
export default App;
