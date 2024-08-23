import {View, Text} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';

export default function UseLayout() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  function increment() {
    setCount(prv => prv + 1);
  }
  return (
    <View>
      <Text onPress={increment}>{count}</Text>
    </View>
  );
}
