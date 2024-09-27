let menuOpenToggle = document.querySelector(".menu_open__toogle");
let mobileOpenToggle = document.querySelector(".mobile_open_toogle");
let menu = document.querySelector(".menu");
let menuOpenBtnSvg = document.querySelector(".menu_open_btn__svg");
let navLinks = document.querySelectorAll(".nav_link");
let mobile_menu = document.querySelector(".mobile_menu")

mobileOpenToggle.addEventListener("click", function(){
  mobile_menu.classList.toggle("-left-[100%]")
  mobile_menu.classList.toggle("left-0")
  document.body.classList.toggle("max-md:overflow-y-hidden");
})

function toggleMenu() {
  // Mobil ekranda
  menu.classList.toggle("left-0");
  menuOpenBtnSvg.classList.toggle("-rotate-90");
  menuOpenBtnSvg.classList.toggle("rotate-90");
  menu.classList.toggle("-left-[242px]");
  menu.classList.toggle("active_menu");
  menu.classList.toggle("bg-white");
  document.body.classList.toggle("max-md:overflow-y-hidden");
}
menuOpenToggle.addEventListener("click", toggleMenu);
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