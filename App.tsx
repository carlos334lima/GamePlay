import React from 'react';

import { Sign } from './src/screens/SignIn';

import { Rajdhani_500Medium, Rajdhani_700Bold, useFonts } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from "expo-app-loading";


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Sign />
  )
}