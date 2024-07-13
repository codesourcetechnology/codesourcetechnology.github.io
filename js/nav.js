document.addEventListener('DOMContentLoaded', function() {
    // Encabezado
    var video = document.getElementById('headerVideo');

    // Nav
    const menuHamburguer = document.getElementById('Hamburguer');
    const menuContainer = document.getElementById('Menu');
    const menuItems = document.querySelectorAll('.menuItem');

    menuHamburguer.addEventListener('click', toggleMenu);

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.href = item.querySelector('.menuItemLink').href;
            closeMenu();
        });
    });

    document.addEventListener('click', function(event) {
        const isClickOnHamburger = menuHamburguer.contains(event.target);
        const isClickInsideMenu = menuContainer.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            closeMenu();
        }
    });

    // Manejo del teclado para accesibilidad
    menuHamburguer.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    function toggleMenu() {
        menuContainer.classList.toggle('open');
        menuHamburguer.classList.toggle('open');

        // Añadir o remover atributo ARIA
        const isOpen = menuContainer.classList.contains('open');
        menuHamburguer.setAttribute('aria-expanded', isOpen);
        menuContainer.setAttribute('aria-hidden', !isOpen);

        // Enfocar en el menú cuando se abre
        if (isOpen) {
            menuContainer.focus();
        }
    }

    function closeMenu() {
        menuContainer.classList.remove('open');
        menuHamburguer.classList.remove('open');

        // Ajustes de ARIA cuando se cierra el menú
        menuHamburguer.setAttribute('aria-expanded', 'false');
        menuContainer.setAttribute('aria-hidden', 'true');
    }

});