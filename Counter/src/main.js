import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from '../App/store';
export default function main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({});
