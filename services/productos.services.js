import { API_URL } from "./api.js";

const PRODUCTOS_URL = `${API_URL}/productos`;


export const getProductos = async () => {
    const response = await fetch(PRODUCTOS_URL);

    const productos = await response.json();

    return productos;
};