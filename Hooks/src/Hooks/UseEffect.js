import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function UseEffect() {
  const [resource, setresource] = useState('Post');
  //
  // useEffect first renders when it mounted , after that that it only render when the value inside the array changes
  //
  useEffect(() => {
    console.log(`render`);

    return () => {
      console.log('This is being Cleaned');
    }; //This return code is a clean up code , except for the time mounted this return code is called first to clean up the previous code, this also runs when the component is unmounted if the hook is called
  }, [resource]);
  return (
    <View>
      <Button title="Post " onPress={() => setresource('Post')} />
      <Button title="User" onPress={() => setresource('User')} />
      <Button title="Comments " onPress={() => setresource('Comments')} />
      <Text>{resource}</Text>
    </View>
  );
}
