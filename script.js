
const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// ==================================
// HUJAN EMOJI LOVE & MUSIK
// ==================================

let emojiRainInterval = null;

function fallingEmojis() {

  const emojis = [
    "🎵", "🎶", "💗", "💕",
    "✨", "💖", "♫", "🌸",
    "❤️", "💞", "💓", "💘"
  ];

  function createEmoji() {

    const emoji = document.createElement("span");

    emoji.className = "falling";

    emoji.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";

    emoji.style.fontSize =
      (18 + Math.random() * 22) + "px";

    emoji.style.animationDuration =
      (4 + Math.random() * 4) + "s";

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 8500);
  }

  // Emoji turun terus setiap 250 milidetik
  if (!emojiRainInterval) {
    emojiRainInterval = setInterval(createEmoji, 250);
  }
}

// ==================================
// BUKA SURAT
// ==================================

openButton.addEventListener("click", () => {

  opening.style.display = "none";

  mainContent.classList.remove("hidden");

  // Mulai hujan emoji
  fallingEmojis();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ==================================
// TOMBOL MUSIK MANUAL
// ==================================

musicButton.addEventListener("click", async () => {

  if (music.paused) {

    try {

      await music.play();

      musicButton.textContent = "❚❚";

    } catch (error) {

      alert("Musik tidak dapat diputar. Periksa file music.mp3");

    }

  } else {

    music.pause();

    musicButton.textContent = "▶";

  }

});

// ==================================
// UPDATE TOMBOL JIKA MUSIK BERUBAH
// ==================================

music.addEventListener("ended", () => {
  musicButton.textContent = "▶";
});
