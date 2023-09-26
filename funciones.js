/*funcion de desplique del menu*/

const openCloseButton = document.querySelector('.open_close');
const navElement = document.querySelector('.indice');

openCloseButton.addEventListener('click', () => {
    // Si el elemento .nav está visible, lo ocultamos
    if (navElement.style.transform === 'translateX(0px)') {
        navElement.style.transform = 'translateX(-100%)'; // Desplazamos hacia la izquierda
        navElement.style.opacity = 0; // Ocultamos con opacidad 0
        setTimeout(() => {
            navElement.style.display = 'none'; // Cambiamos a display: none; después de la animación
        }, 100); // 300ms es la duración de la animación
    } else {
        // Mostramos el elemento .nav de nuevo
        navElement.style.display = 'block'; // Cambiamos a display: block; antes de mostrar
        setTimeout(() => {
            navElement.style.transform = 'translateX(0px)'; // Aplicamos el desplazamiento con animación
            navElement.style.opacity = 1; // Aplicamos la opacidad con animación
        }, 10); // Usamos un pequeño retraso para asegurarnos de que se apliquen las transiciones
    }
});
/*FILTRO*/