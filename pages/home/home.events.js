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
    tituloProductos,
    filtroSubcategoria,
    ordenPrecio
}) => {

    let categoriaActual = "Todos";


    // Aplicar filtros y orden
    const aplicarFiltros = () => {

        let productosFiltrados = [...productos];


        // Filtrar por categoría
        if (categoriaActual !== "Todos") {
            productosFiltrados = productosFiltrados.filter(
                producto => producto.categoria === categoriaActual
            );
        }


        // Filtrar por subcategoría
        if (filtroSubcategoria.value !== "Todos") {
            productosFiltrados = productosFiltrados.filter(
                producto =>
                    producto.subcategoria === filtroSubcategoria.value
            );
        }


        // Ordenar por precio
        if (ordenPrecio.value === "menor-mayor") {
            productosFiltrados.sort(
                (a, b) => a.precio - b.precio
            );
        }


        if (ordenPrecio.value === "mayor-menor") {
            productosFiltrados.sort(
                (a, b) => b.precio - a.precio
            );
        }


        cambiarTitulo(
            tituloProductos,
            categoriaActual === "Todos"
                ? "Todos los productos"
                : categoriaActual
        );


        mostrarProductos(
            productosContainer,
            productosFiltrados
        );
    };


    // Eventos de las cards de productos
    configurarEventosProductCard(
        productosContainer,
        productos
    );


    // Volver a productos destacados
    btnHome.addEventListener("click", () => {

        categoriaActual = "Todos";

        filtroSubcategoria.value = "Todos";
        ordenPrecio.value = "sin-orden";

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

            categoriaActual = boton.dataset.categoria;

            aplicarFiltros();
        });
    });


    // Filtrar por subcategoría
    filtroSubcategoria.addEventListener("change", () => {
        aplicarFiltros();
    });


    // Ordenar por precio
    ordenPrecio.addEventListener("change", () => {
        aplicarFiltros();
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