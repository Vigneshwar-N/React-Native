import {StyleSheet} from 'react-native';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../utility/responsive';
import {fonts} from '../../constants/fonts/font';

export const lightThemeStyles = StyleSheet.create({
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

export const darkThemeStyles = StyleSheet.create({
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
