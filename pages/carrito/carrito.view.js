// Renderizar estructura principal del carrito
export const renderCarrito = (app) => {
    app.innerHTML = `
        <section class="max-w-5xl mx-auto px-4 py-8">

            <h1 class="text-3xl font-bold text-center mb-8">
                Carrito
            </h1>

            <div class="mb-6">
                <button
                    id="btn-volver-home"
                    class="juanita-button"
                >
                    Volver al inicio
                </button>
            </div>

            <div class="mb-8">

                <label
                    for="direccion"
                    class="block mb-2 font-semibold"
                >
                    Dirección de entrega
                </label>

                <input
                    id="direccion"
                    type="text"
                    class="juanita-input w-full"
                    placeholder="Ingrese la dirección de entrega"
                >

            </div>

            <div id="carrito-container"></div>

        </section>
    `;
};


// Mostrar mensaje cuando el carrito está vacío
export const mostrarCarritoVacio = (carritoContainer) => {
    carritoContainer.innerHTML = `
        <p class="text-center text-gray-500">
            El carrito está vacío.
        </p>
    `;
};


// Mostrar productos del carrito
export const mostrarProductosCarrito = (
    carritoContainer,
    carrito
) => {

    carritoContainer.innerHTML = carrito
        .map(item => `
            <article
                class="juanita-cart-item flex gap-6 mb-4 items-center"
            >

                <img
                    src="../../assets/images/${item.imagen}"
                    alt="${item.nombre}"
                    class="w-32 h-32 object-contain"
                >


                <div class="flex-1">

                    <h2 class="text-xl font-semibold">
                        ${item.nombre}
                    </h2>

                    <p>
                        Precio: $${item.precio}
                    </p>

                    <p>
                        Cantidad: ${item.cantidad}
                    </p>

                    <p class="font-semibold">
                        Subtotal:
                        $${item.precio * item.cantidad}
                    </p>

                </div>


                <button
                    class="btn-eliminar-carrito juanita-button"
                    data-id="${item.id}"
                >
                    Eliminar
                </button>

            </article>
        `)
        .join("");
};


// Mostrar total y botón de compra
export const mostrarResumenCarrito = (
    carritoContainer,
    totalCarrito
) => {

    carritoContainer.innerHTML += `
        <div class="mt-8 text-right">

            <p class="juanita-total mb-4">
                Total: $${totalCarrito}
            </p>

            <div class="flex justify-end gap-3">

                <button
                    id="btn-cancelar-compra"
                    class="juanita-button"
                >
                    Cancelar compra
                </button>

                <button
                    id="btn-comprar"
                    class="juanita-button"
                >
                    Comprar
                </button>

            </div>

        </div>
    `;
};