import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// import { Image } from 'react-native-svg';

export default function Button({
  onPress,
  text,
  textStyle,
  buttonStyle,
  children,
  onLongPress,
  text2,
  textChild,
  text2Style,
  image,
  imageStlye,
}) {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      onLongPress={onLongPress}>
      {text && <Text style={textStyle}>{text}</Text>}
      {image && <Image style={imageStlye} source={image} />}
      {children}
      {textChild}
      {text2 && <Text style={text2Style}>{text2}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
