import React from 'react';
import Settings from './settings';
import MyPlans from './myPlans';
import GetReviews from './getReviews';
import {createStackNavigator} from '@react-navigation/stack';
import ManageReviews from './manageReviews';

function SettingsStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="settings">
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen
        name="plans"
        component={MyPlans}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="reviews"
        component={ManageReviews}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default SettingsStack;
