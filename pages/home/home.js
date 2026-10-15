import { getProductos } from "../../services/productos.services.js";
import { productCard } from "../../components/productCard.js";
import { navbar } from "../../components/navbar.js";
import { obtenerProductosDestacados } from "../../utils/productos.utils.js";
import { agregarProductoAlCarrito } from "../../utils/carrito.utils.js";

const app = document.querySelector("#app");

const cargarProductos = async () => {
    const productos = await getProductos();
    const productosDestacados = obtenerProductosDestacados(productos);

    app.innerHTML = `
        ${navbar()}

        <section class="max-w-7xl mx-auto px-4 py-8">
            <h1 id="titulo-productos" class="text-3xl font-bold text-center mb-8">
                Productos destacados
        </h1>

            <div id="productos-container"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            </div>
        </section>
    `;

    const productosContainer = document.querySelector("#productos-container");
    const botonesCategoria = document.querySelectorAll("[data-categoria]");
    const btnHome = document.querySelector("#btn-home");
    const tituloProductos = document.querySelector("#titulo-productos");
    const btnCarrito = document.querySelector("#btn-carrito");
    const btnLogin = document.querySelector("#btn-login");
    const btnLogout = document.querySelector("#btn-logout");

    productosContainer.addEventListener("click", (event) => {
        const botonSumar = event.target.closest(".btn-sumar");
        const botonRestar = event.target.closest(".btn-restar");
        const botonAgregar = event.target.closest(".btn-agregar-carrito");

        if (!botonSumar && !botonRestar && !botonAgregar) {
            return;
        }

        const boton = botonSumar || botonRestar || botonAgregar;
        const idProducto = Number(boton.dataset.id);

        const producto = productos.find(
            producto => producto.id === idProducto
        );

        if (!producto) {
            return;
        }

        const card = boton.closest("article");
        const cantidadElemento = card.querySelector(".cantidad-producto");

        let cantidad = Number(cantidadElemento.textContent);

        if (botonSumar) {
            if (cantidad < producto.stock) {
                cantidad++;
                cantidadElemento.textContent = cantidad;
            }

            return;
        }

        if (botonRestar) {
            if (cantidad > 0) {
                cantidad--;
                cantidadElemento.textContent = cantidad;
            }

            return;
        }

        if (botonAgregar) {
            const usuario = sessionStorage.getItem("usuario");

            if (!usuario) {
                alert("Debe iniciar sesión para agregar productos al carrito.");
                window.location.href = "./pages/login/login.html";
                return;
            }

            if (cantidad === 0) {
                alert("Seleccione una cantidad");
                return;
            }

            const agregado = agregarProductoAlCarrito(producto, cantidad);

            if (agregado) {
                alert("Producto agregado al carrito");
                cantidadElemento.textContent = "0";
            } else {
                alert("La cantidad supera el stock disponible");
            }
        }
    });
    const mostrarProductos = (listaProductos) => {
        productosContainer.innerHTML = listaProductos
            .map(producto => productCard(producto))
            .join("");
    };

    mostrarProductos(productosDestacados);

    btnHome.addEventListener("click", () => {
        tituloProductos.textContent = "Productos destacados";

        mostrarProductos(productosDestacados);
    });

    btnCarrito.addEventListener("click", () => {
        window.location.href = "./pages/carrito/carrito.html";
    });

    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.categoria;

            tituloProductos.textContent = categoria;

            const productosFiltrados = productos.filter(
                producto => producto.categoria === categoria
            );

            mostrarProductos(productosFiltrados);
        });
    });
    btnHome.addEventListener("click", () => {
        tituloProductos.textContent = "Productos destacados";

        mostrarProductos(productosDestacados);
    });

    btnCarrito.addEventListener("click", () => {
        window.location.href = "./pages/carrito/carrito.html";
    });

    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            window.location.href = "./pages/login/login.html";
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            sessionStorage.removeItem("usuario");
            localStorage.removeItem("carrito");

            window.location.reload();
        });
    }

    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.categoria;

            tituloProductos.textContent = categoria;

            const productosFiltrados = productos.filter(
                producto => producto.categoria === categoria
            );

            mostrarProductos(productosFiltrados);
        });
    });
};

cargarProductos();