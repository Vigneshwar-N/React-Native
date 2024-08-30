import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '../Hooks/UseContext'; // Adjust the import path
import {BottomNavigator} from './BottomTabs';

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
