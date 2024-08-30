import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import HeartImage from '../assets/images/svgs/Home/Heart';
import UseEffect from '../Hooks/UseEffect';
import {ThemeContext} from '../Hooks/UseContext';

export default function List({navigation}) {
  const Storage = UseEffect();
  const {darkTheme} = useContext(ThemeContext);

  const lightThemeStyles = StyleSheet.create({
    button: {
      backgroundColor: '#F1F1F1',
    },
    backgroundColor: {
      backgroundColor: '#FFFFFF',
    },
    text: {
      color: '#000000',
    },
  });

  const darkThemeStyles = StyleSheet.create({
    button: {
      backgroundColor: '#1C1C1C',
    },
    backgroundColor: {
      backgroundColor: '#000000',
    },
    text: {
      color: '#FFFFFF',
    },
  });

  const styles = StyleSheet.create({
    container: {
      marginTop: hp(7),
      backgroundColor: !darkTheme ? '#FFFFFF' : '#000000',
    },
    listContentContainer: {
      alignItems: 'center',
    },
    itemContainer: {
      alignItems: 'center',
      marginBottom: getResponsiveHeight(30),
    },
    itemContent: {
      height: getResponsiveHeight(210),
      width: getResponsiveWidth(170),
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: darkTheme ? '#1c1c1c' : '#f1f1f1',
    },
    imageContainer: {
      height: getResponsiveHeight(111),
      width: getResponsiveWidth(111),
      position: 'static',
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    heartIconContainer: {
      position: 'absolute',
      alignSelf: 'flex-end',
    },
    title: {
      fontSize: getResponsiveFontSize(18),
      fontFamily: fonts.PlayfairDisplayBold,
      color: !darkTheme ? '#000000' : '#FFFFFF',
      paddingRight: '0.1%',
      paddingLeft: '0.1%',
    },
    shopNowContainer: {
      borderBottomWidth: getResponsiveWidth(1.8),
      alignItems: 'center',
      backgroundColor: darkTheme ? '#1c1c1c' : '#f1f1f1',
      borderColor: !darkTheme ? '#000000' : '#FFFFFF',
    },
    shopNowText: {
      fontSize: getResponsiveFontSize(14),
      fontFamily: fonts.WorkSansMedium,
      color: !darkTheme ? '#000000' : '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={Storage.slice(0, 4)}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              {
                paddingLeft: index % 2 !== 0 ? '1%' : '0%',
                paddingRight: index % 2 !== 0 ? '0%' : '1%',
              },
            ]}>
            <View style={styles.itemContent}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item?.image}} />
              </View>
              <View style={styles.heartIconContainer}>
                <TouchableOpacity>
                  <HeartImage
                    height={getResponsiveHeight(25.57)}
                    width={getResponsiveWidth(31)}
                    color={!darkTheme ? '#000000' : '#FFFFFF'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.title} numberOfLines={1}>
                {item?.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductDescription');
                }}>
                <View style={styles.shopNowContainer}>
                  <Text style={styles.shopNowText}>SHOP NOW</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
