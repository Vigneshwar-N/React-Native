import {ScrollView, View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Header2 from '../components/Header2';
import List from '../components/List';
import {ThemeContext} from '../Hooks/UseContext';
import {myColor} from '../utility/Colors/myColors';

export default function Home({navigation}) {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header2 />
        <List navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '4%',
    paddingRight: '4%',
  },
});
