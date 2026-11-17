import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../mock/asyncMock";
import ItemList from "./ItemList";
import "./ItemList.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const productsData = categoryId 
          ? await getProductsByCategory(categoryId) 
          : await getProducts();
        setItems(productsData);
        setError(null);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("No se pudieron cargar los productos. Intente nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const title = categoryId 
    ? `Categoría: ${categoryId.replace(/-/g, " ")}` 
    : "¡Bienvenidos a Tienda Tech! Encontrá la mejor tecnología aquí.";

  return (
    <main className="main-container">
      <h1>{title}</h1>
      
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </main>
  );
}

export default ItemListContainer;