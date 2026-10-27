const products = [
  {
    id: 1,
    name: "Procesador Intel i7 14700K",
    description: "Procesador de alto rendimiento para gaming y trabajo intensivo",
    price: 675000,
    category: "procesadores",
    img: "/productos/Procesador_Intel.jpg", 
    stock: 15
  },
  {
    id: 2,
    name: "Procesador AMD Ryzen 9 7950X",
    description: "Procesador de alto rendimiento para gaming y trabajo intensivo",
    price: 965000,
    category: "procesadores",
    img: "/productos/Procesador_AMD.jpg",
    stock: 25
  },
  {
    id: 3,
    name: "Memoria RAM Corsair Vengeance 32GB",
    description: "Memoria RAM DDR5 de alto rendimiento para gaming y trabajo intensivo",
    price: 460000,
    category: "memorias",
    img: "/productos/RAM_Corsair.jpg",
    stock: 50
  },
  {
    id: 4,
    name: "SSD M.2 NVMe Samsung 970 EVO Plus 1TB",
    description: "SSD de alto rendimiento para gaming y trabajo intensivo",
    price: 250000,
    category: "almacenamiento",
    img: "/productos/SSD_M2.jpg",
    stock: 20
  },
  {
    id: 5,
    name: "Nvidia GeForce RTX 3080 Ti",
    description: "Tarjeta gráfica de alto rendimiento para gaming y trabajo intensivo",
    price: 550000,
    category: "placas-de-video",
    img: "/productos/3080TI.png",
    stock: 35
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};