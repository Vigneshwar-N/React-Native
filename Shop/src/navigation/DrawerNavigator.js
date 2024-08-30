import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './NativeStack';
import Settings from '../screens/Settings';
import {ThemeContext} from '../Hooks/UseContext';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
