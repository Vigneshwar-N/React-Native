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
