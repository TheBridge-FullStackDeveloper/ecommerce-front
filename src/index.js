import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import App from './App';
import Context, { useGetter } from 'store';
import { useUser, useProduct } from 'hooks';
import Login from "./pages/authPage/Login";
import Register from "./pages/authPage/Register"


const Guard = ({ component: Component }) => {
  const { user } = useGetter();
  return user ? Component : <Navigate to="/login" replace />;
};

const Container = () => {
  const [user, setUser] = useUser();
  const [products, setProducts] = useProduct();
  return (
    <Context.Provider value={{ user, setUser, products, setProducts}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Guard component={<App />} />}>
            <Route path="product-page" element={<ProductPage />} />
          </Route>
          <Route path='/home-page' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

