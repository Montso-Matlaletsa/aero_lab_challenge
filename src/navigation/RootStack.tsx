import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootNavigation, RootStackParams} from '../@types/types';
import Home from '../screens/Home';
import Products from '../screens/Products';

const Stack = createNativeStackNavigator<RootNavigation>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_bottom'}}>
      <Stack.Screen name={RootStackParams.HOME} component={Home} />
      <Stack.Screen name={RootStackParams.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};
