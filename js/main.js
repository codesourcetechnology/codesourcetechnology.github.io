$(document).ready(function() {
    // Configuración del carrusel
    const carouselOptions = {
        items: 1, // Número de elementos a mostrar en el carrusel
        loop: true, // Repetir el carrusel en un bucle
        autoplay: true, // Activar el autoplay
        autoplayTimeout: 3000, // Tiempo de espera entre las transiciones (en milisegundos)
        autoplayHoverPause: true, // Pausar el autoplay al pasar el cursor sobre el carrusel
        autoplaySpeed: 1000, // Velocidad de la animación del autoplay (en milisegundos)
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        nav: true, // Mostrar flechas de navegación
        navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
            ] // Personalizar el contenido de las flechas de navegación con iconos FontAwesome
    };

    // Inicializar el carrusel con las opciones
    $(".owl-carousel").owlCarousel(carouselOptions);
});