

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
