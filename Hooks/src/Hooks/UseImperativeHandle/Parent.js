import React, {useRef} from 'react';
import {View, Text, Button} from 'react-native';
import UseImprativeHandle from './UseImprativeHandle';

export default function Parent() {
  const handleRef = useRef();
  console.log(handleRef);

  return (
    <View>
      <Text>Parent</Text>
      <UseImprativeHandle ref={handleRef} />
      {console.log(handleRef.current.increment)}

      <Button
        title="Reset Counter"
        onPress={() => {
          handleRef.current?.reset();
        }}
      />
      <Button
        title="Increment Counter"
        onPress={() => {
          handleRef.current?.increment();
        }}
      />
    </View>
  );
}
