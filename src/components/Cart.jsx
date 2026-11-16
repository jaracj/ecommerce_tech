import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeItem, clear, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", padding: "20px" }}>
        <h2>Tu carrito está vacío</h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>¡Agregá productos para empezar a comprar!</p>
        <Link to="/" style={{ color: "#61dafb", fontSize: "1.2rem", textDecoration: "underline", fontWeight: "bold" }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Tu Carrito de Compras</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={item.img} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "4px" }} />
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
                <p style={{ margin: 0, color: "#666" }}>Cantidad: {item.quantity} x ${item.price.toLocaleString('es-AR')}</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                ${(item.price * item.quantity).toLocaleString('es-AR')}
              </span>
              <button 
                onClick={() => removeItem(item.id)}
                style={{ padding: "8px 12px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", textAlign: "right" }}>
        <h2 style={{ margin: "0 0 20px 0" }}>Total: ${totalPrice.toLocaleString('es-AR')}</h2>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
          <button 
            onClick={clear}
            style={{ padding: "10px 20px", backgroundColor: "#95a5a6", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Vaciar carrito
          </button>
          <button 
            onClick={() => alert("¡Gracias por tu compra!")}
            style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;