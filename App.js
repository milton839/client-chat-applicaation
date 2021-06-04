import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreens from './Screens/LoginScreens';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import AddChatScreen from './Screens/AddChatScreen';

const Stack = createStackNavigator();
//hello
const globalScreenOptions = {
  headerStyle:{backgroundColor:'#2c6bed'},
  headerTitleStyle:{color:'white'},
  headerTintColor:'white',
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={globalScreenOptions}>
          <Stack.Screen  name="Login" component={LoginScreens} />
          <Stack.Screen  name="Register" component={RegisterScreen} />
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen  name="AddChat" component={AddChatScreen} />
        </Stack.Navigator>
    </NavigationContainer>
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
