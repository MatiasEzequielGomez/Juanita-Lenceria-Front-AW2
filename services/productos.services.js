const API_URL = "http://localhost:3001/productos";

export const getProductos = async () => {
    const response = await fetch(API_URL);
    const productos = await response.json();

    return productos;
};