import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import WishList from '../screens/WishList';
import CartScreen from '../screens/CartScreen';
import HomeImage from '../assets/images/svgs/Home/Home';
import SearchIcon from '../assets/images/svgs/Home/Search';
import BlackHeartIcon from '../assets/images/svgs/Home/BlackHeart';
import Cart from '../assets/images/svgs/Home/CartImage';
import {ThemeContext} from '../Hooks/UseContext';
import {View} from 'react-native';
import {StackNavigator} from './NativeStack';
import {getResponsiveHeight, getResponsiveWidth} from '../utility/responsive';

const Bottom = createBottomTabNavigator();

export function BottomNavigator() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <View style={{flex: 1, backgroundColor: darkTheme ? '#000000' : '#ffffff'}}>
      <Bottom.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            if (route.name === 'Stack') {
              return (
                <HomeImage
                  height={getResponsiveHeight(20)}
                  width={getResponsiveWidth(18)}
                  color={color}
                />
              );
            } else if (route.name === 'Search') {
              return (
                <SearchIcon
                  height={getResponsiveHeight(20)}
                  width={getResponsiveWidth(18)}
                  color={color}
                />
              );
            } else if (route.name === 'WishList') {
              return (
                <BlackHeartIcon
                  height={getResponsiveHeight(20)}
                  width={getResponsiveWidth(18)}
                  color={color}
                />
              );
            } else if (route.name === 'Description') {
              return (
                <Cart
                  height={getResponsiveHeight(20)}
                  width={getResponsiveWidth(18)}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: darkTheme ? '#ffffff' : '#000000',
          tabBarInactiveTintColor: darkTheme ? '#1c1c1c' : '#f1f1f1',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: getResponsiveHeight(65),
            backgroundColor: darkTheme ? '#000000' : '#FFFFFF',
            marginLeft: '4%',
            marginRight: '4%',
            borderRadius: 100,
          },
          headerShown: false,
        })}>
        <Bottom.Screen name="Stack" component={StackNavigator} />
        <Bottom.Screen name="Search" component={Search} />
        <Bottom.Screen name="WishList" component={WishList} />
        <Bottom.Screen name="Description" component={CartScreen} />
      </Bottom.Navigator>
    </View>
  );
}
