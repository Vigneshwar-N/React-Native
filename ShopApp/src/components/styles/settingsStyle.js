import {StyleSheet} from 'react-native';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../utility/responsive';
import {fonts} from '../../constants/fonts/font';
import {myColor} from '../../utility/Colors/myColors';
export const lightThemeStyles = StyleSheet.create({
  button: {
    backgroundColor: myColor.lightGray,
  },
  backgroundColor: {
    backgroundColor: myColor.white,
  },
  text: {
    color: myColor.black,
  },
});

export const darkThemeStyles = StyleSheet.create({
  button: {
    backgroundColor: myColor.darkGray,
  },
  backgroundColor: {
    backgroundColor: myColor.black,
  },
  text: {
    color: '#FFFFFF',
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: getResponsiveWidth(5),
  },
  headerText: {
    fontSize: getResponsiveFontSize(24),
    fontFamily: fonts.PlayfairDisplayBold,
    marginBottom: getResponsiveHeight(20),
  },
  button: {
    height: getResponsiveHeight(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getResponsiveWidth(10),
    marginBottom: getResponsiveHeight(20),
  },
  buttonText: {
    fontSize: getResponsiveFontSize(18),
    fontFamily: fonts.WorkSansRegular,
  },
});