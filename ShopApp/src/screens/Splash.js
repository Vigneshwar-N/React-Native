import {View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {fonts} from '../constants/fonts/font';
import {getResponsiveFontSize} from '../utility/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('Data');
      } else {
        navigation.replace('Login');
      }
    };

    setTimeout(() => {
      checkToken();
    }, 2500);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
      }}>
      <Animatable.Text
        animation={'fadeInLeft'}
        duration={2000}
        style={{
          fontFamily: fonts.PlayfairDisplayBold,
          fontSize: getResponsiveFontSize(50),
          color: '#000000',
          alignSelf: 'center',
        }}>
        ShopGrid
      </Animatable.Text>
    </View>
  );
};

export default Splash;
