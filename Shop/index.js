/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/navigation/AppNavigator';
import List from './src/components/List';
import Settings from './src/screens/Settings';

AppRegistry.registerComponent(appName, () => AppNavigator);
