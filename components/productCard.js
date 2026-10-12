export const productCard = (producto) => {
    return `
        <article class="border rounded-lg p-4 shadow-sm">
            <img
                src="./assets/images/${producto.imagen}"
                alt="${producto.nombre}"
                class="w-full h-96 object-contain rounded-md"            >

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

            <p class="text-sm font-semibold mt-1 ${producto.disponible ? "text-green-600" : "text-red-600"}">
                ${producto.disponible ? "Disponible" : "Sin stock"}
            </p>
        </article>
    `;
};