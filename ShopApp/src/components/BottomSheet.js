import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getResponsiveHeight} from '../utility/responsive';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const BottomSheet = () => {
  return (
    <View
      style={{
        height: getResponsiveHeight(512),
        // marginLeft: '4%',
        // marginRight: '4%',
        backgroundColor: '#000000',
        width: '100%',
      }}>
      <Text>BottomSheet</Text>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
