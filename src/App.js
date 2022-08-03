import Navbar from "./components/navbar/Navbar";
//import ProductCard from "./components/productCard/ProductCard";
import HomePage from "./pages/HomePage"
import { Outlet } from "react-router-dom"
import ProductPage from "./pages/ProductPage";
import { useGetter } from "store";
import products from "product-data";
import { useEffect } from "react";

function App() {

  const { setProducts } = useGetter();

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/*<ProductCard/>*/}
      <Outlet />
    </div>
  );
}
export default App;