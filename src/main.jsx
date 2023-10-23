import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {
  Home,
  AuthLayout,
  About,
  Contact,
  Products,
  ProductDetail,
  Cart,
  Checkout,
  NotFound,
  SignUp,
  Profile,
} from './index.js';
import SignIn from './pages/SignIn.jsx';
import Room from './appwrite/Room.jsx';
import Post from './pages/Post.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <SignIn />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: '/products',
        element: (
          <AuthLayout authentication>
            <Products />
          </AuthLayout>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <AuthLayout authentication>
            <ProductDetail />
          </AuthLayout>
        ),
      },
      {
        path: '/cart',
        element: (
          <AuthLayout authentication>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: '/checkout',
        element: (
          <AuthLayout authentication>
            <Checkout />
          </AuthLayout>
        ),
      },
      {
        path: '/profile',
        element: (
          <AuthLayout authentication>
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
