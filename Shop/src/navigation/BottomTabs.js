import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import WishList from '../screens/WishList';
import CartScreen from '../screens/CartScreen';
import HomeImage from '../assets/images/svgs/Home/Home';
import SearchIcon from '../assets/images/svgs/Home/Search';
import BlackHeartIcon from '../assets/images/svgs/Home/BlackHeart';
import Cart from '../assets/images/svgs/Home/CartImage';
import {getResponsiveHeight, getResponsiveWidth} from '../utility/responsive';
import {DrawerNavigator} from './DrawerNavigator';
import {ThemeContext} from '../Hooks/UseContext';

const Bottom = createBottomTabNavigator();

export function BottomNavigator() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <Bottom.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Drawer') {
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
        tabBarActiveTintColor: darkTheme ? '#FFFFFF' : '#000000',
        tabBarInactiveTintColor: darkTheme ? '#FFFFFF' : '#000000',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: getResponsiveHeight(65),
          backgroundColor: darkTheme ? '#000000' : '#FFFFFF',
          paddingLeft: '4%',
          paddingRight: '4%',
        },
      })}>
      <Bottom.Screen name="Drawer" component={DrawerNavigator} />
      <Bottom.Screen name="Search" component={Search} />
      <Bottom.Screen name="WishList" component={WishList} />
      <Bottom.Screen name="Description" component={CartScreen} />
    </Bottom.Navigator>
  );
}
