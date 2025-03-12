import {StyleSheet} from 'react-native';
import { theme } from '../../styles/theme';

export const ProductDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  brand: {
    fontSize: 18,
    color: '#666',
    marginBottom: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
  },
  addToCartButton: {
    backgroundColor: theme.colors.primary,
    padding: 14,
    margin: 16,
    marginTop: 'auto',
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
