import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { theme } from '../styles/theme';
import { productsApi } from '../services/productApi';

type CategoryTabsProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryTabs = ({ selectedCategory, onSelectCategory }: CategoryTabsProps) => {
  const {useGetAllCategoryQuery} = productsApi;

  const {data} = useGetAllCategoryQuery();

  if(!data?.length) {
    return <Text>No categories found</Text>;
  }
  
  return (
    <View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {data.map((category) => (
          <TouchableOpacity
            key={category.slug}
            style={[
              styles.tab,
              selectedCategory === category.slug && styles.activeTab
            ]}
            onPress={() => onSelectCategory(category.slug)}
          >
            <Text style={[
              styles.tabText,
              selectedCategory === category.slug && styles.activeText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8',
    height: 55,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    height: 35,
    borderRadius: 4,
    marginBottom: 14
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    alignItems: 'center',
    textTransform: 'capitalize',
    color: '#666',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryTabs;