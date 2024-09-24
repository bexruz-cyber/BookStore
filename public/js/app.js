let menu_open_toggle = document.querySelector(".menu_open__toogle");
let mobile_open_toggle = document.querySelector(".mobile_open_toogle");
let menu = document.querySelector(".menu");
let menu_open_btn_svg = document.querySelector(".menu_open_btn__svg");

function toggleMenu() {
  if (window.innerWidth < 768) {
    menu.classList.toggle("-left-[100%]");
  } else {
    menu.classList.toggle("-left-[242px]");
    menu.classList.toggle("active_menu");
  }
  menu.classList.toggle("left-0");
  menu.classList.toggle("bg-white");
  menu_open_btn_svg.classList.toggle("-rotate-90");
  menu_open_btn_svg.classList.toggle("rotate-90");
}

menu_open_toggle.addEventListener("click", toggleMenu);
mobile_open_toggle.addEventListener("click", toggleMenu);

// Set initial state for the menu based on screen size
if (window.innerWidth < 768) {
  menu.classList.add("-left-[100%]");
  menu.classList.add("active_menu");
} else {
  menu.classList.add("-left-[242px]");
}


if(document.nav_link){
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
}
