import {StyleSheet, Text, View} from 'react-native';
import React, {useDebugValue, useEffect, useState} from 'react';

export default function UseDebugValue() {
  function CustomHook() {
    const [fname, setfname] = useState('');
    useEffect(() => {
      console.log(fname);
    });
    return fname;
  }

  const displayname = CustomHook();
  useDebugValue(displayname ?? 'loading');
  return (
    <View>
      <Text>UseDebugValue</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
