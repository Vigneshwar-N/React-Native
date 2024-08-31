import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDescription from '../screens/ProductDescription';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="ProductDescription" component={ProductDescription} />
    </Stack.Navigator>
  );
}
