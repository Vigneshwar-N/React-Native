import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  SectionList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SelectedItemContext} from '../Hooks/UseContext';
import {HomeImage} from '../constants/images/HomeImg';
import UseEffect from '../Hooks/UseEffect';
import Button from './Button';
import TextComponent from './text';
import {styles} from './style/searchStyling';

export default function Search({onPress}) {
  const {selectedItem} = React.useContext(SelectedItemContext);
  const data = UseEffect();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search) {
      const newData = data.filter(
        item =>
          item?.title &&
          item?.title.toLowerCase().includes(search.toLowerCase()),
      );
      const sections = newData.reduce((acc, item) => {
        const firstLetter = item.title.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      }, {});

      const sectionListData = Object.keys(sections).map(key => ({
        title: key,
        data: sections[key],
      }));

      setFilteredData(sectionListData);
    } else {
      const defaultData = data.slice(0, 7);
      const sections = defaultData.reduce((acc, item) => {
        const firstLetter = item.title.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      }, {});

      const sectionListData = Object.keys(sections).map(key => ({
        title: key,
        data: sections[key],
      }));

      setFilteredData(sectionListData);
    }
  }, [search, data]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding">
      <View>
        <View style={styles.centeredView}>
          <View style={styles.searchContainer}>
            <TextInput
              onChangeText={text => setSearch(text)}
              value={search}
              style={styles.textInput}
              placeholder="Enter here"
            />
            <Button
              onPress={() => setSearch('')}
              children={
                <Image
                  resizeMode="contain"
                  style={styles.crossIcon}
                  source={HomeImage.cross}
                />
              }
            />
          </View>
          <View style={styles.separator} />
        </View>
        <View style={styles.sectionListContainer}>
          <SectionList
            sections={filteredData}
            renderItem={({item}) => (
              <Button
                textChild={
                  <Text style={styles.listItem} numberOfLines={1}>
                    {item?.title || 'No Name Available'}
                  </Text>
                }
                onPress={() => onPress(item)}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <View style={styles.sectionHeader}>
                <TextComponent text={title} style={styles.sectionHeaderText} />
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
