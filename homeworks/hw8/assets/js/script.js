function toggleSongs() {
    const songsSecondHalf = document.querySelector("#songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
  }

document.getElementById("toggle-button").onclick = toggleSongs;