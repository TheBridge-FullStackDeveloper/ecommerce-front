import AuthPage from "./components/auth-page/AuthPage";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage/>
     {/*<ProductCard/>*/}
    </div>
  );
}
export default App;