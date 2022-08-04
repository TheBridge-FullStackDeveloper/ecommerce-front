import Navbar from "./components/navbar/Navbar";
//import ProductCard from "./components/productCard/ProductCard";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Cart from "components/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Outlet />
    </div>
  );
}
export default App;
