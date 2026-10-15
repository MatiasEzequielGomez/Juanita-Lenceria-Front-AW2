import { obtenerDatos } from "../../utils/localStorage.utils.js";
import { crearVenta } from "../../services/ventas.services.js";

export const renderCarrito = (app) => {
    const carrito = obtenerDatos("carrito");

    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8">
                Carrito
            </h1>

            <div class="text-center mb-8">
                <button
                    id="btn-volver-home"
                    class="px-4 py-2 border rounded-lg"
                >
                    Volver al inicio
                </button>
            </div>

            <div class="mb-8">
                <label for="direccion" class="block mb-2 font-medium">
                    Dirección de entrega
                </label>

                <input
                    type="text"
                    id="direccion"
                    class="w-full border rounded-lg px-4 py-2"
                    placeholder="Ingrese la dirección de entrega"
                >
            </div>

            <div id="carrito-container"></div>
        </section>
    `;

    const carritoContainer = document.querySelector("#carrito-container");
    const btnVolverHome = document.querySelector("#btn-volver-home");

    btnVolverHome.addEventListener("click", () => {
        window.location.href = "../../index.html";
    });

    if (carrito.length === 0) {
        carritoContainer.innerHTML = `
            <p class="text-center text-gray-600">
                El carrito está vacío.
            </p>
        `;

        return;
    }

    carritoContainer.innerHTML = carrito
        .map(item => `
            <article class="border rounded-lg p-4 mb-4 flex gap-4 items-center">

                <img
                    src="../../assets/images/${item.imagen}"
                    alt="${item.nombre}"
                    class="w-24 h-24 object-contain"
                >

                <div>
                    <h2 class="text-lg font-semibold">
                        ${item.nombre}
                    </h2>

                    <p>
                        Precio: $${item.precio}
                    </p>

                    <p>
                        Cantidad: ${item.cantidad}
                    </p>

                    <p class="font-bold">
                        Subtotal: $${item.precio * item.cantidad}
                    </p>
                </div>

            </article>
        `)
        .join("");

    const totalCarrito = carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );

    carritoContainer.innerHTML += `
        <div class="border-t mt-6 pt-6 text-right">
            <p class="text-2xl font-bold">
                Total: $${totalCarrito}
            </p>

            <button
                id="btn-comprar"
                class="mt-4 px-6 py-2 border rounded-lg font-semibold"
            >
                Comprar
            </button>
        </div>
    `;

    const btnComprar = document.querySelector("#btn-comprar");
    const direccion = document.querySelector("#direccion");

    btnComprar.addEventListener("click", async () => {
        const usuarioGuardado = sessionStorage.getItem("usuario");

        if (!usuarioGuardado) {
            alert("Debe iniciar sesión para realizar la compra.");
            window.location.href = "../login/login.html";
            return;
        }

        if (direccion.value.trim() === "") {
            alert("Ingrese una dirección de entrega.");
            return;
        }

        const usuario = JSON.parse(usuarioGuardado);

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

            alert(`Compra realizada correctamente. Venta N° ${nuevaVenta.id}`);

            window.location.href = "../../index.html";

        } catch (error) {
            alert(error.message);
        }
    });
};

const app = document.querySelector("#app");

renderCarrito(app);