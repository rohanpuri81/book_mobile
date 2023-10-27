import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import Details from './Screens/Details';
import Add from './Screens/Add';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Add"
          component={Add}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
