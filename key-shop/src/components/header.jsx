import {link} from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#eee", padding: "10px" }}>
      <h1>Key Shop</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to= "/about">About</Link> |{" "}
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
