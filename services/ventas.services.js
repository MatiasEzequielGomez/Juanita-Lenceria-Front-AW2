const API_URL = "http://localhost:3001/ventas";

export const crearVenta = async (venta) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(venta)
    });

    const datos = await response.json();

    if (!response.ok) {
        throw new Error(datos.error);
    }

    return datos;
};