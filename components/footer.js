export const footer = () => {
    const añoActual = new Date().getFullYear();

    return `
        <footer class="juanita-footer">

            <div class="max-w-7xl mx-auto px-6 py-8">

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    <div>
                        <h3 class="font-bold text-lg">
                            Juanita Lencería
                        </h3>

                        <p class="text-sm mt-2">
                            Rosario de Sta. Fe 122
                        </p>

                        <p class="text-sm">
                            Córdoba, Argentina
                        </p>
                    </div>


                    <div>
                        <h3 class="font-bold text-lg">
                            Contacto
                        </h3>

                        <p class="text-sm mt-2">
                            +54 351 205-6615
                        </p>
                    </div>


                    <div>
                        <h3 class="font-bold text-lg">
                            Seguinos
                        </h3>

                        <a
                            href="https://www.instagram.com/juanitalenceriaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-block text-sm mt-2 hover:underline"
                        >
                            @juanitalenceriaa
                        </a>
                    </div>

                </div>


                <div class="text-center mt-8 pt-4 border-t border-gray-400">

                    <p class="text-sm">
                        © ${añoActual} Juanita Lencería - Todos los derechos reservados
                    </p>

                </div>

            </div>

        </footer>
    `;
};