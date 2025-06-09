import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from '../screens/Product/index';
import {ROUTES} from './routes';

const Stack = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.PRODUCT} component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
