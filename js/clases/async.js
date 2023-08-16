const myPromise = (password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Código que guarda algo en la DB
            if (password.length < 4) {
                reject('La contraseña es muy corta');
            }
            resolve('La contraseña es correcta');
        }, 1000);
    });
}

myPromise('asd')
    .then((msg) => {
        console.log(msg);
        // Dar la bienvenida al usuario
        // Cargar en el carrusel sus productos favoritos
    })
    .catch(err => {
        // registrar en mi log de errores
        console.log(err);
        // Redirigir a la página de inicio
    })
    .finally(() => {
        // Funciones de limpieza
    });
