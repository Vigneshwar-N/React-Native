import {View, Image} from 'react-native';
import React from 'react';
import {SelectedItemContext} from '../Hooks/UseContext';
import TextComponent from './text';
import {styles} from './style/DetailStyling';

const Details = () => {
  const {selectedItem} = React.useContext(SelectedItemContext);

  return (
    <View style={styles.container}>
      <Image source={{uri: selectedItem?.image}} style={styles.image} />
      <TextComponent style={styles.title} text={selectedItem?.title} />
      <TextComponent
        style={styles.description}
        text={selectedItem?.description}
      />
    </View>
  );
};

export default Details;
