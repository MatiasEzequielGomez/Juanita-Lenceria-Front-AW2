import { getProductos } from "../../services/productos.services.js";
import { obtenerProductosDestacados } from "../../utils/productos.utils.js";

import {
    renderHome,
    mostrarProductos
} from "./home.view.js";

import { configurarEventosHome } from "./home.events.js";


const app = document.querySelector("#app");


const cargarProductos = async () => {

    const productos = await getProductos();

    const productosDestacados = obtenerProductosDestacados(productos);

    // Renderizar estructura del Home
    renderHome(app);


    // Obtener elementos del DOM
    const productosContainer = document.querySelector("#productos-container");

    const botonesCategoria = document.querySelectorAll(
        "[data-categoria]"
    );

    const btnHome = document.querySelector("#btn-home");

    const btnCarrito = document.querySelector("#btn-carrito");

    const btnLogin = document.querySelector("#btn-login");

    const btnLogout = document.querySelector("#btn-logout");

    const tituloProductos = document.querySelector("#titulo-productos");


    // Mostrar productos iniciales
    mostrarProductos(
        productosContainer,
        productosDestacados
    );


    // Configurar eventos
    configurarEventosHome({
        productos,
        productosDestacados,
        productosContainer,
        botonesCategoria,
        btnHome,
        btnCarrito,
        btnLogin,
        btnLogout,
        tituloProductos
    });
};


cargarProductos();