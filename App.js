import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, ImageBackground } from 'react-native';
import LoginScreen from './LoginScreen';

function SplashScreen({ navigation }) {
  let nome = 'Created By: Bryan';

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 8000); // 8 segundos
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/2e/98/41/2e9841fedefc8a87ef9e6ea895d7ecd1.jpg' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover"
    >
      <Text style={{ color: '#fff', fontSize: 25, margin: 25, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>
        RESPAWGG!
      </Text>
      
      <Text style={{ color: '#44daf1ff', fontSize: 15, margin: 5, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 }}>
        {nome}
      </Text>
    </ImageBackground>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
