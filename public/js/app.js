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
  menu.classList.toggle("left-[-100%]");
  menu.classList.toggle("left-0");
  menuOpenBtnSvg.classList.toggle("-rotate-90");
  menuOpenBtnSvg.classList.toggle("rotate-90");
  menu.classList.toggle("-left-[242px]");
  menu.classList.toggle("active_menu");
  menu.classList.toggle("bg-white");
  menu.classList.remove("-left-[100%]");
  menu.classList.toggle("left-0");
  menuOpenBtnSvg.classList.toggle("-rotate-90");
  menuOpenBtnSvg.classList.toggle("rotate-90");
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



// Katta va mini videolarni tanlab olish
let big_video = document.querySelector(".big_video");
let mini_video_cards = document.querySelectorAll(".mini_video_card");

// Har bir mini video kartaga bosish hodisasini qo'shish
mini_video_cards.forEach(function (mini_video_card) {
  mini_video_card.addEventListener("click", function () {
    let mini_video = mini_video_card.querySelector(".mini_video");

    let tempSrc = big_video.src;

    big_video.src = mini_video.src;

    mini_video.src = tempSrc;
  });
});

const playPauseBtns = document.querySelectorAll("#playPauseBtn");
const audioPlayers = document.querySelectorAll("#audioPlayer");
const volumeControls = document.querySelectorAll("#volumeControl");
const progressBars = document.querySelectorAll("#progressBar");
const durationTimeDisplays = document.querySelectorAll("#durationTime");

// Iterating over all buttons and audio players
playPauseBtns.forEach((playPauseBtn, index) => {
  const audioPlayer = audioPlayers[index];
  const progressBar = progressBars[index];
  const durationTimeDisplay = durationTimeDisplays[index];

  // Play/Pause button
  playPauseBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = `
<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="2" height="6" fill="white" />
<rect x="4" width="2" height="6" fill="white" />
</svg>
      `; // Change button to 'Pause' icon
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = `
<svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5L0.750001 10.2631L0.750001 0.73686L9 5.5Z" fill="white"/>
</svg>
      `; // Change button to 'Play' icon
    }
  });

  // Time update for progress bar and time display
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
    durationTimeDisplay.textContent = formatTime(audioPlayer.duration);
  });

  // Volume control
  volumeControls[index].addEventListener("input", (e) => {
    const volumeValue = e.target.value / 100; // Convert 0-100 to 0-1
    audioPlayer.volume = volumeValue;
  });
});

// Format time helper function
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
