document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo2');
    const nombreEmpresa = document.querySelector('.nombre-empresas');

    logo.addEventListener('mouseenter', function() {
        if (window.innerWidth <= 800) {
            nombreEmpresa.classList.add('visible');
        }
    });

    logo.addEventListener('mouseleave', function() {
        if (window.innerWidth <= 800) {
            nombreEmpresa.classList.remove('visible');
        }
    });
});