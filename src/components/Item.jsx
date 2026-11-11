import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="item-card">
        <img src={product.img} alt={product.name} className="item-image" />
        <div className="item-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="item-price">${product.price.toLocaleString('es-AR')}</span>
          <p className="item-stock">Stock: {product.stock} unidades</p>
        </div>
      </div>
    </Link>
  );
}

export default Item;