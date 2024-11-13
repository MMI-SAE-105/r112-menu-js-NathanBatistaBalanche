const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu.menu");

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    // Mise à jour des attributs ARIA pour accessibilité
    if (isOpen == false) {
        nav.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded","true");
        body.classList.add("noscroll")
    } else {
        nav.setAttribute("aria-hidden","true")
        toggle.setAttribute("aria-expanded", "false")
        body.classList.remove("noscroll")
    }
  });

