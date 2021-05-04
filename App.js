import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import DetailScreen from './screens/detals';
import HomeScreen from './screens/home';
export default function App() {
  return (
   <AppContainer/>
  );
}
const navigator = createSwitchNavigator({
  Home:HomeScreen,
  detail:DetailScreen
})
const AppContainer = createAppContainer(navigator);