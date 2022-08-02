import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import App from './App';

const Container = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}> 
          <Route index element={<HomePage/>}/>
          <Route path="product-page" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

