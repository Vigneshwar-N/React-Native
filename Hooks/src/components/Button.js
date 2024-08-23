import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({text}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#000000',
          margin: 1,
        }}>
        <Text style={{color: '#FFFFFF', alignSelf: 'center'}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
