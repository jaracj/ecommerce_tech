## Componentes creados para entrega #2 y modificaciones pedidas en corrección de entrega #1
- **Correcciones**: Se eliminó el icono "colgado" de la carpeta public.
- **Navbar**: Barra de navegación principal que contiene el branding de la tienda, los enlaces para las categorías de productos y el widget del carrito de compras.
- **CartWidget**: Componente hijo incorporado en la Navbar. Muestra el ícono del carrito de compras y un contador estático con la cantidad de productos.
- **React Icons**: Se instaló e implementó la librería "react-icons" para renderizar iconos. En este caso el carrito en "CartWidget".
- **ItemListContainer**: Componente contenedor principal que recibe y renderiza un mensaje de bienvenida dinámico a través de `props`.

---

## Módulo 3: Listado de productos

### Datos
- Se creó un archivo `src/mock/asyncMock.js` que exporta la función `getProducts()`.
- Esta función retorna una `Promise` que se resuelve después de 2 segundos con un array de 5 productos.
- Cada producto tiene: `id`, `name`, `description`, `price`, `category`, `img` y `stock`.

### Flujo
- **ItemListContainer**: Usa `useState` para gestionar el estado `items` y `useEffect` para llamar a `getProducts()` al montar el componente.
- **ItemList**: Recibe los productos por props y usa `.map()` para renderizar cada `Item`.
- **Item**: Componente que muestra la card visual de cada producto (imagen, nombre, descripción, precio y stock).

### Tareas
- El contenedor obtiene y guarda los datos.
- ItemList se encarga del mapeo.
- Item se encarga de la presentación visual.

---

## Módulo #4 - Detalle de producto

### Nuevos archivos
- `src/components/ItemDetailContainer.jsx` — Contenedor: lógica de carga, `useEffect` + `getProductById`, estado `product`, loading.
- `src/components/ItemDetail.jsx` — Presentación: layout e-commerce (imagen, nombre, precio, categoría, descripción, stock).
- `src/components/ItemDetail.css` — Estilos del detalle (grid responsive, tipografía, colores).
- `src/components/ItemCount.jsx` — Contador reutilizable (props: `stock`, `initial`, `onAdd`; no supera stock, no baja de 1).

### Modificaciones
- `src/mock/asyncMock.js` — Agregada `getProductById(productId)`: Promise con `setTimeout` 1s, busca por `id`, resuelve producto o rechaza con Error.

### Flujo
1. `ItemDetailContainer` define `productId` temporal (1) → `useEffect` llama `getProductById`.
2. Mientras carga: muestra "Cargando detalle del producto...".
3. Al resolver: guarda en estado → renderiza `<ItemDetail product={product} />`.
4. `ItemDetail` muestra info completa + `<ItemCount stock={product.stock} onAdd={...} />`.
5. `ItemCount` maneja cantidad (botones +/-) y botón "Agregar al Carrito" con alerta.
