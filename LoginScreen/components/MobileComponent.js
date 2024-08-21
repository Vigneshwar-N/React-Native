import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {View, Text, TextInput} from 'react-native';
import React from 'react';

//components
import Button from './ButtonComponent';
import Texts from './TextComponent';
import {style} from './StyleComponent';

export default function Mobile() {
  return (
    <View style={style.loginPageContainer}>
      <View>
        <View style={style.loginPageTextContainer}>
          <Texts text="Mobile Number" />
        </View>
        <View style={style.loginPageIpContainer}>
          <View style={style.loginPageIpContainer2}>
            <View
              style={{
                width: wp(8),
                paddingBottom: 0.9,
                paddingLeft: 0.5,
              }}>
              <Text style={{color: '#000000'}}> +91</Text>
            </View>
            <View>
              <TextInput
                style={style.loginPageIpBox}
                maxLength={10}
                placeholder="Enter here"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </View>
      <Button
        customStyles={style.loginPageOtpContainer}
        customText={style.loginPageOtpText}
        text="Send OTP"
      />
    </View>
  );
}
