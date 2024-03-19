/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import logData from '../../data/loginData.js';
import DataScreen from '../Main';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // Check login data with the data in travelData
    const user = logData.find(
      (item) => item.username === username && item.password === password
    );

    if (user) {
      // Successful login
      navigation.navigate('DataScreen', { userLevel: user.level });
    } else {
      // Invalid login
      Alert.alert('Invalid Login');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;