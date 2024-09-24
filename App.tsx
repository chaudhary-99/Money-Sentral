import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Layout from './src/components/Layout'; // Import the Layout component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInScreen">
          {() => (
            <Layout>
              <SignInScreen />
            </Layout>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUpScreen">
          {() => (
            <Layout>
              <SignUpScreen />
            </Layout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
