export const productCard = (producto) => {
    return `
        <article class="border rounded-lg p-4 shadow-sm">
            <img
                src="./assets/images/${producto.imagen}"
                alt="${producto.nombre}"
                class="w-full h-96 object-contain rounded-md"
            >

            <h2 class="text-xl font-semibold mt-4">
                ${producto.nombre}
            </h2>

            <p class="text-gray-600 mt-2">
                ${producto.descripcion}
            </p>

            <p class="text-lg font-bold mt-3">
                $${producto.precio}
            </p>

            <p class="text-sm mt-2">
                Stock: ${producto.stock}
            </p>

            <p class="text-sm font-semibold mt-1
                ${producto.disponible ? "text-green-600" : "text-red-600"}">
                ${producto.disponible ? "Disponible" : "Sin stock"}
            </p>

            ${
                producto.disponible
                    ? `
                        <div class="flex items-center justify-center gap-4 mt-4">
                            <button
                                class="btn-restar border rounded-lg px-3 py-1"
                                data-id="${producto.id}"
                            >
                                -
                            </button>

                            <span class="cantidad-producto">
                                0
                            </span>

                            <button
                                class="btn-sumar border rounded-lg px-3 py-1"
                                data-id="${producto.id}"
                            >
                                +
                            </button>
                        </div>

                        <button
                            class="btn-agregar-carrito w-full mt-4 px-4 py-2 border rounded-lg"
                            data-id="${producto.id}"
                        >
                            Agregar al carrito
                        </button>
                    `
                    : `
                        <button
                            class="w-full mt-4 px-4 py-2 border rounded-lg opacity-50 cursor-not-allowed"
                            disabled
                        >
                            Sin stock
                        </button>
                    `
            }
        </article>
    `;
};