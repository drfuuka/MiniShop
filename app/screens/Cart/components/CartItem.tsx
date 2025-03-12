import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type TCartItemProps = {
  item: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  };
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onQuantityChange, onRemove }: TCartItemProps) => {
  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
            style={[styles.quantityButton, item.quantity <= 1 && styles.disabledButton]}
            disabled={item.quantity <= 1}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => onQuantityChange(item.id, item.quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Remove Button */}
      <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.removeButton}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'Poppins-Regular',
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  quantity: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  removeButton: {
    padding: 8,
    marginLeft: 10,
  },
  removeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#ff3b30',
  },
});

export default CartItem;
