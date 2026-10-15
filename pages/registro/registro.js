import { crearUsuario } from "../../services/usuarios.services.js";

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
        contraseña: password.value
    };

    try {
        await crearUsuario(nuevoUsuario);

        alert("Usuario creado correctamente");

        window.location.href = "../login/login.html";

    } catch (error) {
        alert(error.message);
    }
});