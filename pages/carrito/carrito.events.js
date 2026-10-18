import { crearVenta } from "../../services/ventas.services.js";
import { obtenerUsuario } from "../../utils/sessionStorage.utils.js";

export const configurarEventosCarrito = ({
    btnVolverHome,
    btnComprar,
    direccion,
    carrito
}) => {

    // Volver al inicio
    btnVolverHome.addEventListener("click", () => {
        window.location.href = "../../index.html";
    });


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
                const nuevaVenta = await crearVenta(venta);

                localStorage.removeItem("carrito");

                alert(
                    `Compra realizada correctamente. Venta N° ${nuevaVenta.id}`
                );

                window.location.href = "../../index.html";

            } catch (error) {
                alert(error.message);
            }
        });
    }
};