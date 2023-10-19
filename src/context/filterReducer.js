const filterReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_PRODUCT':
      return {
        ...state,
        filter_Product: [...action.payload],
        all_Product: [...action.payload],
      };
    case 'GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };
    case 'LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };
    case 'GET_SORT_VALUE': {
      // const userValue = document.getElementById('sort').value;
      // const userValue = event.target.value;
      return {
        ...state,
        sorting_value: action.payload,
      };
    }

    case 'SORTING_PRODUCT': {
      let newSortData;
      const { filter_Product, sorting_value } = state;
      const tempSortProduct = [...filter_Product];
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
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_Product: newSortData,
      };
    }

    case 'UPDATE_FILTER_VALUE': {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case 'COMPLETE_FILTER_PRODUCT': {
      const { all_Product } = state;
      let tempFilterProduct = [...all_Product];
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
        tempFilterProduct = tempFilterProduct.filter(
          (product) => product.price >= price
        );
      }

      return {
        ...state,
        filter_Product: tempFilterProduct,
      };
    }

    default:
      state;
  }
};
export default filterReducer;
