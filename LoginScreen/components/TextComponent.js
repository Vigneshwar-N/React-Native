import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class Texts extends Component {
  render() {
    const {text, customText} = this.props;
    const textStylinig = [styles.txt, customText];
    return (
      <View>
        <Text style={textStylinig}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    color: '#000000',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});
