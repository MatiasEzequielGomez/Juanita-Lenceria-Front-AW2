import { crearVenta } from "../../services/ventas.services.js";
import { obtenerUsuario } from "../../utils/sessionStorage.utils.js";
import {
    eliminarProductoDelCarrito,
    vaciarCarrito
} from "../../utils/carrito.utils.js";

export const configurarEventosCarrito = ({
    btnVolverHome,
    btnComprar,
    btnCancelarCompra,
    direccion,
    carrito,
    carritoContainer
}) => {

    // Volver al inicio
    btnVolverHome.addEventListener("click", () => {
        window.location.href = "../../index.html";
    });

    // Eliminar producto del carrito
    carritoContainer.addEventListener("click", (event) => {

        const btnEliminar = event.target.closest(".btn-eliminar-carrito");

        if (!btnEliminar) {
            return;
        }

        const idProducto = Number(btnEliminar.dataset.id);

        eliminarProductoDelCarrito(idProducto);

        window.location.reload();
    });

    // Cancelar compra
    if (btnCancelarCompra) {
        btnCancelarCompra.addEventListener("click", () => {
            vaciarCarrito();

            window.location.reload();
        });
    }
    // Realizar compra
    if (btnComprar) {
        btnComprar.addEventListener("click", async () => {

            const usuario = obtenerUsuario();

            if (!usuario) {
                alert("Debe iniciar sesión para realizar la compra.");

                window.location.href = "../login/login.html";
                return;
            }


            if (direccion.value.trim() === "") {
                alert("Ingrese una dirección de entrega.");
                return;
            }


            const venta = {
                id_usuario: usuario.id,

                direccion: direccion.value.trim(),

                productos: carrito.map(item => ({
                    id_producto: item.id,
                    cantidad: item.cantidad
                }))
            };

            try {
                await crearVenta(venta);

                vaciarCarrito();

                alert("Compra realizada correctamente.");

                window.location.href = "../../index.html";

            } catch (error) {
                alert(error.message);
            }
        });
    }
};