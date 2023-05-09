import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Navbar from '../components/navbar';
import TabNavigator from './TabNavigator';
import Login from '../screen/login';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{header: Navbar, headerTransparent: true}}>
      <Stack.Screen name="TabScreen" component={TabNavigator} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}
