import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import HeartImage from '../../assets/images/svgs/Home/Heart';
import List from './List';

export default function Content() {
  const Storage = useState([]);
  return (
    // <View
    //   style={{
    //     marginTop: heightPercentageToDP(5),
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //   }}>
    //   <View
    //     style={{
    //       height: getResponsiveHeight(210),
    //       width: getResponsiveWidth(170),
    //       backgroundColor: '#000ac0',
    //       alignItems: 'center',
    //       justifyContent: 'space-around',
    //     }}>
    //     <View
    //       style={{
    //         height: getResponsiveHeight(111),
    //         width: getResponsiveWidth(111),
    //         backgroundColor: '#FFF',
    //         position: 'static',
    //       }}></View>
    //     <View style={{position: 'absolute', alignSelf: 'flex-end'}}>
    //       <TouchableOpacity>
    //         <HeartImage
    //           height={getResponsiveHeight(25.57)}
    //           width={getResponsiveWidth(31)}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //     <Text
    //       style={{
    //         fontSize: getResponsiveFontSize(18),
    //         fontFamily: fonts.PlayfairDisplayBold,
    //         color: '#000000',
    //         paddingRight: '0.1%',
    //         paddingLeft: '0.1%',
    //       }}>
    //       Aristy
    //     </Text>
    //     <TouchableOpacity>
    //       <View
    //         style={{
    //           borderBottomWidth: getResponsiveWidth(4),
    //           borderBottomColor: '#000000',
    //         }}>
    //         <Text
    //           style={{
    //             fontSize: getResponsiveFontSize(14),
    //             fontFamily: fonts.WorkSansMedium,
    //             color: '#000000',
    //           }}>
    //           SHOP NOW
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    //   <View
    //     style={{
    //       height: getResponsiveHeight(210),
    //       width: getResponsiveWidth(169),
    //       backgroundColor: '#000000',
    //     }}></View>
    // </View>
    <List />
  );
}
