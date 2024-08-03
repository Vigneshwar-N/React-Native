import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from './constant/Images';

export default function App() {
  const [Character, setCharacter] = useState(images.char1full);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={styles.container.backgroundColor} />
      <View style={{paddingLeft: '3%', paddingRight: '3%'}}>
        {/** Header */}
        <View
          style={{
            flexDirection: 'row',
            height: hp('15%'),
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View>
            <Image
              style={{height: hp('3%'), width: wp('20%')}}
              source={require('./assets/appname.png')}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: hp('2.6%'), width: wp('5%')}}
                source={require('./assets/backarrow.png')}
              />
              <View style={{width: wp('1%')}} />
              <Text style={styles.textColor}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** Character Selection */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Text style={styles.font}>CHOOSE YOUR CHARACTER</Text>
          </View>
          <View style={styles.smallImageContainer}>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char1full && styles.backgroundColor,
              ]}
              onPress={() => {
                setCharacter(images.char1full);
                styles.backgroundColor;
              }}>
              <Image style={styles.smallImage} source={images.Char1} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char2full && styles.backgroundColor,
              ]}
              onPress={() => {
                setCharacter(images.char2full);
              }}>
              <Image style={styles.smallImage} source={images.Char2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char3full && styles.backgroundColor,
              ]}
              onPress={() => setCharacter(images.char3full)}>
              <Image style={styles.smallImage} source={images.Char3} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char4full && styles.backgroundColor,
              ]}
              onPress={() => setCharacter(images.char4full)}>
              <Image style={styles.smallImage} source={images.Char4} />
            </TouchableOpacity>
          </View>
          <View style={styles.smallImageContainer}>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char5full && styles.backgroundColor,
              ]}
              onPress={() => setCharacter(images.char5full)}>
              <Image style={styles.smallImage} source={images.Char5} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char6full && styles.backgroundColor,
              ]}
              onPress={() => setCharacter(images.char6full)}>
              <Image style={styles.smallImage} source={images.Char6} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.imageToc,
                Character === images.char7full && styles.backgroundColor,
              ]}
              onPress={() => setCharacter(images.char7full)}>
              <Image style={styles.smallImage} source={images.Char7} />
            </TouchableOpacity>
          </View>
        </View>
        {/** Selected Character Image */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: hp('50%'), width: wp('60%')}}
            source={Character}
          />
        </View>
        {/** Submit Button */}
        <View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submit}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#073B4C',
  },
  textColor: {
    color: '#fdc244',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  smallImage: {
    height: hp('5%'),
    width: wp('10%'),
  },
  imageToc: {
    borderWidth: wp('0.5%'),
    borderColor: '#FFFFFF',
    borderRadius: 10,
    margin: 3,
  },
  smallImageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '2%',
  },
  submitButton: {
    backgroundColor: '#fdc244',
    width: wp('75%'),
    borderRadius: 10,
  },
  submit: {
    color: '#FFFFFF',
    alignSelf: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
  font: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#fdc244',
  },
  backgroundColor: {
    backgroundColor: '#000000',
  },
});
