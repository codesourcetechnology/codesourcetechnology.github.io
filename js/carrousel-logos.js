document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel');
    const autoplayInterval = 3000; // Cambia el intervalo en milisegundos según prefieras

    if (!carouselInner || carouselItems.length === 0 || !prevButton || !nextButton || !carousel) {
        console.error("Carousel elements are missing in the DOM.");
        return;
    }

    let currentIndex = 0;
    let autoplayTimer;

    function showSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }

        const offset = -index * carouselItems[0].offsetWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    function startAutoplay() {
        autoplayTimer = setInterval(function() {
            showSlide(currentIndex + 1);
        }, autoplayInterval);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    startAutoplay();

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
});