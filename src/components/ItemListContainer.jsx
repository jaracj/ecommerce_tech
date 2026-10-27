import { useState, useEffect } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";
import "./ItemList.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setItems(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="main-container">
      <h1>{greeting}</h1>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </main>
  );
}

export default ItemListContainer;