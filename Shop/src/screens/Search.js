import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
//Package
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Cross from '../assets/images/svgs/Search/Cross';
import LightCross from '../assets/images/svgs/Search/LightCross';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
export default function Search() {
  const [input, setInput] = useState('');

  return (
    <View style={{paddingTop: hp(5)}}>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <Cross
            height={getResponsiveHeight(38)}
            width={getResponsiveWidth(38)}
          />
        </TouchableOpacity>
      </View>
      <View style={{position: 'static'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: getResponsiveHeight(1),
            borderBottomColor: '#000000',
          }}>
          <TextInput
            style={{
              fontSize: getResponsiveFontSize(21),
              lineHeight: getResponsiveHeight(26),
              fontFamily: fonts.WorkSansRegular,
              color: '#000000',
              width: wp(82),
            }}
            numberOfLines={1}
            placeholderTextColor={'#000000'}
            placeholder="Enter here"
            value={input}
            onChangeText={text => setInput(text)}
          />
          <TouchableOpacity
            style={{paddingRight: '5%', height: getResponsiveHeight(26)}}
            onPress={() => setInput('')}>
            <LightCross
              height={getResponsiveHeight(13)}
              width={getResponsiveWidth(13)}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: hp(4), paddingLeft: wp(0.5)}}>
          <Text
            style={{
              fontSize: getResponsiveFontSize(22),
              fontFamily: fonts.WorkSansRegular,
              color: '#000000',
            }}>
            {'Artsy black sling bag'}
          </Text>
        </View>
      </View>
    </View>
  );
}
