import React from "react";

//@libraries
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
  useFonts,
} from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

//@routes
import { Sign } from "./src/screens/SignIn";

//@components
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </Background>
  );
}
