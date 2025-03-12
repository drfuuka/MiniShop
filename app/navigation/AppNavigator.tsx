import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home.screen';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetail.screen';
import CartScreen from '../screens/Cart/Cart.screen';

type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: { title: string } };
  Cart: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.product.title })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Your Cart' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;