import { obtenerDatos, guardarDatos } from "./localStorage.utils.js";

const CLAVE_CARRITO = "carrito";

export const agregarProductoAlCarrito = (producto, cantidad) => {
    const carrito = obtenerDatos(CLAVE_CARRITO);

    const productoEnCarrito = carrito.find(
        item => item.id === producto.id
    );

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad + cantidad > producto.stock) {
            return false;
        }

        productoEnCarrito.cantidad += cantidad;
    } else {
        if (cantidad > producto.stock) {
            return false;
        }

        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: cantidad
        });
    }

    guardarDatos(CLAVE_CARRITO, carrito);

    return true;
};