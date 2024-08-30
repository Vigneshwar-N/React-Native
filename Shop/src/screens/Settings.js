import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  lightThemeStyles,
  darkThemeStyles,
  styles,
} from '../components/styles/settingsStyle';
import {ThemeContext} from '../Hooks/UseContext';

export default function Settings() {
  const {darkTheme, toggleTheme} = useContext(ThemeContext);

  if (darkTheme === undefined || toggleTheme === undefined) {
    // Log an error or handle it if the context is not provided
    console.error('ThemeContext is not provided');
    return null;
  }

  const themeStyle = darkTheme ? darkThemeStyles : lightThemeStyles;

  return (
    <View style={[styles.container, themeStyle.backgroundColor]}>
      <Text style={[styles.headerText, themeStyle.text]}>Settings</Text>

      <TouchableOpacity
        style={[styles.button, themeStyle.button]}
        onPress={toggleTheme}>
        <Text style={[styles.buttonText, themeStyle.text]}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
