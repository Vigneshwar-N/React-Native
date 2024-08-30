// import {View, Dimensions, StatusBar, StyleSheet} from 'react-native';
// import React from 'react';

// //Components
// import Home from './screens/Home';
// import Search from './screens/Search';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ProductDescription from './screens/ProductDescription';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import AppNavigator from './navigation/AppNavigator';
// const {width, height} = Dimensions.get('window');

// //Main
// export default function App({navigation}) {
//   console.log(width, '+', height);

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
//       <Header />
//       <View style={{height: hp(82.9)}}>
//         <AppNavigator />
//       </View>
//       <Footer navigation={navigation} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {marginLeft: '4%', marginRight: '4%'},
//   statusBar: {
//     backgroundColor: '#000000',
//   },
// });
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeProvider} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
