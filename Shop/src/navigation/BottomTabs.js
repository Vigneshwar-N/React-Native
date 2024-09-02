import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import HomeImage from '../../assets/images/svgs/Home/Home';
import SearchIcon from '../../assets/images/svgs/Home/Search';
import {View, StyleSheet} from 'react-native';
import {StackNavigator} from './NativeStack';
import {getResponsiveHeight, getResponsiveWidth} from '../utility/responsive';
import {myColor} from '../utility/Colors/myColors';
import {ThemeContext} from '../Hooks/UseContext';

const Bottom = createBottomTabNavigator();

export function BottomNavigator() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <Bottom.Navigator
        initialRouteName="WishList"
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            const iconProps = {
              height: getResponsiveHeight(20),
              width: getResponsiveWidth(18),
              color: color,
            };

            switch (route.name) {
              case 'Stack':
                return <HomeImage {...iconProps} />;
              case 'Search':
                return <SearchIcon {...iconProps} />;
              default:
                return null;
            }
          },
          tabBarActiveTintColor: darkTheme ? myColor.white : myColor.black,
          tabBarInactiveTintColor: darkTheme
            ? myColor.darkGray
            : myColor.lightGray,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBarStyle,
            {backgroundColor: darkTheme ? myColor.black : myColor.white},
          ],
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}>
        <Bottom.Screen name="Stack" component={StackNavigator} />
        {/* <Bottom.Screen name="Home2" component={DrawerNavigator} /> */}
        <Bottom.Screen name="Search" component={Search} />
      </Bottom.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    height: getResponsiveHeight(65),
    marginLeft: '4%',
    marginRight: '4%',
    borderRadius: 100,
  },
});
