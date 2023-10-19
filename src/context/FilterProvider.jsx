import { createContext, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import reducer from './filterReducer';

// create Context
export const FilterContext = createContext();

const initialState = {
  filter_Product: [],
  all_Product: [],
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

// Create Provider To filter Products
export const FilterProvider = ({ children }) => {
  // used with redux toolKite
  const products = useSelector((state) => state.products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid view
  const setGridView = () => {
    dispatch({ type: 'GRID_VIEW' });
  };
  // to set list view
  const setListView = () => {
    dispatch({ type: 'LIST_VIEW' });
  };

  // to filter products with sorting
  const sorting = () => {
    const userValue = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };

  // update filter value in search components
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
  };

  // to sort the products
  useEffect(() => {
    dispatch({ type: 'COMPLETE_FILTER_PRODUCT' });
    dispatch({ type: 'SORTING_PRODUCT' });
  }, [state.sorting_value, products, state.filters]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCT', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};
