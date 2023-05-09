import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Navbar from '../components/navbar';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{header: Navbar, headerTransparent: true}}>
      <Stack.Screen name="TabScreen" component={TabNavigator} />
    </Stack.Navigator>
  );
}
