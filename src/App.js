import AuthPage from "./components/auth-page/AuthPage";
import Navbar from "./components/navbar/Navbar";
import {Outlet} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  );
}
export default App;