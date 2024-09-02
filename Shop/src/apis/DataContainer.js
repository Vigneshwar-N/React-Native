import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectedItemProvider} from './PassData';
import {DrawerNavigator} from '../navigation/DrawerNavigator';

export default function DataContainer() {
  return (
    <SelectedItemProvider>
      <DrawerNavigator />
    </SelectedItemProvider>
  );
}

const styles = StyleSheet.create({});
