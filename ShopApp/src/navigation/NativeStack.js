import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDescription from '../screens/ProductDescription';
import Products from '../screens/Products';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDescription" component={ProductDescription} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
