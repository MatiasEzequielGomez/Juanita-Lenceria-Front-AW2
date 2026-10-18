import { navbar } from "../../components/navbar.js";
import { productCard } from "../../components/productCard.js";
import { footer } from "../../components/footer.js";
// Renderizar estructura del Home
export const renderHome = (app) => {
    app.innerHTML = `
        ${navbar()}

        <section class="max-w-7xl mx-auto px-4 py-8">

            <h1
                id="titulo-productos"
                class="juanita-title text-3xl mb-8"
            >
                Productos destacados
            </h1>

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
export const mostrarProductos = (productosContainer, productos) => {
    productosContainer.innerHTML = productos
        .map(producto => productCard(producto))
        .join("");
};

// Cambiar título
export const cambiarTitulo = (tituloProductos, titulo) => {
    tituloProductos.textContent = titulo;
};