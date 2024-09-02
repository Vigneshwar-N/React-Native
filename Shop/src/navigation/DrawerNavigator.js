import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
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
import MenuImage from '../../assets/images/svgs/Home/Menu';
import ProfileImage from '../../assets/images/svgs/Home/Profile';
import {myColor} from '../utility/Colors/myColors';
import CustomText from '../components/Text';

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
            color={darkTheme ? myColor.white : myColor.black}
          />
        ),

        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuImage
              height={getResponsiveHeight(14)}
              width={getResponsiveWidth(24)}
              color={darkTheme ? myColor.white : myColor.black}
            />
          </TouchableOpacity>
        ),

        headerTitle: () => (
          <View>
            <CustomText
              style={[
                styles.headerTitle,
                {color: darkTheme ? myColor.white : myColor.black},
              ]}
              text={'ShopGrid'}
            />
          </View>
        ),

        headerStyle: [
          styles.headerStyle,
          {backgroundColor: darkTheme ? myColor.black : myColor.white},
        ],

        headerLeftContainerStyle: styles.headerLeftContainer,
        headerRightContainerStyle: styles.headerRightContainer,
        headerTitleContainerStyle: styles.headerTitleContainer,

        // drawerType: ""
        drawerActiveBackgroundColor: darkTheme
          ? myColor.darkGray
          : myColor.lightGray,
        drawerActiveTintColor: darkTheme ? myColor.white : myColor.black,
        drawerLabelStyle: styles.drawerLabel,
        drawerContentContainerStyle: [
          styles.drawerContent,
          {backgroundColor: darkTheme ? myColor.black : myColor.white},
        ],
      })}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: getResponsiveFontSize(22),
    marginBottom: 3.2,
    paddingLeft: '4%',
    fontFamily: fonts.PlayfairDisplayBold,
  },
  headerStyle: {
    height: getResponsiveHeight(88),
  },
  headerLeftContainer: {
    paddingTop: heightPercentageToDP(3),
    paddingLeft: '4%',
  },
  headerRightContainer: {
    paddingTop: heightPercentageToDP(3),
    paddingRight: '4%',
  },
  headerTitleContainer: {
    paddingTop: heightPercentageToDP(3),
  },
  drawerLabel: {
    fontFamily: fonts.WorkSansMedium,
    fontSize: getResponsiveFontSize(18),
  },
  drawerContent: {
    flex: 1,
  },
});
