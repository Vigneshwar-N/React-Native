// Store data and access without passing through props
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import DashBoard from './DashBoard';

import {createContext} from 'react';
export const DashBoardContext = createContext(undefined);

export default function Main() {
  const [user] = useState({
    name: 'vignesh',
    lname: 'N',
  });
  console.log(user);

  return (
    <View>
      <Text>Main</Text>
      <DashBoardContext.Provider value={user}>
        <DashBoard />
      </DashBoardContext.Provider>
      {/* <DashBoard Duser={user} /> without useContext*/}
    </View>
  );
}
