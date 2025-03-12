import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {theme} from '../styles/theme';

const CartButton = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const cartItems = useAppSelector(state => state.cart);

  if(!cartItems.length) {
    return <></>;
  }

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity
      onPress={goToCart}
      style={styles.cartButton}
      activeOpacity={0.8}>
      <View style={styles.cartCountWrapper}>
        <Text style={styles.cartCount}>{cartItems.length}</Text>
      </View>
      <Text style={styles.cartButtonText}>🛒</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cartButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  cartCountWrapper: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: theme.colors.primary,
    height: 20,
    width: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  cartCount: {
    color: theme.colors.white,
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartButton;
