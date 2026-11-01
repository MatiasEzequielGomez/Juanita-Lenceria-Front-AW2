import { loginUsuario } from "../../services/usuarios.services.js";
import { guardarUsuario } from "../../utils/sessionStorage.utils.js";
import {
  mostrarExito,
  mostrarError,
} from "../../utils/alertas.utils.js";

const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const datos = await loginUsuario(
      email.value,
      password.value
    );

    guardarUsuario(datos.usuario);

    await mostrarExito(
      "Inicio de sesión exitoso",
      datos.mensaje
    );

    window.location.href = "../../index.html";
  } catch (error) {
    await mostrarError(
      "No se pudo iniciar sesión",
      error.message
    );
  }
});