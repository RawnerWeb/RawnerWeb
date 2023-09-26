const openCloseButton = document.querySelector('.open_close');
const navElement = document.querySelector('.nav');

openCloseButton.addEventListener('click', () => {
    // Alternamos la propiedad transform para mostrar u ocultar .nav
    if (navElement.style.transform === 'translateX(0px)') {
        navElement.style.transform = 'translateX(-100%)'; // Desplazamos hacia la izquierda
        navElement.style.opacity = 0; // Ocultamos con opacidad 0
    } else {
        navElement.style.transform = 'translateX(0px)'; // Volvemos a la posición original
        navElement.style.opacity = 1; // Mostramos con opacidad 1
    }
});

