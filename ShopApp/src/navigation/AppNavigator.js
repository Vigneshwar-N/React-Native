import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '../Hooks/UseContext';
import {View, StyleSheet} from 'react-native';
import {myColor} from '../utility/Colors/myColors';
import RootStack from './RootStack';
import {useSelector} from 'react-redux';
function Navigator() {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <NavigationContainer>
        <RootStack />
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
