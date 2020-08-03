import React,{useEffect, useState} from 'react';
import { Button , TextInput } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const App = () => {
  const [isloggedin,setLogged] = useState(null)

  const detectLogin =async () =>{
      const token = await AsyncStorage.getItem('token')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
  }

  useEffect(()=>{
      detectLogin()
  },[])

  return (
    <NavigationContainer>

      <Stack.Navigator
        headerMode="none"
      >
        
          <Stack.Screen name="loading" component={LoadingScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="signup" component={SignupScreen} />
              
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;