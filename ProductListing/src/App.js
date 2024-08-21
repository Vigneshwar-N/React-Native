import {View, Text, TouchableOpacity} from 'react-native';
import React, {useReducer, useState} from 'react';
import List from './components/List';
import Details from './components/Details';
import {SelectedItemContext} from './Hooks/UseContext';
import {styles} from './components/AppStyling ';

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

  const ItemPress = item => {
    dispatch({type: 'showDetails', payload: item});
  };

  return (
    <SelectedItemContext.Provider value={{selectedItem: state.selectedItem}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setHeaderColor(!headerColor)}>
          <Text
            style={[
              styles.header,
              headerColor ? styles.headerRed : styles.headerBlack,
            ]}>
            ShopGrid
          </Text>
        </TouchableOpacity>
        {state.showDetails ? <Details /> : <List onPress={ItemPress} />}
      </View>
    </SelectedItemContext.Provider>
  );
};
export default App;
