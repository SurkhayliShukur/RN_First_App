import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const AppStack:React.FC = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
      <Stack.Screen name = "home"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;