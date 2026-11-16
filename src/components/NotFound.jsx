import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px", padding: "20px" }}>
      <h1 style={{ fontSize: "5rem", color: "#e74c3c", margin: 0 }}>404</h1>
      <h2 style={{ color: "#282c34" }}>¡Ups! Página no encontrada</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>La ruta que buscas no existe en Tienda Tech.</p>
      <Link 
        to="/" 
        style={{ color: "#61dafb", fontSize: "1.2rem", textDecoration: "underline", fontWeight: "bold" }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;