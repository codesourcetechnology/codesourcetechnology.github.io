$(document).ready(function() {
    // Verificar si la librería Owl Carousel está disponible
    if ($.fn.owlCarousel) {
        // Inicializar el carrusel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1, // Número de diapositivas visibles
            margin: 30, // Espacio entre diapositivas
            loop: true, // Repetir el carrusel
            nav: true, // Mostrar navegación
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Personalizar los iconos de navegación
            dots: true, // Mostrar puntos de paginación
            dotsEach: true // Mostrar un punto para cada diapositiva
        });

        // Delegar eventos para la navegación y los puntos de paginación
        $(document).on('click', '.owl-prev', function() {
            owl.trigger('prev.owl.carousel');
        });

        $(document).on('click', '.owl-next', function() {
            owl.trigger('next.owl.carousel');
        });

        $(document).on('click', '.owl-dot', function() {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
    } else {
        console.error("Owl Carousel is not loaded.");
    }
});