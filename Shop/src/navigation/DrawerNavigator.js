import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity} from 'react-native';
import Settings from '../screens/Settings';
import {BottomNavigator} from './BottomTabs';
import {
  getResponsiveHeight,
  getResponsiveFontSize,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import {ThemeContext} from '../Hooks/UseContext';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import MenuImage from '../assets/images/svgs/Home/Menu';
import ProfileImage from '../assets/images/svgs/Home/Profile';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerRight: () => (
          <ProfileImage
            height={getResponsiveHeight(32)}
            width={getResponsiveWidth(32)}
            color={darkTheme ? '#FFFFFF' : '#000000'}
          />
        ),

        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuImage
              height={getResponsiveHeight(14)}
              width={getResponsiveWidth(24)}
              color={darkTheme ? '#FFFFFF' : '#000000'}
            />
          </TouchableOpacity>
        ),

        headerTitle: () => (
          <View>
            <Text
              style={{
                fontSize: getResponsiveFontSize(22),
                marginBottom: 3.2,
                paddingLeft: '4%',
                fontFamily: fonts.PlayfairDisplayBold,
                color: !darkTheme ? '#000000' : '#FFFFFF',
              }}>
              ShopGrid
            </Text>
          </View>
        ),

        headerStyle: {
          height: getResponsiveHeight(88),
          backgroundColor: !darkTheme ? '#ffffff' : '#000000',
        },

        headerLeftContainerStyle: {
          paddingTop: heightPercentageToDP(3),
          paddingLeft: '4%',
        },

        headerRightContainerStyle: {
          paddingTop: heightPercentageToDP(3),
          paddingRight: '4%',
        },

        headerTitleContainerStyle: {
          paddingTop: heightPercentageToDP(3),
        },
        drawerType: 'slide',
        // drawerPosition: 'right',
        drawerActiveBackgroundColor: darkTheme ? '#1c1c1c' : '#f1f1f1',
        drawerActiveTintColor: darkTheme ? '#ffffff' : '#000000',
        drawerLabelStyle: {
          fontFamily: fonts.WorkSansMedium,
          fontSize: getResponsiveFontSize(18),
        },
        drawerContentContainerStyle: {
          backgroundColor: darkTheme ? '#000000' : '#FFFFFF',
          flex: 1,
        },
      })}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
