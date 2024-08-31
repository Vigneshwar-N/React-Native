import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
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
import {ThemeProvider} from '@react-navigation/native';
import {ThemeContext} from '../Hooks/UseContext';
export default function Search() {
  const {darkTheme} = useContext(ThemeContext);
  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView
      style={{
        paddingTop: hp(5),
        paddingRight: '4%',
        paddingLeft: '4%',
        backgroundColor: !darkTheme ? '#FFFFFF' : '#000000',
        flex: 1,
      }}>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <Cross
            height={getResponsiveHeight(38)}
            width={getResponsiveWidth(38)}
            color={!darkTheme ? '#000000' : '#ffffff'}
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
            borderBottomColor: !darkTheme ? '#000000' : '#ffffff',
          }}>
          <TextInput
            style={{
              fontSize: getResponsiveFontSize(21),
              lineHeight: getResponsiveHeight(26),
              fontFamily: fonts.WorkSansRegular,
              color: !darkTheme ? '#000000' : '#FFFFFF',
              width: wp(82),
            }}
            numberOfLines={1}
            placeholderTextColor={!darkTheme ? '#000000' : '#FFFFFF'}
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
              color={!darkTheme ? '#000000' : '#ffffff'}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{paddingTop: hp(4), paddingLeft: wp(0.5)}}>
          <Text
            style={{
              fontSize: getResponsiveFontSize(22),
              fontFamily: fonts.WorkSansRegular,
              color: !darkTheme ? '#000000' : '#FFFFFF',
            }}>
            {'Artsy black sling bag'}
          </Text>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
