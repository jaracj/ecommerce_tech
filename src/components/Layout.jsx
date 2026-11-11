import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#282c34", color: "white", marginTop: "40px" }}>
        <p>© 2026 Tienda Tech. Todos los derechos reservados. | Proyecto Final Coderhouse</p>
      </footer>
    </>
  );
}

export default Layout;