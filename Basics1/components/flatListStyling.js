import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    height: hp('7%'),
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: hp('2.5%'),
  },
  add: {
    flexDirection: 'row',
  },
  headerImage: {
    height: hp('3%'),
    width: hp('3%'),
    marginHorizontal: 5,
  },
  addContainer: {
    height: hp('20%'),
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginHorizontal: 10,
    padding: 10,
    elevation: 2,
    marginVertical: '5%',
  },
  input: {
    fontSize: hp('2%'),
    color: '#CCCCCC',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  addImage: {
    marginTop: 10,
    alignSelf: 'center',
  },
  faltListContainer: {
    backgroundColor: '#121212',
    flex: 1,
  },
  itemContainer: {
    marginVertical: 5,
  },
  itemTouchable: {
    marginHorizontal: 10,
  },
  itemContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 2,
    marginBottom: 5,
    paddingVertical: 10,
  },
  itemImage: {
    borderRadius: 50,
    width: hp('6%'),
    height: hp('6%'),
    marginRight: 15,
  },
  itemTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemNameText: {
    fontSize: hp('2.2%'),
    color: '#FFFFFF',
  },
  itemNumberText: {
    fontSize: hp('2%'),
    color: '#CCCCCC',
    marginLeft: 10,
  },
  actionsContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginHorizontal: 10,
    padding: 10,
    elevation: 2,
  },
  actionsButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  saveButton: {
    backgroundColor: '#000000',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: hp('2%'),
    textAlign: 'center',
  },
});
