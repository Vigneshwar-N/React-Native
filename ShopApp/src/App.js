import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from '../store/store';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    // Request permission
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted.');
      }
    };
    requestUserPermission();

    // Foreground message handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('FCM Message Data:', remoteMessage.data);
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      {/* <Settings /> */}
      <AppNavigator />
    </Provider>
  );
};

export default App;
