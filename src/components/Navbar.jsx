import CartWidget from "./CartWidget";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.svg" alt="Tienda Tech Logo" className="navbar-logo" />
      </div>
      
      <ul className="navbar-categories">
        <li><a href="#procesadores">Procesadores</a></li>
        <li><a href="#memorias">Memorias</a></li>
        <li><a href="#almacenamiento">Almacenamiento</a></li>
        <li><a href="#placas-de-video">Placas de Video</a></li>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;