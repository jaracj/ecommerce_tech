import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
      <FaShoppingCart size={24} />
      <span style={{ fontWeight: "bold", backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 6px", fontSize: "14px" }}>
        3
      </span>
    </div>
  );
}

export default CartWidget;