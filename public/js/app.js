let menuOpenToggle = document.querySelector(".menu_open__toogle");
let mobileOpenToggle = document.querySelector(".mobile_open_toogle");
let menu = document.querySelector(".menu");
let menuOpenBtnSvg = document.querySelector(".menu_open_btn__svg");
let navLinks = document.querySelectorAll(".nav_link");

function toggleMenu() {
  if (window.innerWidth < 768) {
    menu.classList.toggle("-left-[100%]");
    menu.classList.add("bg-white");
  } else {
    menu.classList.toggle("-left-[242px]");
    menu.classList.toggle("active_menu");
    menu.classList.toggle("bg-white");
    menu.classList.remove("-left-[100%]");
  }
  document.body.classList.toggle("max-md:overflow-y-hidden")
  menu.classList.toggle("left-0");
  menuOpenBtnSvg.classList.toggle("-rotate-90");
  menuOpenBtnSvg.classList.toggle("rotate-90");
}

menuOpenToggle.addEventListener("click", toggleMenu);
mobileOpenToggle.addEventListener("click", toggleMenu);

// Sahifa yuklanganda yoki o'lcham o'zgarganda menu holatini o'rnatish
function setMenuInitialState() {
  if (window.innerWidth < 768) {
    menu.classList.add("-left-[100%]");
    menu.classList.add("bg-white");
    menu.classList.remove("-left-[242px]");
  } else {
    menu.classList.add("-left-[242px]");
    menu.classList.remove("-left-[100%]");
    menu.classList.remove("left-0");
    menu.classList.add("bg-white");
    menuOpenBtnSvg.classList.add("-rotate-90");
    menuOpenBtnSvg.classList.remove("rotate-90");
  }
}

// Sahifa yuklanganda boshlang'ich holatni o'rnatish
setMenuInitialState();

// Sahifa o'lchami o'zgarganda menu holatini yangilash
window.addEventListener("resize", setMenuInitialState);

navLinks.forEach(function (item, index) {
  item.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("font-semibold");
      item.classList.add("font-light");
      item.classList.add("pl-0");
      item.classList.remove("pl-[9px]");
    });
    navLinks[index].classList.add("font-semibold");
    navLinks[index].classList.add("pl-[9px]");

    if (window.innerWidth < 768) {
      menu.classList.add("-left-[100%]");
      menu.classList.remove("left-0");
      menu.classList.remove("bg-white");
      menuOpenBtnSvg.classList.remove("-rotate-90");
      menuOpenBtnSvg.classList.add("rotate-90");
    }
  });
});