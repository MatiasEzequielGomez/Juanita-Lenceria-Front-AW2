import { obtenerUsuario } from "../utils/sessionStorage.utils.js";

export const navbar = () => {
    const usuario = obtenerUsuario();

    return `
        <nav class="juanita-navbar grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-6 py-4">

            <div class="justify-self-center md:justify-self-start flex items-center gap-3">

                <button id="btn-home">
                    <img
                        src="./assets/images/Logo-Juanita.ico"
                        alt="Juanita Lencería"
                        class="w-20 h-20 object-contain"
                    >
                </button>

                ${
                    usuario
                        ? `
                            <span class="juanita-user">
                                Hola, ${usuario.nombre}
                            </span>
                        `
                        : ""
                }

            </div>


            <div class="flex flex-wrap justify-center gap-3">

                <button
                    data-categoria="Todos"
                    class="juanita-button"
                >
                    Todos
                </button>

                <button
                    data-categoria="Hombres"
                    class="juanita-button"
                >
                    Hombres
                </button>

                <button
                    data-categoria="Mujeres"
                    class="juanita-button"
                >
                    Mujeres
                </button>

                <button
                    data-categoria="Niños"
                    class="juanita-button"
                >
                    Niños
                </button>

            </div>


            <div class="justify-self-center md:justify-self-end flex flex-wrap items-center justify-center gap-3">

                <button
                    id="btn-carrito"
                    class="juanita-button"
                >
                    Carrito
                </button>

                ${
                    usuario
                        ? `
                            <button
                                id="btn-logout"
                                class="juanita-button"
                            >
                                Cerrar sesión
                            </button>
                        `
                        : `
                            <button
                                id="btn-login"
                                class="juanita-button"
                            >
                                Iniciar sesión
                            </button>
                        `
                }

            </div>

        </nav>
    `;
};