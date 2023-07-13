const menuBtn = document.getElementById("nav-btn");
const menu = document.getElementById("nav");
const menuLinks = menu.getElementsByTagName("a");

// Añade un event listener a cada enlace del menú para ocultar el menú cuando se haga clic en él
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", () => {
    menu.classList.remove("show");
  });
}

// Añade el event listener para mostrar/ocultar el menú en función del botón de menú
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Añade el event listener para ocultar el menú cuando la pantalla se redimensione a un tamaño mayor que 800 píxeles
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    menu.classList.remove("show");
  }
});
