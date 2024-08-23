import {StyleSheet, Text, useAnimatedValue, View} from 'react-native';
import React from 'react';
import SideBar from './SideBar';

export default function DashBoard(
  {
    /**user**/
  },
) {
  return (
    <View>
      <Text>This is DashBoard</Text>
      <SideBar />
    </View>
  );
}

const styles = StyleSheet.create({});
