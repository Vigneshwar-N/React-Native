import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';

import {SelectedItemContext} from '../Hooks/UseContext';
import {styles} from './DetailStyling';

const Details = () => {
  const {selectedItem} = React.useContext(SelectedItemContext);

  return (
    <View style={styles.container}>
      <Image source={{uri: selectedItem?.image}} style={styles.image} />
      <Text style={styles.title}>{selectedItem?.title}</Text>
      <Text style={styles.description}>{selectedItem?.description}</Text>
    </View>
  );
};

export default Details;
