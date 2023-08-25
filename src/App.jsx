import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Data } from "./Files";
const { Footer, Header, Home, About, Contact, Products, ProductDetail, Cart, Checkout, NotFound, SignUp } = Data;

import { fetchProducts } from "./redux/productSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isAuthentication = useSelector((state) => state.user.isAuthentication);
  return (
    <div className='position-relative'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          path='/products'
          element={isAuthentication ? <Products /> : <SignUp />}
        />
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
