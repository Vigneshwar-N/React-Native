import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: wp('3%'),
  },
  image: {
    height: hp('6.5%'),
    width: wp('13%'),
    borderRadius: 100,
  },
  textContainer: {
    flexDirection: 'column',
  },
  itemName: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'black',
  },
  itemNumber: {
    fontSize: hp('2%'),
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 10,
    marginBottom: 10,
  },
  addContainer: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonWrapper: {
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#009cfc',
    width: wp('100%'),
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  inputWrapper: {
    width: wp('100%'),
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: '2%',
    marginBottom: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  textInput: {
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  saveButton: {
    marginTop: '2%',
    marginBottom: '2%',
    alignItems: 'center',
    backgroundColor: '#009cfc',
    borderRadius: 10,
  },
  saveButtonText: {
    paddingTop: '2%',
    paddingBottom: '2%',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
});
