import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import DataContainer from '../apis/DataContainer';
import {UserContextProvider} from '../Hooks/User';
import SignUp from '../screens/SignUp';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

function RootStackContainer() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Data" component={DataContainer} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function RootStack() {
  return (
    <UserContextProvider>
      <RootStackContainer />
    </UserContextProvider>
  );
}
