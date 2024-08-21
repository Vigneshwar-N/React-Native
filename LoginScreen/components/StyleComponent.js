import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {colors} from '../constant/themes';

export const style = StyleSheet.create({
  //Logo
  digiGrainLogoContainer: {
    height: hp(15),

    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Login
  loginContainer: {height: hp(7), margin: 1},
  loginText: {
    fontSize: hp(3.5),
    color: colors.black,
    fontWeight: '900',
    paddingLeft: '3%',
    margin: 1,
  },

  //Switch
  switchContainer: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowColor: colors.black,
    shadowOffset: {
      width: wp(0),
      height: hp(5),
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingTop: '2%',
    paddingBottom: '2%',
    marginRight: '3%',
    marginLeft: '3%',
  },

  //Login Page Content
  loginPageContainer: {
    height: hp(43),
    margin: 1,
    justifyContent: 'space-evenly',
    padding: '3%',
  },
  loginPageTextContainer: {
    paddingBottom: '2%',
  },

  loginPageIpContainer: {
    position: 'relative',
  },
  loginPageIpContainer2: {
    borderWidth: wp(0.5),
    borderColor: colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginPageIpBox: {},

  loginPageOtpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.2),
    borderColor: colors.button,
    borderRadius: 5,
    backgroundColor: colors.button,
    width: '100%',
  },
  loginPageOtpText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: colors.white,
    paddingTop: '2%',
    paddingBottom: '2%',
  },

  signUpPageContainer: {
    height: hp(27),
    alignSelf: 'center',
  },
  signUpPageImage: {
    height: hp(25),
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text: {
    color: colors.white,
    fontSize: hp(2),
  },
  signUpToc: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },

  loginPageContainer2: {
    height: hp(43),
    margin: 1,

    justifyContent: 'center',
    padding: '3%',
    paddingTop: '2%',
  },

  mailContainer: {
    borderWidth: wp(0.5),
    borderColor: colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  mailIpBox: {fontSize: hp(2)},
  PasswordContainer: {
    borderWidth: wp(0.5),
    borderColor: colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  PasswordIpContainer: {
    width: wp(80),
  },
  Eye: {
    height: hp(2),
    width: wp(7),
  },
  ipTxt: {
    fontSize: hp(2),
  },

  FpText: {fontSize: hp(2), color: '#1E88E5', fontWeight: 'bold'},

  //New Styling

  customStyles: {
    borderWidth: wp(0.4),
    borderColor: '#2196F3',
    borderRadius: 4,
    backgroundColor: '#EBFCFF',
  },
  customText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
//
