import { crearVenta } from "../../services/ventas.services.js";
import { obtenerUsuario } from "../../utils/sessionStorage.utils.js";
import {
  eliminarProductoDelCarrito,
  vaciarCarrito,
} from "../../utils/carrito.utils.js";
import {
  mostrarExito,
  mostrarError,
  mostrarAdvertencia,
  confirmarAccion,
} from "../../utils/alertas.utils.js";

export const configurarEventosCarrito = ({
  btnVolverHome,
  btnComprar,
  btnCancelarCompra,
  direccion,
  carrito,
  carritoContainer,
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

    const idProducto = btnEliminar.dataset.id;
    eliminarProductoDelCarrito(idProducto);

    window.location.reload();
  });

  // Cancelar compra
  if (btnCancelarCompra) {
    btnCancelarCompra.addEventListener("click", async () => {
      const resultado = await confirmarAccion(
        "¿Cancelar compra?",
        "Se eliminarán todos los productos del carrito.",
      );

      if (resultado.isConfirmed) {
        vaciarCarrito();
        window.location.reload();
      }
    });
  }

  // Realizar compra
  if (btnComprar) {
    btnComprar.addEventListener("click", async () => {
      const usuario = obtenerUsuario();

      if (!usuario) {
        await mostrarAdvertencia(
          "Iniciá sesión",
          "Debes iniciar sesión para realizar la compra.",
        );

        window.location.href = "../login/login.html";
        return;
      }

      if (direccion.value.trim() === "") {
        await mostrarAdvertencia(
          "Dirección requerida",
          "Ingresá una dirección de entrega.",
        );

        return;
      }

      const venta = {
        direccion: direccion.value.trim(),

        productos: carrito.map((item) => ({
          id_producto: item.id,
          cantidad: item.cantidad,
        })),
      };

      try {
        await crearVenta(venta);

        vaciarCarrito();

        await mostrarExito(
          "Compra realizada",
          "Tu compra fue registrada correctamente.",
        );

        window.location.href = "../../index.html";
      } catch (error) {
        await mostrarError("No se pudo realizar la compra", error.message);
      }
    });
  }
};
