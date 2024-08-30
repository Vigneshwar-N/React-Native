import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
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
export default function Header2() {
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
        <Text
          style={{
            textAlign: 'left',
            color: '#FFFFFF',
            fontFamily: fonts.PlayfairDisplayBold,
            fontSize: getResponsiveFontSize(20),
          }}>
          This
        </Text>
        <Text
          style={{
            textAlign: 'left',
            color: '#FFFFFF',
            fontFamily: fonts.PlayfairDisplayBold,
            fontSize: getResponsiveFontSize(20),
          }}>
          Season's
        </Text>
        <Text
          style={{
            textAlign: 'left',
            color: '#FFFFFF',
            fontFamily: fonts.PlayfairDisplayBold,
            fontSize: getResponsiveFontSize(22),
          }}>
          latest
        </Text>
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
          />
        </TouchableOpacity>
        <View style={{width: wp(0.2)}} />
        <TouchableOpacity>
          <RightArrow
            height={getResponsiveHeight(51)}
            width={getResponsiveWidth(51)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
