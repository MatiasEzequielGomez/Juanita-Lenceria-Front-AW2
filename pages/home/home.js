import { getProductos } from "../../services/productos.services.js";
import { productCard } from "../../components/productCard.js";

const app = document.querySelector("#app");

const cargarProductos = async () => {
    const productos = await getProductos();

    app.innerHTML = `
        <section class="max-w-7xl mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8">
                Productos
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${productos.map(producto => productCard(producto)).join("")}
            </div>
        </section>
    `;
};

cargarProductos();