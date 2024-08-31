import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../constants/fonts/font';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import LeftArrow from '../assets/images/svgs/Home/Left';
import RightArrow from '../assets/images/svgs/Home/Right';
import {ThemeContext} from '../Hooks/UseContext';
export default function Header2() {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        marginTop: heightPercentageToDP(4),
        height: getResponsiveHeight(195),
        backgroundColor: '#345123',
      }}>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignSelf: 'flex-end',
          paddingRight: '7%',
        }}>
        <View
          style={{
            backgroundColor: darkTheme ? '#000000' : '#ffffff',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              textAlign: 'left',
              color: darkTheme ? '#FFFFFF' : '#000000',
              fontFamily: fonts.PlayfairDisplayBold,
              fontSize: getResponsiveFontSize(20),
            }}>
            This
          </Text>
        </View>
        <View
          style={{
            backgroundColor: darkTheme ? '#000000' : '#ffffff',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontFamily: fonts.PlayfairDisplayBold,
              color: darkTheme ? '#FFFFFF' : '#000000',

              fontSize: getResponsiveFontSize(20),
            }}>
            season's
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-start',
            backgroundColor: darkTheme ? '#000000' : '#ffffff',
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontFamily: fonts.PlayfairDisplayBold,
              color: darkTheme ? '#FFFFFF' : '#000000',

              fontSize: getResponsiveFontSize(20),
            }}>
            latest
          </Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'flex-end',
          flexDirection: 'row',
          paddingRight: '4.5%',
          top: 10,
        }}>
        <TouchableOpacity>
          <LeftArrow
            height={getResponsiveHeight(51)}
            width={getResponsiveWidth(51)}
            color1={!darkTheme ? '#000000' : '#f1f1f1'}
            color2={!darkTheme ? '#FFFFFF' : '#000000'}
          />
        </TouchableOpacity>
        <View style={{width: wp(0.2)}} />
        <TouchableOpacity>
          <RightArrow
            height={getResponsiveHeight(51)}
            width={getResponsiveWidth(51)}
            color1={!darkTheme ? '#000000' : '#f1f1f1'}
            color2={!darkTheme ? '#FFFFFF' : '#000000'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
