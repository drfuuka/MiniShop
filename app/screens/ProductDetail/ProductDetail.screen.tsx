import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useAppDispatch} from '../../store/hooks';
import {addToCart} from '../../store/slices/cartSlice';
import { ProductDetailStyle } from './ProductDetail.style';
import { TProduct } from '../../types/product';
import CartButton from '../../components/CartButton';

type ProductDetailRouteParams = {
  ProductDetail: {
    product: TProduct;
  };
};

const ProductDetailScreen = () => {
  const route =
    useRoute<RouteProp<ProductDetailRouteParams, 'ProductDetail'>>();
  const {product} = route.params;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={ProductDetailStyle.container}>
        <Image
          source={{uri: product.thumbnail}}
          style={ProductDetailStyle.image}
          resizeMode="contain"
        />

        <View style={ProductDetailStyle.detailsContainer}>
          <Text style={ProductDetailStyle.title}>{product.title}</Text>
          <Text style={ProductDetailStyle.brand}>{product.brand}</Text>
          <Text style={ProductDetailStyle.price}>${product.price}</Text>
          <Text style={ProductDetailStyle.rating}>Rating: {product.rating}</Text>
          <Text style={ProductDetailStyle.category}>Category: {product.category}</Text>
          <Text style={ProductDetailStyle.description}>{product.description}</Text>
        </View>

        <TouchableOpacity
          style={ProductDetailStyle.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={ProductDetailStyle.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>

      <CartButton/>
    </View>
  );
};

export default ProductDetailScreen;
