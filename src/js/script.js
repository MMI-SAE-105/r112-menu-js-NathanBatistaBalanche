const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu.menu");

toggle.addEventListener("click", () => {
    // Mise à jour des attributs ARIA pour accessibilité
    nav.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded","true");
  });

