import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import MenuImage from '../assets/images/svgs/Home/Menu';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import ProfileImage from '../assets/images/svgs/Home/Profile';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {fonts} from '../constants/fonts/font';
import {ThemeContext} from '../Hooks/UseContext';

export default function Header() {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        height: getResponsiveHeight(33),
        justifyContent: 'space-between',
        marginTop: heightPercentageToDP(5),
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <MenuImage
          height={getResponsiveHeight(14)}
          width={getResponsiveWidth(24)}
          color={darkTheme ? '#FFFFFF' : '#000000'}
        />
        <Text
          style={{
            fontSize: getResponsiveFontSize(22),
            marginBottom: 3.2,
            paddingLeft: '4%',
            fontFamily: fonts.PlayfairDisplayBold,
            color: !darkTheme ? '#000000' : '#FFFFFF',
          }}>
          ShopGrid
        </Text>
      </View>
      <View>
        <ProfileImage
          height={getResponsiveHeight(32)}
          width={getResponsiveWidth(32)}
          color={darkTheme ? '#FFFFFF' : '#000000'}
        />
      </View>
    </View>
  );
}
