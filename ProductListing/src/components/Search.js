import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SelectedItemContext} from '../Hooks/UseContext';
import {HomeImage} from '../constants/images/HomeImg';
import UseEffect from '../Hooks/UseEffect';

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
      // Convert filtered data to sections
      const sections = newData.reduce((acc, item) => {
        const firstLetter = item.title.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      }, {});

      // Convert object to array of sections
      const sectionListData = Object.keys(sections).map(key => ({
        title: key,
        data: sections[key],
      }));

      setFilteredData(sectionListData);
    } else {
      // Handle default data without search
      const defaultData = data.slice(0, 7);
      const sections = defaultData.reduce((acc, item) => {
        const firstLetter = item.title.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(item);
        return acc;
      }, {});

      // Convert object to array of sections
      const sectionListData = Object.keys(sections).map(key => ({
        title: key,
        data: sections[key],
      }));

      setFilteredData(sectionListData);
    }
  }, [search, data]);

  return (
    <KeyboardAvoidingView
      style={{marginTop: hp('3%'), paddingLeft: '2%', paddingRight: '2%'}}
      behavior="padding">
      <View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={text => setSearch(text)}
              value={search}
              style={{
                height: hp('10%'),
                width: wp('80%'),
                fontSize: hp('2.5%'),
              }}
              placeholder="Enter here"
            />
            <TouchableOpacity onPress={() => setSearch('')}>
              <Image
                resizeMode="contain"
                style={{
                  height: hp('5%'),
                  width: wp('20%'),
                  alignSelf: 'flex-end',
                }}
                source={HomeImage.cross}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              backgroundColor: '#000000',
              width: wp(95),
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{marginTop: hp('2%')}}>
          <SectionList
            sections={filteredData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onPress(item)}>
                <Text
                  style={{
                    fontSize: hp('3.5%'),
                    marginTop: '2%',
                    marginBottom: '2%',
                    width: wp('80%'),
                  }}
                  numberOfLines={1}>
                  {item?.title || 'No Name Available'}
                </Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title}}) => (
              <View
                style={{
                  backgroundColor: '#f4f4f4',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}>
                <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>
                  {title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
