import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/asyncMock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((foundProduct) => {
        setProduct(foundProduct);
        setError(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("No se pudo cargar el detalle del producto. Por favor, intente nuevamente más tarde.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Cargando detalle del producto...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px", color: "red" }}>{error}</p>;
  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;