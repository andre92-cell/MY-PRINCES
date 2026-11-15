
const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// EMOJI MUSIK JATUH
function fallingEmojis() {

  const emojis = [
    "🎵", "🎶", "💗", "💕",
    "✨", "💖", "♫", "🌸"
  ];

  for (let i = 0; i < 45; i++) {

    const emoji = document.createElement("span");

    emoji.className = "falling";

    emoji.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";

    emoji.style.fontSize =
      (18 + Math.random() * 22) + "px";

    emoji.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    emoji.style.animationDelay =
      Math.random() * 1.5 + "s";

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 8500);
  }
}

// BUKA SURAT
openButton.addEventListener("click", () => {

  opening.style.display = "none";

  mainContent.classList.remove("hidden");

  fallingEmojis();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// TOMBOL MUSIK MANUAL
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
