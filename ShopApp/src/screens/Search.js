import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Cross from '../../assets/images/svgs/Search/Cross';
import LightCross from '../../assets/images/svgs/Search/LightCross';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';
import {SelectedItemContext} from '../apis/PassData';
import {FlatList} from 'react-native-gesture-handler';
import {data2} from '../constants/data2';
import {useSelector} from 'react-redux';
export default function Search({navigation}) {
  const darkTheme = useSelector(state => state.theme.darkTheme);

  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const {selectedItem, setSelectedItem} = useContext(SelectedItemContext);
  const Storage = data2[0].products;
  // const Storage = data2[0].products;
  const data = useState(null);

  useEffect(() => {
    if (!input) {
      setFilteredData(Storage);
    } else {
      setFilteredData(
        Storage.filter(item =>
          item.title.toLowerCase().includes(input.toLowerCase()),
        ),
      );
    }
  }, [input, Storage]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <View style={styles.crossContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Stack');
          }}>
          <Cross
            height={getResponsiveHeight(38)}
            width={getResponsiveWidth(38)}
            color={darkTheme ? myColor.white : myColor.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <View
          style={[
            styles.searchBar,
            {borderBottomColor: darkTheme ? myColor.white : myColor.black},
          ]}>
          <TextInput
            style={[
              styles.textInput,
              {
                color: darkTheme ? myColor.white : myColor.black,
              },
            ]}
            placeholderTextColor={darkTheme ? myColor.white : myColor.black}
            numberOfLines={1}
            placeholder="Enter here"
            value={input}
            onChangeText={text => setInput(text)}
          />
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setInput('')}>
            <LightCross
              height={getResponsiveHeight(13)}
              width={getResponsiveWidth(13)}
              color={darkTheme ? myColor.white : myColor.black}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={!filteredData ? data : filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedItem(item);
                  navigation.navigate('ProductDescription');
                }}
                style={styles.scrollView}>
                <Text
                  style={[
                    styles.resultText,
                    {color: darkTheme ? myColor.white : myColor.black},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5),
    paddingRight: '4%',
    paddingLeft: '4%',
    flex: 1,
  },
  crossContainer: {
    alignItems: 'flex-end',
  },
  searchBarContainer: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: getResponsiveHeight(1),
  },
  textInput: {
    fontSize: getResponsiveFontSize(21),
    lineHeight: getResponsiveHeight(26),
    fontFamily: fonts.WorkSansRegular,
    width: wp(82),
  },
  clearButton: {
    paddingRight: '5%',
    height: getResponsiveHeight(26),
  },
  resultText: {
    fontSize: getResponsiveFontSize(22),
    fontFamily: fonts.WorkSansRegular,
  },
  scrollView: {
    paddingTop: hp(4),
    paddingLeft: wp(0.5),
  },
});
