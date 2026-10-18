const CLAVE_USUARIO = "usuario";


export const obtenerUsuario = () => {
    const usuario = sessionStorage.getItem(CLAVE_USUARIO);

    return usuario
        ? JSON.parse(usuario)
        : null;
};


export const guardarUsuario = (usuario) => {
    sessionStorage.setItem(
        CLAVE_USUARIO,
        JSON.stringify(usuario)
    );
};


export const eliminarUsuario = () => {
    sessionStorage.removeItem(CLAVE_USUARIO);
};