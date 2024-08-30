import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ThemeContext} from '../Hooks/UseContext';
export default function ProductDescription() {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: darkTheme ? '#000000' : '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: darkTheme ? '#FFFFFF' : '#000000'}}>
        ProductDescription
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
