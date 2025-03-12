import React, { useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { CartStyles } from './Cart.style';
import CartItem from './components/CartItem';

const CartScreen = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <View style={CartStyles.container}>
      <Text style={CartStyles.header}>🛒 Your Cart</Text>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        )}
        ListEmptyComponent={
          <Text style={CartStyles.emptyText}>Your cart is empty 😢</Text>
        }
        contentContainerStyle={cartItems.length === 0 ? CartStyles.emptyContainer : {}}
      />

      {/* Sticky Footer */}
      {cartItems.length > 0 && (
        <View style={CartStyles.footer}>
          <Text style={CartStyles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity style={CartStyles.checkoutButton}>
            <Text style={CartStyles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
