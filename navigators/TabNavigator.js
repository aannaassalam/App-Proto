import React from 'react';
import Photo from '../screen/photo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home';
import CustomTab from '../components/customTab';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const customTab = props => <CustomTab {...props} />;
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={customTab}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="photos" component={Photo} />
    </Tab.Navigator>
  );
}
