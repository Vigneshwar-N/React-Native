import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {DashBoardContext} from './Main';

export default function SideBar() {
  const user = useContext(DashBoardContext);
  return (
    <View>
      <Text>This is SideBar</Text>
      <Text>{`im ${user.name} ${user.lname}`}</Text>
    </View>
  );
}
