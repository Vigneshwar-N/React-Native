import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import UseEffect from '../Hooks/UseEffect';
import {styles} from './ListStyling ';
styles;
const List = ({onPress}) => {
  const storage = UseEffect();

  return (
    <View>
      <FlatList
        data={storage}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(item)}>
            <Image style={styles.image} source={{uri: item?.image}} />
            <Text style={styles.text}>{item?.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default memo(List); //memo is used to prevent re-render of this component when ths state changes in app
