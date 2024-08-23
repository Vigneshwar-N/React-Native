import {View, Text} from 'react-native';
import React, {useMemo, useState} from 'react';

export default function UseMemo() {
  const [num, setnumber] = useState(0);
  const [dark, setdark] = useState(true);
  const doublenumber = useMemo(() => {
    return doublenumberFunction(num);
  }, [num]);

  function doublenumberFunction(num) {
    console.log(`calling the slow function`);

    for (let i = 0; i < 10; i++) {}
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
      <Text style={{color: 'red'}}>{doublenumber}</Text>
    </View>
  );
}
