import { obtenerDatos } from "../../utils/localStorage.utils.js";

import {
    renderCarrito,
    mostrarCarritoVacio,
    mostrarProductosCarrito,
    mostrarResumenCarrito
} from "./carrito.view.js";

import { configurarEventosCarrito } from "./carrito.events.js";


const app = document.querySelector("#app");


export const cargarCarrito = (app) => {

    const carrito = obtenerDatos("carrito");

    // Renderizar estructura del carrito
    renderCarrito(app);


    // Obtener elementos del DOM
    const carritoContainer = document.querySelector("#carrito-container");

    const btnVolverHome = document.querySelector("#btn-volver-home");

    const direccion = document.querySelector("#direccion");

    let btnComprar = null;


    // Mostrar carrito
    if (carrito.length === 0) {

        mostrarCarritoVacio(carritoContainer);

    } else {

        mostrarProductosCarrito(
            carritoContainer,
            carrito
        );


        const totalCarrito = carrito.reduce(
            (total, item) => total + item.precio * item.cantidad,
            0
        );


        mostrarResumenCarrito(
            carritoContainer,
            totalCarrito
        );


        btnComprar = document.querySelector("#btn-comprar");
    }


    // Configurar eventos
    configurarEventosCarrito({
        btnVolverHome,
        btnComprar,
        direccion,
        carrito
    });
};


cargarCarrito(app);