import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          title: 'Crypto Tracker Pro',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
