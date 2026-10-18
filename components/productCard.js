export const productCard = (producto) => {
    return `
        <article class="juanita-card flex flex-col h-full">

            <img
                src="./assets/images/${producto.imagen}"
                alt="${producto.nombre}"
                class="w-full h-96 object-contain"
            >


            <h2 class="juanita-card-title text-xl mt-4">
                ${producto.nombre}
            </h2>


            <p class="juanita-text-secondary mt-2">
                ${producto.descripcion}
            </p>


            <p class="juanita-card-price mt-3">
                $${producto.precio}
            </p>


            <p class="juanita-stock text-sm mt-2">
                Stock: ${producto.stock}
            </p>


            <p class="
                text-sm
                font-semibold
                mt-1
                ${producto.disponible
                    ? "juanita-available"
                    : "text-red-700"
                }
            ">
                ${producto.disponible
                    ? "Disponible"
                    : "Sin stock"
                }
            </p>


            ${
                producto.disponible
                    ? `
                        <div class="flex items-center justify-center gap-4 mt-auto pt-4">

                            <button
                                class="
                                    btn-restar
                                    w-9
                                    h-9
                                    border
                                    border-[#b49b28]
                                    rounded-full
                                    font-bold
                                    hover:bg-[#e4c63b]
                                    transition-colors
                                "
                                data-id="${producto.id}"
                            >
                                -
                            </button>


                            <span class="cantidad-producto font-semibold">
                                0
                            </span>


                            <button
                                class="
                                    btn-sumar
                                    w-9
                                    h-9
                                    border
                                    border-[#b49b28]
                                    rounded-full
                                    font-bold
                                    hover:bg-[#e4c63b]
                                    transition-colors
                                "
                                data-id="${producto.id}"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="btn-agregar-carrito juanita-button w-full mt-4"
                            data-id="${producto.id}"
                        >
                            Agregar al carrito
                        </button>
                    `
                    : `
                        <button
                            class="
                                w-full
                                mt-auto
                                pt-4
                            "
                            disabled
                        >
                            <span
                                class="
                                    block
                                    w-full
                                    px-4
                                    py-2
                                    bg-gray-300
                                    text-gray-500
                                    rounded-xl
                                    cursor-not-allowed
                                "
                            >
                                Sin stock
                            </span>
                        </button>
                    `
            }

        </article>
    `;
};