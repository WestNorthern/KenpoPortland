import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CurrentRenderContext, NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from './app/components/Screen';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}

