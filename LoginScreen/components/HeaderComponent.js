import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const {headerText, headerImage} = this.props;

    return (
      <View>
        {headerImage && <Image source={headerImage} />}
        {<Text>{headerText}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
