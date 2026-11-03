import { useState, useEffect } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import "./ItemList.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setItems(productsData);
        setError(null);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("No se pudieron cargar los productos. Por favor, intente nuevamente más tarde.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="main-container">
      <h1>{greeting}</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </main>
  );
}

export default ItemListContainer;