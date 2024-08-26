import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function TextComponent({text, style}) {
  return (
    <Text style={(styles.default, style)}>
      {!text ? 'this is default text ' : text}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    color: '#000000',
  },
});
