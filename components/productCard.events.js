import { agregarProductoAlCarrito } from "../utils/carrito.utils.js";
import { obtenerUsuario } from "../utils/sessionStorage.utils.js";


export const configurarEventosProductCard = (
    productosContainer,
    productos
) => {

    productosContainer.addEventListener("click", (event) => {

        const btnSumar = event.target.closest(".btn-sumar");
        const btnRestar = event.target.closest(".btn-restar");
        const btnAgregar = event.target.closest(".btn-agregar-carrito");

        const boton = btnSumar || btnRestar || btnAgregar;

        if (!boton) {
            return;
        }


        const idProducto = Number(boton.dataset.id);

        const producto = productos.find(
            producto => producto.id === idProducto
        );

        if (!producto) {
            return;
        }


        const card = boton.closest("article");

        const cantidadElemento = card.querySelector(
            ".cantidad-producto"
        );

        let cantidad = Number(cantidadElemento.textContent);


        // Sumar cantidad
        if (btnSumar) {

            if (cantidad < producto.stock) {
                cantidad++;
                cantidadElemento.textContent = cantidad;
            }

            return;
        }


        // Restar cantidad
        if (btnRestar) {

            if (cantidad > 0) {
                cantidad--;
                cantidadElemento.textContent = cantidad;
            }

            return;
        }


        // Agregar al carrito
        if (btnAgregar) {

            const usuario = obtenerUsuario();

            if (!usuario) {
                alert(
                    "Debe iniciar sesión para agregar productos al carrito."
                );

                window.location.href = "./pages/login/login.html";
                return;
            }


            if (cantidad === 0) {
                alert("Seleccione una cantidad.");
                return;
            }


            const agregado = agregarProductoAlCarrito(
                producto,
                cantidad
            );

            if (!agregado) {
                alert(
                    "La cantidad supera el stock disponible."
                );

                return;
            }


            alert("Producto agregado al carrito.");

            cantidadElemento.textContent = 0;
        }
    });
};