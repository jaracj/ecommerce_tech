import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const { addItem, isInCart } = useCart();
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="item-detail-info">
        <span className="item-detail-category">{product.category.toUpperCase()}</span>
        <h1>{product.name}</h1>
        <p className="item-detail-description">{product.description}</p>
        <div className="item-detail-price-stock">
          <span className="item-detail-price">${product.price.toLocaleString('es-AR')}</span>
          <span className="item-detail-stock">Stock disponible: {product.stock} unidades</span>
        </div>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        {isInCart(product.id) && (
          <button 
            onClick={() => navigate('/cart')}
            style={{ marginTop: "15px", padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}
          >
            Terminar mi compra
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;