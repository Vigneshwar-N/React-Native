import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, ThemeProvider} from '../Hooks/UseContext';
import {DrawerNavigator} from './DrawerNavigator';
import {View} from 'react-native';

function Navigator() {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: darkTheme ? '#000000' : '#FFFFFF'}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

export default AppNavigator;
