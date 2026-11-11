import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

function Navbar() {
  const getClassName = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className={getClassName} style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
          <img src="/logo.svg" alt="Tienda Tech Logo" className="navbar-logo" />
        </NavLink>
      </div>
      
      <ul className="navbar-categories">
        <li><NavLink to="/category/procesadores" className={getClassName}>Procesadores</NavLink></li>
        <li><NavLink to="/category/memorias" className={getClassName}>Memorias</NavLink></li>
        <li><NavLink to="/category/almacenamiento" className={getClassName}>Almacenamiento</NavLink></li>
        <li><NavLink to="/category/placas-de-video" className={getClassName}>Placas de Video</NavLink></li>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;