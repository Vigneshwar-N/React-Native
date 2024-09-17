import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getResponsiveFontSize} from '../utility/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';
import * as Animatable from 'react-native-animatable';

function Login({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [mail, setMail] = useState('');
  const [token, setToken] = useState('');
  console.log(mail);

  const [password, setPassword] = useState('');
  console.log(password);

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
        <Animatable.Text
          animation={'fadeInDownBig'}
          style={{
            alignSelf: 'center',
            color: '#000000',
            fontSize: getResponsiveFontSize(20),
            fontFamily: fonts.PlayfairDisplayBold,
          }}>
          Login
        </Animatable.Text>
        <View style={{marginTop: hp(3), marginBottom: hp(0)}}>
          <Animatable.View animation={'fadeInLeft'}>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              style={{
                fontSize: getResponsiveFontSize(18),
                width: wp(92),
                borderWidth: 1,
                paddingTop: '3%',
                paddingBottom: '3%',
                borderRadius: 50,
                paddingLeft: wp(3),
                color: myColor.black,
                fontFamily: fonts.WorkSansMedium,
                borderColor: '#000000',
                marginTop: '2%',
                marginBottom: '3%',
              }}
              value={mail}
              onChangeText={text => setMail(text)}
              placeholder="Mail"
            />
          </Animatable.View>
          <Animatable.View
            animation={'fadeInRight'}
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
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
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
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            const token = '#adw13@sf';
            await AsyncStorage.setItem('token', token);
            navigation.replace('Data');
          }}
          style={{
            marginTop: hp(4),
            justifyContent: 'center',
            borderWidth: 1,
            width: wp(92),
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 40,
            backgroundColor: myColor.black,
            borderColor: myColor.black,
          }}>
          <Text
            style={{
              color: myColor.white,
              fontSize: getResponsiveFontSize(22),
              paddingTop: '4%',
              paddingBottom: '4%',
              fontFamily: fonts.PlayfairDisplayBold,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: hp(2),
            marginBottom: hp(2),
            alignSelf: 'center',
            fontFamily: fonts.WorkSansBold,
            color: myColor.black,
            fontSize: getResponsiveFontSize(12),
          }}>
          or
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            borderWidth: 1,
            width: wp(92),
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 40,
            backgroundColor: myColor.black,
            borderColor: myColor.black,
          }}>
          <Text
            style={{
              color: myColor.white,
              fontSize: getResponsiveFontSize(22),
              paddingTop: '4%',
              paddingBottom: '4%',
              fontFamily: fonts.PlayfairDisplayBold,
            }}>
            Continue with Google
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
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                left: wp(1),
                fontFamily: fonts.WorkSansBold,
                color: myColor.black,
                fontSize: getResponsiveFontSize(12),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
