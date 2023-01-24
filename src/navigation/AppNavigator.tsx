import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Product, QrReding} from '../Pages';
import {HomeStackParamList} from './types';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="QR_REDING" component={QrReding} />
        <Stack.Screen name="PRODUCT" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
