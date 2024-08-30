import {TouchableOpacity, ImageBackground, View} from 'react-native';
import React from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '../utility/responsive';
import HomeImage from '../assets/images/svgs/Home/Home';
import SearchIcon from '../assets/images/svgs/Home/Search';
import BlackHeartIcon from '../assets/images/svgs/Home/BlackHeart';
import Cart from '../assets/images/svgs/Home/CartImage';
const image = require('../assets/images/Transparent.png');

export default function Footer({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: getResponsiveHeight(65),
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        marginTop: getResponsiveHeight(0.4),
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <HomeImage
          width={getResponsiveWidth(18)}
          height={getResponsiveHeight(20)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <SearchIcon
          height={getResponsiveHeight(20)}
          width={getResponsiveWidth(20)}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <BlackHeartIcon
          height={getResponsiveHeight(16.5)}
          width={getResponsiveWidth(21)}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Cart
          height={getResponsiveWidth(25.71)}
          width={getResponsiveHeight(20)}
        />
      </TouchableOpacity>
    </View>
  );
}
