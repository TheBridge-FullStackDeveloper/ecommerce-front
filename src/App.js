import AuthPage from "./components/auth-page/AuthPage";
import Navbar from "./components/navbar/Navbar";
//import ProductCard from "./components/productCard/ProductCard";
import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/HomePage"
import {Outlet} from "react-router-dom"
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage />
     {/*<ProductCard/>*/}
      <Outlet/>
    </div>
  );
}
export default App;