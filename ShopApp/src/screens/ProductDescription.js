import {View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useContext} from 'react';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';
import {SelectedItemContext} from '../apis/PassData';
import {ThemeContext} from '../Hooks/UseContext';
import {useSelector} from 'react-redux';
const ProductDescription = () => {
  const {selectedItem} = useContext(SelectedItemContext);
  const darkTheme = useSelector(state => state.theme.darkTheme);

  return (
    <View
      style={{
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: hp(3),
        backgroundColor: darkTheme ? myColor.black : myColor.white,
        flex: 1,
      }}>
      <View
        style={{
          height: getResponsiveHeight(162),

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            style={{
              height: getResponsiveHeight(155),
              width: getResponsiveWidth(170),

              resizeMode: 'contain',
            }}
            source={{uri: selectedItem.thumbnail}}
          />
        </View>
        <View
          style={{
            height: getResponsiveHeight(155),
            width: getResponsiveWidth(170),
          }}>
          <Text
            style={{
              fontFamily: fonts.PlayfairDisplayBold,
              color: !darkTheme ? myColor.black : myColor.white,

              fontSize: getResponsiveFontSize(22),
            }}
            numberOfLines={1}>
            {selectedItem.title}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: fonts.WorkSansRegular,
                fontSize: getResponsiveFontSize(14),
                color: !darkTheme ? myColor.black : myColor.white,
              }}>
              {selectedItem.category}
            </Text>
            <Text
              style={{
                fontFamily: fonts.WorkSansRegular,
                fontSize: getResponsiveFontSize(12),
                color: !darkTheme ? myColor.darkGray : myColor.lightGray,
              }}>
              {selectedItem.brand}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fonts.WorkSansBold,
              fontSize: getResponsiveFontSize(20),
              color: !darkTheme ? myColor.black : myColor.white,
            }}>
            {`$${selectedItem.price}`}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: !darkTheme ? myColor.black : myColor.white,
              width: getResponsiveWidth(97),
              height: getResponsiveHeight(31),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.WorkSansMedium,
                fontSize: getResponsiveFontSize(14),
                color: !darkTheme ? myColor.white : myColor.black,
              }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: getResponsiveHeight(14),
                fontFamily: fonts.WorkSansMedium,
                color: !darkTheme ? myColor.black : myColor.white,
                top: 20,
                borderBottomColor: !darkTheme ? myColor.black : myColor.white,
                borderBottomWidth: 2,
                width: getResponsiveWidth(90),
              }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: hp(9)}}>
        <View
          style={{
            width: getResponsiveWidth(80),
            alignSelf: 'center',
            borderBottomColor: !darkTheme ? myColor.black : myColor.white,
            borderBottomWidth: getResponsiveWidth(2),
          }}>
          <Text
            style={{
              fontFamily: fonts.WorkSansBold,
              fontSize: getResponsiveFontSize(14),
              color: !darkTheme ? myColor.black : myColor.white,
            }}>
            Description
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: fonts.WorkSansRegular,
              fontSize: getResponsiveFontSize(14),
              paddingTop: getResponsiveHeight(30),
              color: darkTheme ? myColor.lightGray : myColor.darkGray,
            }}>
            {selectedItem.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDescription;
