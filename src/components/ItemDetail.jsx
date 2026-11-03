import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidad(es) de ${product.name} al carrito.`);
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
        <ItemCount stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;