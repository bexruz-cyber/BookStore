let menu_open__toogle = document.querySelector(".menu_open__toogle");
let mobile_open_toogle = document.querySelector(".mobile_open_toogle");
let menu = document.querySelector(".menu");
let menu_open_btn__svg = document.querySelector(".menu_open_btn__svg");
let nav_link = document.querySelectorAll(".nav_link");

menu_open__toogle.addEventListener("click", function () {
  menu.classList.toggle("-left-[242px]");
  menu.classList.toggle("left-0");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("active_menu");
  menu_open_btn__svg.classList.toggle("-rotate-90");
  menu_open_btn__svg.classList.toggle("rotate-90");
});
mobile_open_toogle.addEventListener("click", function () {
  menu.classList.toggle("-left-[242px]");
  menu.classList.toggle("left-0");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("active_menu");
  menu_open_btn__svg.classList.toggle("-rotate-90");
  menu_open_btn__svg.classList.toggle("rotate-90");
});

nav_link.forEach(function (item, index) {
  item.addEventListener("click", function () {
    nav_link.forEach((item) => {
      item.classList.remove("font-semibold");
      item.classList.add("font-light");
      item.classList.add("pl-0");
      item.classList.remove("pl-[9px]");
    });
    nav_link[index].classList.add("font-semibold");
    nav_link[index].classList.add("pl-[9px]");
    menu.classList.add("-left-[242px]");
    menu.classList.remove("left-0");
    menu.classList.add("bg-white");
    menu.classList.remove("active_menu");
    menu_open_btn__svg.classList.remove("-rotate-90");
    menu_open_btn__svg.classList.add("rotate-90");
  });
});
