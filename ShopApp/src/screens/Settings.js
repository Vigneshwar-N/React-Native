import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  lightThemeStyles,
  darkThemeStyles,
  styles,
} from '../components/styles/settingsStyle';
import {toggleTheme} from '../../store/themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({navigation}) {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  const themeStyle = darkTheme ? darkThemeStyles : lightThemeStyles;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login');
  };

  return (
    <View style={[styles.container, themeStyle.backgroundColor]}>
      <Text style={[styles.headerText, themeStyle.text]}>Settings</Text>
      <TouchableOpacity
        style={[styles.button, themeStyle.button]}
        onPress={() => dispatch(toggleTheme())}>
        <Text style={[styles.buttonText, themeStyle.text]}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, themeStyle.button]}
        onPress={handleLogout}>
        <Text style={[styles.buttonText, themeStyle.text]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
