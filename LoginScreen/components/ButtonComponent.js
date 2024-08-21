import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default class Button extends Component {
  render() {
    const {text, leftImage, onPress, customStyles, customImage, customText} =
      this.props;
    const containerStyles = [styles.buttonContainer, customStyles];
    const textStylinig = [styles.text, customText];
    const imageStyling = [styles.image, customImage];
    return (
      <TouchableOpacity style={containerStyles} onPress={onPress}>
        {leftImage && <Image style={imageStyling} source={leftImage} />}
        <View style={{width: wp('2%')}} />
        {text && <Text style={textStylinig}>{text}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    width: wp('44%'),
  },
  image: {
    height: hp('2.5%'),
    width: wp('5.5%'),
  },
  text: {
    fontSize: hp('2.3%'),
    color: '#000000',
    fontWeight: 'bold',
  },
});
