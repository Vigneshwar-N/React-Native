import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  getResponsiveWidth,
  getResponsiveFontSize,
  getResponsiveHeight,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {UserContext, UserContextProvider} from '../Hooks/User';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function SignUp({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const {data, setData} = useContext(UserContext);
  // console.log(`This is data:${data}`);
  const [box, setBox] = useState(false);
  const [boxDisable, setBoxDisable] = useState(true);
  const [state, setState] = useState({
    name: '',
    mail: '',
    password: '',
    confirmPassword: '',
  });
  const [editable, setEditable] = useState(true);
  // console.log(state.name, state.mail, state.password, state.confirmPassword);
  useEffect(() => {
    console.log(`1im working`);
    if (
      state.name !== '' &&
      state.mail !== '' &&
      state.password !== '' &&
      state.confirmPassword !== ''
    ) {
      setBoxDisable(false);
    } else {
      setBoxDisable(true);
    }
  }, [state.name, state.mail, state.password, state.confirmPassword]);
  function handleName(text) {
    setState(prev => ({...prev, name: text}));
  }
  function handleMail(text) {
    setState(prev => ({...prev, mail: text}));
  }
  function handlePassword(text) {
    setState(prev => ({...prev, password: text}));
  }
  function handleConfirmPassword(text) {
    setState(prev => ({...prev, confirmPassword: text}));
  }
  function handleCheckBox() {
    setEditable(!editable);
    setBox(!box);
  }
  function storeFunction() {
    if (box) {
      setData(state);
    }
  }
  function passVerification() {
    if (state.password !== state.confirmPassword) {
    }
  }
  return (
    <View
      style={{
        flex: 1,
        marginRight: '3%',
        marginLeft: '3%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp(70),
          // backgroundColor: '#ACA',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#000000',
            fontSize: getResponsiveFontSize(20),
            fontFamily: fonts.PlayfairDisplayBold,
          }}>
          Sign Up
        </Text>
        <View style={{marginTop: hp(3), marginBottom: hp(0)}}>
          <TextInput
            editable={editable}
            style={{
              fontSize: getResponsiveFontSize(18),
              width: wp(92),
              borderWidth: 1,
              paddingTop: '3%',
              PaddingBottom: '3%',
              borderRadius: 50,
              paddingLeft: wp(3),
              color: myColor.black,
              fontFamily: fonts.WorkSansMedium,
              borderColor: '#000000',
              marginTop: '2%',
              marginBottom: '3%',
            }}
            // placeholderTextColor={myColor.darkGray}
            placeholder="name"
            onChangeText={text => {
              handleName(text);
            }}
          />
          <TextInput
            editable={editable}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{
              fontSize: getResponsiveFontSize(18),
              width: wp(92),
              borderWidth: 1,
              paddingTop: '3%',
              PaddingBottom: '3%',
              borderRadius: 50,
              paddingLeft: wp(3),
              color: myColor.black,
              fontFamily: fonts.WorkSansMedium,
              borderColor: '#000000',
              marginTop: '2%',
              marginBottom: '3%',
            }}
            // placeholderTextColor={myColor.darkGray}
            placeholder="mail"
            onChangeText={text => {
              handleMail(text);
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: wp(92),
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#000000',
                marginTop: '2%',
                marginBottom: '3%',
              }}>
              <TextInput
                editable={editable}
                maxLength={12}
                secureTextEntry={secureTextEntry}
                style={{
                  fontSize: getResponsiveFontSize(18),
                  width: wp(80),
                  paddingTop: '3%',
                  paddingBottom: '3%',
                  paddingLeft: wp(3),
                  color: myColor.black,
                  fontFamily: fonts.WorkSansMedium,
                }}
                placeholder="Password"
                onChangeText={text => {
                  handlePassword(text);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}>
                {!secureTextEntry && (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/eye.png')}
                  />
                )}
                {secureTextEntry && (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/hidden.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: wp(92),
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#000000',
                marginTop: '2%',
                marginBottom: '3%',
              }}>
              <TextInput
                editable={editable}
                maxLength={12}
                secureTextEntry={secureTextEntry1}
                style={{
                  fontSize: getResponsiveFontSize(18),
                  width: wp(80),
                  paddingTop: '3%',
                  paddingBottom: '3%',
                  paddingLeft: wp(3),
                  color: myColor.black,
                  fontFamily: fonts.WorkSansMedium,
                }}
                placeholder="confirm password"
                onChangeText={text => {
                  handleConfirmPassword(text);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry1(!secureTextEntry1);
                }}>
                {!secureTextEntry1 && (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/eye.png')}
                  />
                )}
                {secureTextEntry1 && (
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/hidden.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: wp(3),
            }}>
            <View>
              <BouncyCheckbox
                disabled={boxDisable}
                onPress={() => {
                  handleCheckBox();
                }}
                fillColor={myColor.black}
                size={getResponsiveFontSize(14)}
              />
            </View>
            <Text
              style={{
                fontSize: getFocusedRouteNameFromRoute(14),
                right: getResponsiveWidth(10),
                fontFamily: fonts.WorkSansMedium,
              }}>
              I agree with the privacy and policies
            </Text>
          </View>
          <TouchableOpacity
            disabled={!box}
            style={{
              marginTop: hp(4),
              justifyContent: 'center',
              borderWidth: 1,
              width: wp(90),
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 40,
              backgroundColor: !box ? '#333333' : myColor.black,
              borderColor: !box ? '#333333' : myColor.black,
            }}
            onPress={() => {
              passVerification();
            }}>
            <Text
              style={{
                color: myColor.white,
                fontSize: getResponsiveFontSize(22),
                paddingTop: '4%',
                paddingBottom: '4%',
                fontFamily: fonts.PlayfairDisplayBold,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(3),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#222222',
                fontFamily: fonts.WorkSansRegular,
                fontSize: getResponsiveFontSize(12),
              }}>
              Already have account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  left: wp(1),
                  fontFamily: fonts.WorkSansBold,
                  color: myColor.black,
                  fontSize: getResponsiveFontSize(12),
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
