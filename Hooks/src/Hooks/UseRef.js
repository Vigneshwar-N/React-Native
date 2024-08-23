import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export default function UseRef() {
  const [name, setname] = useState('Enter name');
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <View>
      <TextInput
        value={name}
        onChangeText={text => {
          setname(text);
        }}
      />
      <Text>My name is {name}</Text>
      <Text>This has been rendred "{count.current}" times</Text>
    </View>
  );
}
