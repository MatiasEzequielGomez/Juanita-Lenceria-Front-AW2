const estiloJuanita = {
    confirmButtonColor: "#e4c63b",
    background: "#fff1d6",
    color: "#242124"
};

export const mostrarExito = (titulo, mensaje) => {
    return window.Swal.fire({
        icon: "success",
        title: titulo,
        text: mensaje,
        confirmButtonText: "Aceptar",
        ...estiloJuanita
    });
};

export const mostrarError = (titulo, mensaje) => {
    return window.Swal.fire({
        icon: "error",
        title: titulo,
        text: mensaje,
        confirmButtonText: "Aceptar",
        ...estiloJuanita
    });
};

export const mostrarAdvertencia = (titulo, mensaje) => {
    return window.Swal.fire({
        icon: "warning",
        title: titulo,
        text: mensaje,
        confirmButtonText: "Aceptar",
        ...estiloJuanita
    });
};

export const confirmarAccion = (titulo, mensaje) => {
  return window.Swal.fire({
    icon: "warning",
    title: titulo,
    text: mensaje,
    showCancelButton: true,
    confirmButtonText: "Sí, cancelar",
    cancelButtonText: "Volver",
    cancelButtonColor: "#5a585d",
    ...estiloJuanita,
  });
};