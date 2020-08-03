import React, {useEffect} from 'react';
import { Button , TextInput } from 'react-native-paper';
import { View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LoadingScreen = (props) => {

  const detectLogin =async () =>{
    const token = await AsyncStorage.getItem('token')
        if(token){
            props.navigation.replace("home")
        }else{
            props.navigation.replace("login")
        }
  }

  useEffect (async ()=>{
    detectLogin()
},[])

  return (
    <View style = {styles.loading}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
    loading: {
      flex:1,
      justifyContent: "center",
      alignItems:"center"
    }
  
  })


export default LoadingScreen;