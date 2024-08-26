import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import List from './components/List';
import Details from './components/Details';
import {SelectedItemContext} from './Hooks/UseContext';
import {styles} from './components/AppStyling ';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {HomeImage} from './constants/images/HomeImg';
import Search from './components/Search';

const initialState = {
  showDetails: false,
  selectedItem: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeColor':
      return {...state, headerColor: !state.headerColor};
    case 'showDetails':
      return {...state, showDetails: true, selectedItem: action.payload};
    default:
      return state;
  }
};

const App = () => {
  const [headerColor, setHeaderColor] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState(false);

  const searchFunction = () => {
    setSearch(!search);
  };

  const ItemPress = item => {
    dispatch({type: 'showDetails', payload: item});
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <SelectedItemContext.Provider value={{selectedItem: state.selectedItem}}>
        <View style={styles.container}>
          <View style={{height: hp('10%')}}>
            <TouchableOpacity onPress={() => setHeaderColor(!headerColor)}>
              <Text
                style={[
                  styles.header,
                  headerColor ? styles.headerRed : styles.headerBlack,
                ]}>
                ShopGrid
              </Text>
            </TouchableOpacity>
          </View>
          {!search && (
            <View style={{height: hp('80%')}}>
              {state.showDetails ? <Details /> : <List onPress={ItemPress} />}
            </View>
          )}
          {search && (
            <View style={{height: hp('80%')}}>
              {state.showDetails ? <Details /> : <Search onPress={ItemPress} />}
            </View>
          )}

          <View
            style={{
              height: hp('10%'),
              width: wp('100%'),
              backgroundColor: '#F1F1F1',
              borderRadius: 50,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={searchFunction}>
              <Image
                resizeMode="contain"
                style={{height: hp('5%'), width: wp('7%')}}
                source={HomeImage.search}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SelectedItemContext.Provider>
    </SafeAreaView>
  );
};
export default App;
