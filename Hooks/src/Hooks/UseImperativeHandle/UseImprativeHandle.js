import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const UseImprativeHandle = (props, ref) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  //
  function reset() {
    setCount(0);
  }

  useImperativeHandle(ref, () => ({
    increment,
    reset,
  }));
  console.log(useImperativeHandle);

  return (
    <View>
      <TouchableOpacity onPress={increment}>
        <Text>Count: {count}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default forwardRef(UseImprativeHandle);
