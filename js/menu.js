(() => {
  const refs = {
    openMenuBtn: document.querySelector(".btn-mob-open"),
    closeMenuBtn: document.querySelector(".btn-mobile-close"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();