import {View, Text, useAnimatedValue, Button, TextInput} from 'react-native';
import React, {useState, memo, useCallback} from 'react';

const UseState = () => {
  const initialValue = 0;
  let inivalue = 0;
  const [count, setcount] = useState(initialValue);
  const [name, setname] = useState({Fname: 'Vignesh', Lname: 'war'});
  const [storage, setStorage] = useState([]);

  const Increment = useCallback(() => {
    console.log(`Render times ${(inivalue += 1)}`);

    setcount(prev => prev + 1);
  });
  const Decrement = useCallback(() => {
    setcount(prev => prev - 1);
  });
  const Reset = useCallback(() => {
    setcount(0);
  });
  const firstName = useCallback(text => {
    setname({...name, Fname: text});
  });
  const Lastname = useCallback(text => {
    setname({...name, Lname: text});
  });
  const Storage = useCallback(() => {
    setStorage([...storage, {id: storage.length + 1, name: ''}]);
  });
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <Button title="increment" onPress={Increment} />
      <Button title="Decrement" onPress={Decrement} />
      <Button title="Reset " onPress={Reset} />
      <TextInput
        value={name.Fname}
        placeholder="Fname"
        onChangeText={e => firstName(e)}
      />
      <TextInput
        value={name.Lname}
        placeholder="Lname"
        onChangeText={e => Lastname(e)}
      />

      <Button title="add number" onPress={() => Storage} />
      {storage.map(items => (
        <View>
          <Text key={items.id}>{items.id}</Text>
        </View>
      ))}
    </View>
  );
};
export default UseState;
