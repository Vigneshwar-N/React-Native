import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  headerContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  headerText: {
    alignSelf: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
});
