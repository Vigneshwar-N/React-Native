import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../constants/fonts/font';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import LeftArrow from '../../assets/images/svgs/Home/Left';
import RightArrow from '../../assets/images/svgs/Home/Right';
import {ThemeContext} from '../Hooks/UseContext';
import {myColor} from '../utility/Colors/myColors';
import CustomText from './Text';
import UseEffect from '../Hooks/UseEffect';
import {FlatList} from 'react-native-gesture-handler';

export default function Header2() {
  const Storage = UseEffect();
  const {darkTheme} = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowPress = () => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : Storage.length - 1,
    );
  };

  const handleRightArrowPress = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < Storage.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Storage}
        scrollEnabled={false}
        extraData={currentIndex}
        renderItem={({item, index}) =>
          index === currentIndex && (
            <ImageBackground
              style={{
                // backgroundColor: darkTheme ? '#aca' : '#acac',
                height: getResponsiveHeight(195),
                position: 'static',
              }}
              source={{uri: item?.thumbnail}}>
              <View style={styles.textContainer}>
                <View
                  style={[
                    styles.textWrapper,
                    {
                      backgroundColor: darkTheme
                        ? myColor.black
                        : myColor.white,
                    },
                  ]}>
                  <CustomText
                    style={[
                      styles.text,
                      {color: darkTheme ? myColor.white : myColor.black},
                    ]}
                    text="All "
                  />
                </View>
                <View
                  style={[
                    styles.textWrapper,
                    {
                      backgroundColor: darkTheme
                        ? myColor.black
                        : myColor.white,
                    },
                  ]}>
                  <CustomText
                    style={[
                      styles.text,
                      {color: darkTheme ? myColor.white : myColor.black},
                    ]}
                    text="Essentials "
                  />
                </View>
                <View
                  style={[
                    styles.textWrapper,
                    {
                      backgroundColor: darkTheme
                        ? myColor.black
                        : myColor.white,
                    },
                  ]}>
                  <CustomText
                    style={[
                      styles.text,
                      {color: darkTheme ? myColor.white : myColor.black},
                    ]}
                    text="Included"
                  />
                </View>
              </View>
              <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={handleLeftArrowPress}>
                  <LeftArrow
                    height={getResponsiveHeight(51)}
                    width={getResponsiveWidth(51)}
                    color1={darkTheme ? myColor.lightGray : myColor.black}
                    color2={darkTheme ? myColor.black : myColor.white}
                  />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity onPress={handleRightArrowPress}>
                  <RightArrow
                    height={getResponsiveHeight(51)}
                    width={getResponsiveWidth(51)}
                    color1={darkTheme ? myColor.lightGray : myColor.black}
                    color2={darkTheme ? myColor.black : myColor.white}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          )
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(4),
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'flex-end',
    paddingRight: '7%',
  },
  textWrapper: {
    alignSelf: 'flex-start',
  },
  text: {
    textAlign: 'left',
    fontFamily: fonts.PlayfairDisplayBold,
    fontSize: getResponsiveFontSize(20),
  },
  arrowContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingRight: '4.5%',
    top: 0,
  },
  space: {
    width: wp(0.2),
  },
});
