import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    height: hp(5),
  },
  contentContainer: {
    height: hp(85),
  },
  footer: {
    height: hp('10%'),
    width: wp('100%'),
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchButton: {
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  headerRed: {
    color: '#bf132a',
  },
  headerBlack: {
    color: '#000000',
  },
});
