import React, { useState, useCallback } from 'react';
import { FlatList, View, TextInput, ActivityIndicator, Text } from 'react-native';
import { useGetProductsQuery } from '../../services/productApi';
import CategoryTabs from '../../components/CategoryTabs';
import ProductCard from '../../components/ProductCard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TProduct } from '../../types/product';
import { HomeStyle } from './Home.style';
import CartButton from '../../components/CartButton';
import { debounce } from 'lodash';

const HomeScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError, isFetching } = useGetProductsQuery({
    category: selectedCategory,
    search: searchQuery,
  });

  const handleProductPress = useCallback(
    (product: TProduct) => navigation.navigate('ProductDetail', { product }),
    [navigation]
  );

  const debouncedSearch = useCallback(
    debounce((val: string) => {
      setSearchQuery(val);
      setSelectedCategory('');
    }, 500),
    []
  );

  const handleSearch = (val: string) => {
    debouncedSearch(val);
  };

  const handleCategory = useCallback((val: string) => {
    setSelectedCategory(val);
    setSearchQuery('');
  }, []);

  if (isError) {
    return (
      <View style={HomeStyle.centerContainer}>
        <Text style={HomeStyle.errorText}>Error loading products. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={HomeStyle.container}>
      <TextInput
        style={HomeStyle.searchInput}
        placeholder="Search products..."
        onChangeText={handleSearch}
      />

      <CategoryTabs selectedCategory={selectedCategory} onSelectCategory={handleCategory} />

      {isLoading || isFetching ? (
        <View style={HomeStyle.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={data?.products || []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} onPress={() => handleProductPress(item)} />}
          contentContainerStyle={HomeStyle.listContent}
          ListEmptyComponent={<Text style={HomeStyle.emptyText}>No products found</Text>}
        />
      )}

      <CartButton />
    </View>
  );
};

export default HomeScreen;
