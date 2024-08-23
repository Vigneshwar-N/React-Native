import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';
export default function Hooks() {
  const [storage, setStorage] = useState([
    'useState',
    'useReducer',
    'useEffect',
    'useLayoutEffect',
    'useContext',
    'useRef',
    'useImperativeHandle',
    'useMemo',
    'useCallback',
    'useDebugValue',
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#000123'}}>
      <View style={{justifyContent: 'center'
        
      }}>
        <FlatList
          data={storage}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
              }}>
              <Button text={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
