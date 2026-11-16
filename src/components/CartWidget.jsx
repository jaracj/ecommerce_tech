import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
        <FaShoppingCart size={24} />
        {totalItems > 0 && (
          <span style={{ fontWeight: "bold", backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 6px", fontSize: "14px" }}>
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;