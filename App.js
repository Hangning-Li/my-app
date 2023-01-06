import { StatusBar } from 'expo-status-bar';
import {View, ImageBackground, Text } from 'react-native';
import AppStyles from "./styles/AppStyles"
import Todos from './components/ToDos';
import React, {useState, useEffect} from 'react';

export default function App() {
  const background = require("./assets/images/background.jpg");
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <View>
          <Todos></Todos>
      </View>
    </ImageBackground>
  );
}
