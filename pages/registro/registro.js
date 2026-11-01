import { crearUsuario } from "../../services/usuarios.services.js";
import {
  mostrarExito,
  mostrarError,
} from "../../utils/alertas.utils.js";

const registroForm = document.querySelector("#registroForm");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const password = document.querySelector("#password");

registroForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nuevoUsuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    telefono: telefono.value,
    contraseña: password.value,
  };

  try {
    await crearUsuario(nuevoUsuario);

    await mostrarExito(
      "Usuario creado",
      "La cuenta fue creada correctamente.",
    );

    window.location.href = "../login/login.html";
  } catch (error) {
    await mostrarError(
      "No se pudo crear la cuenta",
      error.message,
    );
  }
});