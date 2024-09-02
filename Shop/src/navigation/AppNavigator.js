import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, ThemeProvider} from '../Hooks/UseContext';
import {View, StyleSheet} from 'react-native';
import {myColor} from '../utility/Colors/myColors';
import {BottomNavigator} from './BottomTabs';
import {DrawerNavigator} from './DrawerNavigator';
import DataContainer from '../apis/DataContainer';
function Navigator() {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <NavigationContainer>
        <DataContainer />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
