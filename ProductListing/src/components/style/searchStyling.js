import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    marginTop: hp('3%'),
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  centeredView: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: hp('10%'),
    width: wp('80%'),
    fontSize: hp('2.5%'),
  },
  crossIcon: {
    height: hp('5%'),
    width: wp('20%'),
    alignSelf: 'flex-end',
  },
  separator: {
    borderWidth: 0.8,
    backgroundColor: '#000000',
    width: wp(95),
    borderRadius: 50,
  },
  sectionListContainer: {
    marginTop: hp('2%'),
  },
  listItem: {
    fontSize: hp('3.5%'),
    marginTop: '2%',
    marginBottom: '2%',
    width: wp('80%'),
  },
  sectionHeader: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sectionHeaderText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});
