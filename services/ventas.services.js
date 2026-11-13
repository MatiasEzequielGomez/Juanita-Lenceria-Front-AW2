import { API_URL } from "./api.js";

const VENTAS_URL = `${API_URL}/ventas`;

export const crearVenta = async (venta) => {
  const token = localStorage.getItem("token");

  const response = await fetch(VENTAS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(venta),
  });

  const datos = await response.json();

  if (!response.ok) {
    throw new Error(datos.error);
  }

  return datos;
};