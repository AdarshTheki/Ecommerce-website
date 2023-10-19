import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import {
  Footer,
  Header,
  Home,
  About,
  Contact,
  Products,
  ProductDetail,
  Cart,
  Checkout,
  NotFound,
  SignUp,
} from './index';
import { fetchProducts } from './redux/productSlice';
import { getFilterProducts, getProduct, getSortingProducts } from './redux/filterSlice';

const App = () => {
  const dispatch = useDispatch();
  const isAuthentication = useSelector((state) => state.user.isAuthentication);
  const state = useSelector((state) => state.filter);
  const products = useSelector((state) => state.products);

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
    <div className='position-relative'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={isAuthentication ? <Products /> : <SignUp />} />
        <Route path='/products' element={isAuthentication ? <Products /> : <SignUp />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
