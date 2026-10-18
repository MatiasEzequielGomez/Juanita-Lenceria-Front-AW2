import { configurarEventosProductCard } from "../../components/productCard.events.js";

import {
    mostrarProductos,
    cambiarTitulo
} from "./home.view.js";

import { eliminarUsuario } from "../../utils/sessionStorage.utils.js";


export const configurarEventosHome = ({
    productos,
    productosDestacados,
    productosContainer,
    botonesCategoria,
    btnHome,
    btnCarrito,
    btnLogin,
    btnLogout,
    tituloProductos
}) => {

    // Eventos de las cards de productos
    configurarEventosProductCard(
        productosContainer,
        productos
    );


    // Volver a productos destacados
    btnHome.addEventListener("click", () => {
        cambiarTitulo(
            tituloProductos,
            "Productos destacados"
        );

        mostrarProductos(
            productosContainer,
            productosDestacados
        );
    });


    // Filtrar por categoría
    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.categoria;

            const productosFiltrados = categoria === "Todos"
                ? productos
                : productos.filter(
                    producto => producto.categoria === categoria
                );

            cambiarTitulo(
                tituloProductos,
                categoria === "Todos"
                    ? "Todos los productos"
                    : categoria
            );

            mostrarProductos(
                productosContainer,
                productosFiltrados
            );
        });
    });


    // Ir al carrito
    btnCarrito.addEventListener("click", () => {
        window.location.href = "./pages/carrito/carrito.html";
    });


    // Ir al login
    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            window.location.href = "./pages/login/login.html";
        });
    }


    // Cerrar sesión
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            eliminarUsuario();
            localStorage.removeItem("carrito");

            window.location.reload();
        });
    }
};