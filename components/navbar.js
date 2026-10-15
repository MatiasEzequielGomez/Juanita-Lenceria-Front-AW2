export const navbar = () => {
    const usuarioGuardado = sessionStorage.getItem("usuario");

    const usuario = usuarioGuardado
        ? JSON.parse(usuarioGuardado)
        : null;

    return `
        <nav class="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-6 py-4 border-b">

            <button id="btn-home" class="justify-self-center md:justify-self-start">
                <img
                    src="./assets/images/Logo-Juanita.ico"
                    alt="Juanita Lencería"
                    class="w-20 h-20 object-contain"
                >
            </button>

            <div class="flex flex-wrap justify-center gap-3">
                <button data-categoria="Hombres" class="px-4 py-2 border rounded-lg">
                    Hombres
                </button>

                <button data-categoria="Mujeres" class="px-4 py-2 border rounded-lg">
                    Mujeres
                </button>

                <button data-categoria="Niños" class="px-4 py-2 border rounded-lg">
                    Niños
                </button>
            </div>

            <div class="justify-self-center md:justify-self-end flex flex-wrap items-center justify-center gap-3">

                <button
                    id="btn-carrito"
                    class="px-4 py-2 border rounded-lg"
                >
                    Carrito
                </button>

                ${
                    usuario
                        ? `
                            <span class="font-medium">
                                ${usuario.nombre}
                            </span>

                            <button
                                id="btn-logout"
                                class="px-4 py-2 border rounded-lg"
                            >
                                Cerrar sesión
                            </button>
                        `
                        : `
                            <button
                                id="btn-login"
                                class="px-4 py-2 border rounded-lg"
                            >
                                Iniciar sesión
                            </button>
                        `
                }

            </div>

        </nav>
    `;
};