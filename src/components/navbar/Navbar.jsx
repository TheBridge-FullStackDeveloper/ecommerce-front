import "./navbar.scss"
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <p>Ecommerce</p>
      </div>
      <div className="menu">
        <p>Home</p>
        <p>Product</p>
        <p>Cart</p>
        <p>Login</p>
      </div>
    </nav>
  )
}
export default Navbar