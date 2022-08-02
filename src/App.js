import Navbar from "./components/navbar/Navbar";
//import ProductCard from "./components/productCard/ProductCard";
import HomePage from "./pages/HomePage"
import {Outlet} from "react-router-dom"
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
     {/*<ProductCard/>*/}
      <Outlet/>
    </div>
  );
}
export default App;