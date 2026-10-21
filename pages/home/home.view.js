import { navbar } from "../../components/navbar.js";
import { productCard } from "../../components/productCard.js";
import { footer } from "../../components/footer.js";


// Renderizar estructura del Home
export const renderHome = (app, productos) => {

    const subcategorias = [
        ...new Set(
            productos
                .map(producto => producto.subcategoria)
                .filter(Boolean)
        )
    ];

    app.innerHTML = `
        ${navbar()}

        <section class="max-w-7xl mx-auto px-4 py-8">

            <h1
                id="titulo-productos"
                class="juanita-title text-3xl mb-8"
            >
                Productos destacados
            </h1>


            <div class="flex flex-col md:flex-row justify-center gap-4 mb-8">

                <div>
                    <label
                        for="filtro-subcategoria"
                        class="block font-semibold mb-1"
                    >
                        Tipo de producto
                    </label>

                    <select
                        id="filtro-subcategoria"
                        class="juanita-input"
                    >
                        <option value="Todos">
                            Todos
                        </option>

                        ${subcategorias
                            .map(subcategoria => `
                                <option value="${subcategoria}">
                                    ${subcategoria}
                                </option>
                            `)
                            .join("")
                        }
                    </select>
                </div>


                <div>
                    <label
                        for="orden-precio"
                        class="block font-semibold mb-1"
                    >
                        Ordenar por precio
                    </label>

                    <select
                        id="orden-precio"
                        class="juanita-input"
                    >
                        <option value="sin-orden">
                        </option>

                        <option value="menor-mayor">
                            Menor a mayor
                        </option>

                        <option value="mayor-menor">
                            Mayor a menor
                        </option>
                    </select>
                </div>

            </div>


            <div
                id="productos-container"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            </div>

        </section>

        ${footer()}
    `;
};


// Mostrar productos
export const mostrarProductos = (
    productosContainer,
    productos
) => {

    productosContainer.innerHTML = productos
        .map(producto => productCard(producto))
        .join("");
};


// Cambiar título
export const cambiarTitulo = (
    tituloProductos,
    titulo
) => {

    tituloProductos.textContent = titulo;
};