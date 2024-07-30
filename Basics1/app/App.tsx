import {Text, View} from 'react-native';
import React from 'react';

import Flatlisst from './Flatlist';
import {styles} from '../components/styling';

export default function App() {
  return (
    //--------------------------------------------------------------------------------------View
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Contact</Text>
      </View>

      <Flatlisst />
    </View>
  );
}
