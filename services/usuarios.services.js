import { API_URL } from "./api.js";

const USUARIOS_URL = `${API_URL}/usuarios`;
export const loginUsuario = async (email, contraseña) => {
    const response = await fetch(`${USUARIOS_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            contraseña
        })
    });

    const datos = await response.json();

    if (!response.ok) {
        throw new Error(datos.error);
    }

    return datos;
};
export const crearUsuario = async (usuario) => {
    const response = await fetch(USUARIOS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    const datos = await response.json();

    if (!response.ok) {
        throw new Error(datos.error);
    }

    return datos;
};

