import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';

export default function UseCallback() {
  const [num, setnumber] = useState(0);
  const [dark, setdark] = useState(true);
  const doublenumber = useCallback(() => {
    return doublenumberFunction(num);
  }, [num]);

  function doublenumberFunction(num) {
    console.log(`This is being rendered`);

    return num * 2;
  }
  return (
    <View style={{marginLeft: 20}}>
      <Text style={{fontSize: 50}} onPress={() => setnumber(num + 1)}>
        {num}
      </Text>
      <Text
        onPress={() => setdark(!dark)}
        style={{
          backgroundColor: dark === true ? '#000000' : '#FFFFFF',
          fontSize: 40,
          color: dark === true ? '#FFFFFF' : '#000000',
        }}>
        Change Theme
      </Text>
      <Text>{doublenumber()}</Text>
    </View>
  );
}
