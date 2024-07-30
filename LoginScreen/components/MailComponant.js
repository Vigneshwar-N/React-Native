import {images} from '../constant/images';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

//components

import Button from '../components/ButtonComponent';
import Texts from '../components/TextComponent';
import {style} from '../components/StyleComponent';

export default function MailComponant() {
  const [secureText, setsecureText] = useState(true);
  const togglePassword = () => {
    setsecureText(!secureText);
  };
  return (
    <View style={style.loginPageContainer2}>
      <View>
        <View style={{paddingBottom: '2%'}}>
          <Texts text="Mail" />
        </View>
        <View style={{paddingBottom: '3%', paddingTop: '2%'}}>
          <View style={style.mailContainer}>
            <TextInput
              placeholder="Enter here"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              style={style.mailIpBox}
            />
          </View>
        </View>
      </View>
      <View style={{paddingBottom: '2%', paddingTop: '2%'}}>
        <Texts text="Password" />
      </View>
      <View style={{paddingBottom: '3%'}}>
        <View style={style.PasswordContainer}>
          <View style={style.PasswordIpContainer}>
            <TextInput
              style={style.ipTxt}
              secureTextEntry={secureText}
              placeholder="Enter here"
            />
          </View>
          <View>
            <TouchableOpacity onPress={togglePassword}>
              <Image
                style={style.Eye}
                source={secureText ? images.eyeSlash : images.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={style.FpText}>Forget you password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: '8%'}}>
        <Button
          customStyles={style.loginPageOtpContainer}
          customText={style.loginPageOtpText}
          text="Sign in"
        />
      </View>
    </View>
  );
}
