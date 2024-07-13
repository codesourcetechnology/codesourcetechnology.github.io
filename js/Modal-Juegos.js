document.addEventListener("DOMContentLoaded", function() {
    const catalogCards = document.querySelectorAll(".catalog-card");
    const modals = document.querySelectorAll(".modal");

    // Función para abrir el modal
    function openModal(index) {
        const modal = modals[index];
        const card = catalogCards[index];
        const imageUrl = card.querySelector("img").src;
        const gameTitle = card.querySelector("h3").textContent;
        const gameDescription = card.querySelector("p").textContent;
        const gameLink = card.querySelector("a").href;

        const modalImage = modal.querySelector("img");
        const modalTitle = modal.querySelector("h2");
        const modalDescription = modal.querySelector("p");
        const modalLink = modal.querySelector("a");

        modalImage.src = imageUrl;
        modalImage.alt = gameTitle;
        modalTitle.textContent = gameTitle;
        modalDescription.textContent = gameDescription;
        modalLink.href = gameLink;

        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false"); // Asegurar que el modal sea accesible
        modal.setAttribute("tabindex", "-1"); // Permitir el enfoque en el modal
        modal.focus(); // Enfocar el modal para la accesibilidad
    }

    // Función para cerrar el modal
    function closeModal(index) {
        const modal = modals[index];
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Ocultar el modal de la accesibilidad
    }

    // Agregar evento de clic a cada tarjeta para abrir el modal correspondiente
    catalogCards.forEach((card, index) => {
        card.addEventListener("click", function() {
            openModal(index);
        });
    });

    // Cerrar el modal haciendo clic en cualquier parte fuera del modal
    window.addEventListener("click", function(event) {
        modals.forEach((modal, index) => {
            if (event.target === modal) {
                closeModal(index);
            }
        });
    });

    // Cerrar el modal al presionar la tecla 'Esc'
    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modals.forEach((modal, index) => {
                if (modal.style.display === "block") {
                    closeModal(index);
                }
            });
        }
    });
});