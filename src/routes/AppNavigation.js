// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

export default AppNavigation;
