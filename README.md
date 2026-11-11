# Tienda Tech

## Descripción
Este proyecto es la estructura base de un sitio web de e-commerce desarrollado con React y Vite. Se trata de una tienda de venta de insumos tecnológicos.

## Tecnologías utilizadas
- React 19
- Vite
- JavaScript
- React Icons
- Git y GitHub

## Instrucciones para instalar y ejecutar el proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jaracj/ecommerce_tech
   ```

2. Ingresar a la carpeta del proyecto

   // En mi PC lo arme bajo "tienda-tech", pero al repo lo cree como "ecommerce_tech"
   ```bash
   cd ecommerce_tech
   ```

3. Instalar las dependencias
   ```bash
   npm install
   ```

4. Ejecutar servidor
   ```bash
   npm run dev
   ```

## Simulación de carga asíncrona de datos

Para simular una API real, el proyecto incluye un módulo de mock (`src/mock/asyncMock.js`) que exporta dos funciones asíncronas:

### `getProducts()`
- Retorna una **Promise** que se resuelve después de **2 segundos** (`setTimeout` de 2000ms).
- Devuelve un array de **5 productos** con la siguiente estructura:
  ```js
  {
    id: Number,
    name: String,
    description: String,
    price: Number,
    category: String,
    img: String,
    stock: Number
  }
  ```

### `getProductById(productId)`
- Retorna una **Promise** que se resuelve después de **1 segundo** (`setTimeout` de 1000ms).
- Busca el producto por `id` en el mismo array.
- Si lo encuentra: **resuelve** con el objeto producto.
- Si no existe: **rechaza** con `Error("Producto no encontrado")`.

### Flujo de carga en la aplicación
1. **ItemListContainer**: Al montarse, usa `useEffect` (con array de dependencias vacío `[]`) para llamar a `getProducts()`.
   - Mientras la promesa no resuelve: muestra **"Cargando productos..."**.
   - Si resuelve: guarda los productos en estado (`useState`) y renderiza `<ItemList>`.
   - Si rechaza: muestra un **mensaje de error visible** al usuario.

2. **ItemList**: Recibe el array de productos por `props` y usa `.map()` para renderizar cada `<Item key={product.id} />`.

3. **Item**: Componente de presentación que muestra la tarjeta del producto (imagen, nombre, precio, stock).

4. **ItemDetailContainer**: Similar, usa `getProductById(1)` (id temporal) y muestra estado de carga / error / detalle del producto.

## Módulo 5: Navegación con React Router

En esta entrega se implementó la navegación completa de la tienda usando `react-router-dom`.

### Se agregó:

- **react-router-dom**: Se instaló para manejar las rutas de la aplicación.
- **Layout con rutas anidadas**: Se creó un componente `Layout.jsx` que mantiene el Navbar y un Footer visibles en todas las páginas usando `<Outlet />`.
- **Rutas dinámicas**:
  - `/` -> Página de inicio, muestra todos los productos.
  - `/category/:categoryId` -> Filtra productos por categoría (procesadores, memorias, almacenamiento, placas de video).
  - `/item/:id` -> Muestra el detalle de un producto específico usando `useParams` para capturar el ID de la URL.
  - `*` → Ruta comodín que muestra un componente `NotFound` (Error 404) cuando la URL no existe.
- **Navegación sin recargas**: Se reemplazaron todas las etiquetas `<a>` por `<NavLink>` en el Navbar y `<Link>` en las tarjetas de producto, para que la navegación sea interna y no recargue la página.
- **Filtrado por categoría**: Se agregó la función `getProductsByCategory` al mock, y el `ItemListContainer` ahora usa `useParams` para detectar si hay una categoría en la URL y filtrar los productos automáticamente.
- **Detalle dinámico**: El `ItemDetailContainer` ahora captura el ID desde la URL con `useParams` en lugar de tener un ID hardcodeado.
