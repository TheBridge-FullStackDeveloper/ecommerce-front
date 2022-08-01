import Navbar from "./components/navbar/Navbar";
//import ProductCard from "./components/productCard/ProductCard";
import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage />
     {/*<ProductCard/>*/}
    </div>
  );
}

export default App;
