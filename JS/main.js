 // Esperar a que el DOM esté listo
$(document).ready(function(){
    // Seleccionar el carrusel y configurar las opciones
    $(".owl-carousel").owlCarousel({
        items: 1, // Número de elementos a mostrar en el carrusel
        loop: true, // Repetir el carrusel en un bucle
        autoplay: true, // Activar el autoplay
        autoplayTimeout: 3000, // Tiempo de espera entre las transiciones (en milisegundos)
        autoplayHoverPause: true, // Pausar el autoplay al pasar el cursor sobre el carrusel
        autoplaySpeed: 1000, // Velocidad de la animación del autoplay (en milisegundos)
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
        nav: true, // Mostrar flechas de navegación
        navText: ["<i class='fas fa-chevron-left' style='color: #000;'></i>", "<i class='fas fa-chevron-right' style='color: #000;'></i>"] // Personalizar el contenido de las flechas de navegación con iconos FontAwesome
    })
});