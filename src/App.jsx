import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Common/Home";
import About from "./Components/Common/About";
import Contact from "./Components/Common/Contact";
import SignUp from "./Components/Common/SignUp";
import Footer from "./Components/Common/Footer";
import NotFound from "./Components/Common/NotFound";

import Header from "./Components/Header";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { fetchProducts } from "./redux/productSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isAuthentication = useSelector((state) => state.user.isAuthentication);
  return (
    <div className="position-relative">
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
