import {images} from '../constant/images';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

//components
import Header from '../components/HeaderComponent';
import Button from '../components/ButtonComponent';
import Texts from '../components/TextComponent';
import {style} from '../components/StyleComponent';
import Mobile from '../components/MobileComponent';
import MailComponant from '../components/MailComponant';

//Main Code
export default function App() {
  const [state, setState] = useState({
    Mobile: true,
    Mail: false,
    secureText: true,
  });

  const toggleMobile = () => {
    setState({
      ...state,
      Mobile: true,
      Mail: false,
    });
  };

  const toggleMail = () => {
    setState({
      ...state,
      Mobile: false,
      Mail: true,
    });
  };

  return (
    <View>
      {/**Logo */}
      <View style={style.digiGrainLogoContainer}>
        <Header headerImage={images.logo} />
      </View>

      {/**Login */}
      <View style={style.loginContainer}>
        <Text style={style.loginText}>Login</Text>
      </View>

      {/** Switch */}
      <View style={style.switchContainer}>
        <Button
          customStyles={state.Mobile && style.customStyles}
          customText={state.Mobile && style.customText}
          onPress={toggleMobile}
          leftImage={state.Mobile && images.mobile}
          text="Mobile Number"
        />
        <Button
          customStyles={state.Mail && style.customStyles}
          customText={state.Mail && style.customText}
          onPress={toggleMail}
          leftImage={state.Mail && images.mail}
          text="Mail ID"
        />
      </View>

      {/** Login Page */}
      {state.Mobile && <Mobile />}
      {state.Mail && <MailComponant />}

      {/** Sign Up */}
      <View style={style.signUpPageContainer}>
        <ImageBackground style={style.signUpPageImage} source={images.bg}>
          <Texts text="New to DigiGrain?" />
          <TouchableOpacity>
            <Text style={[style.text, style.signUpToc]}>Sign Up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
