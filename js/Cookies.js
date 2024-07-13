document.addEventListener("DOMContentLoaded", function() {
    // Constantes para los elementos del DOM
    const botonAceptarCookies = document.getElementById('acceptCookiesBtn');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
    const COOKIES_ACEPTADAS_KEY = 'cookies-aceptadas';

    // Verifica que todos los elementos existan antes de continuar
    if (!botonAceptarCookies || !avisoCookies || !fondoAvisoCookies) {
        console.error("Elementos necesarios para el aviso de cookies no encontrados en el DOM.");
        return;
    }

    // Verifica si el usuario ya ha aceptado las cookies anteriormente utilizando el almacenamiento local
    if (!localStorage.getItem(COOKIES_ACEPTADAS_KEY)) {
        // Si las cookies no han sido aceptadas previamente, se muestra el aviso de cookies y el fondo transparente
        avisoCookies.classList.add('activo');
        fondoAvisoCookies.classList.add('activo');
    }

    // Evento de clic para el botón de "Aceptar cookies"
    botonAceptarCookies.addEventListener('click', () => {
        // Cuando el usuario hace clic en "Aceptar cookies", se oculta el aviso de cookies y el fondo transparente
        avisoCookies.classList.remove('activo');
        fondoAvisoCookies.classList.remove('activo');

        // Se establece una marca en el almacenamiento local indicando que el usuario ha aceptado las cookies
        localStorage.setItem(COOKIES_ACEPTADAS_KEY, 'true');
    });
});