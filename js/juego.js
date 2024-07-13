document.addEventListener("DOMContentLoaded", function() {
    function showElement(elementId) {
        var elements = document.querySelectorAll('.info');
        elements.forEach(function(element) {
            if (element.id === elementId) {
                element.classList.add('active');
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
                element.classList.remove('active');
            }
        });
    }

    function showDescription() {
        showElement('description');
    }

    function showRequirements() {
        showElement('requirements');
    }

    function showMinimumRequirements() {
        showElement('minimum-requirements');
    }

    // Si necesitas asociar estos métodos a botones o enlaces
    document.getElementById('showDescriptionBtn').addEventListener('click', showDescription);
    document.getElementById('showRequirementsBtn').addEventListener('click', showRequirements);
    document.getElementById('showMinimumRequirementsBtn').addEventListener('click', showMinimumRequirements);
});