export const obtenerProductosDestacados = (productos, cantidad = 2) => {
    const categorias = ["Hombres", "Mujeres", "Niños"];

    const destacados = [];

    categorias.forEach(categoria => {
        const subcategorias = [
            ...new Set(
                productos
                    .filter(producto => producto.categoria === categoria)
                    .map(producto => producto.subcategoria)
            )
        ];

        subcategorias.forEach(subcategoria => {
            const productosFiltrados = productos
                .filter(producto =>
                    producto.categoria === categoria &&
                    producto.subcategoria === subcategoria &&
                    producto.disponible
                )
                .sort((a, b) => a.precio - b.precio)
                .slice(0, cantidad);

            destacados.push(...productosFiltrados);
        });
    });

    return destacados;
};