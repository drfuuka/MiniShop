import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TCategoryResponse, TProductsResponse} from '../types/product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
  tagTypes: ['Product'],
  endpoints: builder => ({
    getProducts: builder.query<
      TProductsResponse,
      {category?: string; search?: string; limit?: number; skip?: number}
    >({
      query: ({category, search, limit = 10, skip = 0}) => {
        let url = '';
        if (search) {
          url = `/search?q=${search}&limit=${limit}&skip=${skip}`;
        } else if (category) {
          url = `/category/${category}?limit=${limit}&skip=${skip}`;
        } else {
          url = `?limit=${limit}&skip=${skip}`;
        }
        console.log(url);
        
        return url;
      },
      providesTags: result =>
        result
          ? [
              ...result.products.map(({id}) => ({
                type: 'Product' as const,
                id,
              })),
              {type: 'Product', id: 'LIST'},
            ]
          : [{type: 'Product', id: 'LIST'}],
    }),
    getAllCategory: builder.query<TCategoryResponse, void>({
      query: () => '/categories'
    }),
  }),
});

export const {useGetProductsQuery, useGetAllCategoryQuery} = productsApi;
