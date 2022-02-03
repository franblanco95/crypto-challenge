import React, { FC, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { readData } from '../store/actions/cripto.actions';
import { useDispatch } from 'react-redux';

const MainNavigator: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readData())
  }, [])

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Crypto Tracker Pro',
          }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
