import React from 'react';
import { StatusBar, View } from 'react-native';

import { AppLoading } from 'expo';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

//Forçando a cor da StatusBar

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Ubuntu_700Bold
  });


  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/> 
    <Routes />
    </>
  );
}


//Instalando fonts expo
//expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto