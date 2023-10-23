import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getFilterProducts, getProduct, getSortingProducts } from './redux/filterSlice';
import { fetchProducts } from './redux/productSlice';
import { AuthServices } from './appwrite/AuthServices';
import { logIn, logOut } from './redux/userSlice';
import { Footer, Header } from './index';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);
  const products = useSelector((state) => state.products);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    AuthServices.getCurrentUser()
      .then((res) => {
        if (res) {
          console.log(res);
          dispatch(logIn(res));
        } else {
          dispatch(logOut());
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(getProduct(products));
  }, [products]);

  useEffect(() => {
    dispatch(getFilterProducts());
    dispatch(getSortingProducts());
  }, [state.sorting_value, products, state.filters]);

  return (
    <>
      {!loading ? (
        <div className='position-relative'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default App;
