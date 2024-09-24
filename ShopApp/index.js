/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/navigation/AppNavigator';
import SignUp from './src/screens/SignUp';
import SignUpData from './src/screens/SignUp';
import Login from './src/screens/Login';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
