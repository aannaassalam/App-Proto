import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTab from './navigators/customTab';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Photo from './screen/photo';
import Home from './screen/home';

const Tab = createBottomTabNavigator();
function App() {
  const customTab = props => <CustomTab {...props} />;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} tabBar={customTab}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="photos" component={Photo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
