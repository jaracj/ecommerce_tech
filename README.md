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

## Componentes creados para entrega #2 y modificaciones pedidas en corrección de entrega #1
- **Correcciones**: Se eliminó el icono "colgado" de la carpeta public.
- **Navbar**: Barra de navegación principal que contiene el branding de la tienda, los enlaces para las categorías de productos y el widget del carrito de compras.
- **CartWidget**: Componente hijo incorporado en la Navbar. Muestra el ícono del carrito de compras y un contador estático con la cantidad de productos.
- **React Icons**: Se instaló e implementó la librería "react-icons" para renderizar iconos. En este caso el carrito en "CartWidget".
- **ItemListContainer**: Componente contenedor principal que recibe y renderiza un mensaje de bienvenida dinámico a través de `props`.