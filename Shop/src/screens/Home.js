import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
//components
import Header2 from '../components/Header2';
import List from '../components/List';
import Header from '../components/Header';
import {ThemeContext} from '../Hooks/UseContext';
//Main
export default function Home({navigation}) {
  const {darkTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: !darkTheme ? '#FFFFFF' : '#000000',
        paddingLeft: '4%',
        paddingRight: '4%',
      }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header2 />
        <List navigation={navigation} />
      </ScrollView>
    </View>
  );
}
