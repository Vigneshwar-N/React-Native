import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import store from '../App/store';
import {
  increment,
  decrement,
  reset,
} from '../App/features/counter/counterSlice';
import {useSelector} from 'react-redux';
export default function App() {
  // console.log(store.getState());
  // store.subscribe(() => {
  //   console.log(store.getState());
  // });
  const value = useSelector(state => state.counter.num);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          bottom: 40,
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        Counter
      </Text>
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: '#000',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View
          style={{
            borderColor: '#000000',
            width: '30%',
            borderWidth: 1,
            backgroundColor: '#000000',
          }}>
          <TouchableOpacity
            onPress={() => {
              store.dispatch(increment());
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: '3%',
                color: '#FFFFFF',
                fontSize: 20,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              padding: '3%',
              color: '#000000',
              fontSize: 20,
            }}>
            {value}
          </Text>
        </View>
        <View
          style={{
            borderColor: '#000000',
            width: '30%',
            borderWidth: 1,
            backgroundColor: '#000000',
          }}>
          <TouchableOpacity
            disabled={value === 0}
            onPress={() => {
              store.dispatch(decrement());
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: '3%',
                color: '#FFFFFF',
                fontSize: 20,
              }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderColor: '#000000',
          width: '30%',
          borderWidth: 1,
          backgroundColor: '#000000',
          marginTop: 30,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            store.dispatch(reset());
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: '3%',
              color: '#FFFFFF',
              fontSize: 20,
            }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
