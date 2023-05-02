const navShow = document.querySelector(".menu");
const navShow2 = document.querySelector(".s-menu");

    const icon = document.querySelector("#js-hamburger");

    function toggleMenu() {
      navShow.classList.toggle("menu--show");
       navShow2.classList.toggle("menu--show");
        icon.classList.toggle("fa-window-minimize");
    }