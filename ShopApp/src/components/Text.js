import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function CustomText({style, text}) {
  return (
    <View>
      <Text style={style} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
