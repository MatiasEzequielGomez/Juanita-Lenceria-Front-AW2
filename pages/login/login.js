import { loginUsuario } from "../../services/usuarios.services.js";

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

        sessionStorage.setItem(
            "usuario",
            JSON.stringify(datos.usuario)
        );

        alert(datos.mensaje);

        window.location.href = "../../index.html";

    } catch (error) {
        alert(error.message);
    }
});