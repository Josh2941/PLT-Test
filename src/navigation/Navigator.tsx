// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListContainer from '../features/list/List';
import CartContainer from '../features/cart/Cart';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name="List" component={ListContainer} />
        <Stack.Screen name="Cart" component={CartContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;