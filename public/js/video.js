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