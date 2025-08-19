import React from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/d5/d2/08/d5d2089ca71456ef507e52f2ed1e06c7.jpg' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover"
    >
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>Login</Text>
      <TextInput
        placeholder="Usuário"
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 8, color: '#fff', borderColor: '#fff', backgroundColor: 'rgba(0,0,0,0.5)' }}
        placeholderTextColor="#ccc"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 20, padding: 8, color: '#fff', borderColor: '#fff', backgroundColor: 'rgba(0,0,0,0.5)' }}
        placeholderTextColor="#ccc"
      />
      <Button title="Entrar" onPress={() => alert('Login!')} />
    </ImageBackground>
  );
}