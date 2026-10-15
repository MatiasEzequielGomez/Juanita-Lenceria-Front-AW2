export const obtenerDatos = (clave) => {
    const datos = localStorage.getItem(clave);

    return datos ? JSON.parse(datos) : [];
};

export const guardarDatos = (clave, datos) => {
    localStorage.setItem(clave, JSON.stringify(datos));
};