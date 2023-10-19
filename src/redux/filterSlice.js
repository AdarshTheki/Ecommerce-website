import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getProduct: (state, { payload }) => {
      return {
        ...state,
        filter_products: [...payload],
        all_products: [...payload],
      };
    },

    toggleList: (state) => {
      return { ...state, grid_view: !state.grid_view };
    },

    sortingLists: (state, { payload }) => {
      const { value } = payload;
      return { ...state, sorting_value: value };
    },

    getSortingProducts: (state) => {
      let newSortData;
      const { filter_products, sorting_value } = state;
      const tempSortProducts = [...filter_products];
      const sortingProducts = (a, b) => {
        if (sorting_value === 'a-z') {
          return a.title.localeCompare(b.title);
        } else if (sorting_value === 'z-a') {
          return b.title.localeCompare(a.title);
        } else if (sorting_value === 'lowest') {
          return a.price - b.price;
        } else if (sorting_value === 'highest') {
          return b.price - a.price;
        } else if (sorting_value === 'toprated') {
          return b.rating?.rate - a.rating?.rate;
        } else if (sorting_value === 'cheapest') {
          return a.rating?.rate - b.rating?.rate;
        }
      };
      newSortData = tempSortProducts.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    },

    updateFilterValue: (state, { payload }) => {
      const { name, value } = payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    },

    getFilterProducts: (state) => {
      const { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((product) =>
          product.title.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (category) {
        tempFilterProduct = tempFilterProduct.filter(
          (product) => category === 'all' || product.category === category
        );
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((product) => product.price >= price);
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    },

    clearAll: (state) => {
      return {
        ...state,
        grid_view: true,
        sorting_value: 'lowest',
        filters: {
          text: '',
          category: 'all',
          price: 0,
          maxPrice: 0,
          minPrice: 0,
        },
      };
    },
  },
});

export const {
  getProduct,
  getFilterProducts,
  getSortingProducts,
  toggleList,
  sortingLists,
  updateFilterValue,
  clearAll,
} = filterSlice.actions;

export default filterSlice.reducer;
