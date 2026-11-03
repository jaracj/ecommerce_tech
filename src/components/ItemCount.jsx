import { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "20px" }}>
      <button onClick={handleDecrement} disabled={count <= 1} style={{ padding: "5px 15px" }}> - </button>
      <span style={{ fontSize: "1.2rem", fontWeight: "bold", minWidth: "30px", textAlign: "center" }}>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock} style={{ padding: "5px 15px" }}> + </button>
      
      <button 
        onClick={() => onAdd(count)} 
        style={{ marginLeft: "20px", padding: "10px 20px", backgroundColor: "#61dafb", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;