const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handelPlayClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const handlePlay = () => {
  playBtn.innerText = "Pause";
};
const handlePause = () => {
  playBtn.innerText = "Play";
};

const handelMute = () => {};

playBtn.addEventListener("click", handelPlayClick);
muteBtn.addEventListener("click", handelMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
