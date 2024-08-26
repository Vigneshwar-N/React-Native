import React, {useReducer, useState} from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {styles} from './components/style/AppStyling ';
import List from './components/List';
import Details from './components/Details';
import {SelectedItemContext} from './Hooks/UseContext';
import TextComponent from './components/text';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from './components/Search';
import SearchImage from './assets/Images/svgs/search';
import Button from './components/Button';

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
          <View style={styles.headerContainer}>
            <Button
              text={'ShopGrid'}
              textStyle={[
                styles.header,
                headerColor ? styles.headerRed : styles.headerBlack,
              ]}
              onPress={() => {
                setHeaderColor(!headerColor);
              }}
            />
          </View>
          {!search && (
            <View style={styles.contentContainer}>
              {state.showDetails ? <Details /> : <List onPress={ItemPress} />}
            </View>
          )}
          {search && (
            <View style={styles.contentContainer}>
              {state.showDetails ? <Details /> : <Search onPress={ItemPress} />}
            </View>
          )}

          <View style={styles.footer}>
            <Button
              onPress={searchFunction}
              buttonStyle={styles.searchButton}
              children={<SearchImage height={hp(6)} width={wp(6)} />}
            />
          </View>
        </View>
      </SelectedItemContext.Provider>
    </SafeAreaView>
  );
};

export default App;
