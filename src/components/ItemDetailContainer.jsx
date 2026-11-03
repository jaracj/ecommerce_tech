import { useState, useEffect } from "react";
import { getProductById } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = 1; // TEMPORAL: en el Módulo 5 vendrá de la URL

  useEffect(() => {
    getProductById(productId)
      .then((foundProduct) => {
        setProduct(foundProduct);
        setError(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("No se pudo cargar el detalle del producto. Por favor, intente nuevamente más tarde.");
      });
  }, [productId]);

  if (error) return <p style={{ textAlign: "center", marginTop: "50px", color: "red" }}>{error}</p>;
  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Cargando detalle del producto...</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;