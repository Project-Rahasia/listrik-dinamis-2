// Pertanyaan
const checkPertanyaan = document.getElementById("check-1");
const responsePertanyaan = document.getElementById("message-1");

checkPertanyaan.addEventListener("click", () => {
  const pertanyaanSatu = document.querySelector(
    "input[name=soal-1]:checked"
  ).value;
  const pertanyaanDua = document.querySelector(
    "input[name=soal-2]:checked"
  ).value;
  const pertanyaanTiga = document.querySelector(
    "input[name=soal-3]:checked"
  ).value;
  const pertanyaanEmpat = document.querySelector(
    "input[name=soal-4]:checked"
  ).value;
  const pertanyaanLima = document.querySelector(
    "input[name=soal-5]:checked"
  ).value;

  if (
    pertanyaanSatu == "true" &&
    pertanyaanDua == "true" &&
    pertanyaanTiga == "true" &&
    pertanyaanEmpat == "true" &&
    pertanyaanLima == "true"
  ) {
    responsePertanyaan.innerHTML = `Jawaban benar semua`;
    responsePertanyaan.style.color = `#2fcc71`;
    responsePertanyaan.style.textAlign = `Center`;
  } else {
    responsePertanyaan.innerHTML = `Jawaban salah! silahkan coba lagi`;
    responsePertanyaan.style.color = `#cc372f`;
    responsePertanyaan.style.textAlign = `Center`;
  }
});

// YT Video
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '500',
    width: '100%',
    videoId: 'u9oqmCR6NrY',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }

  if (getCurrentTime() == 57.961) {
    stopVideo()
  }
  console.log(getCurrentTime());
}
function stopVideo() {
  player.stopVideo();
}

function getCurrentTime() {
  return player.getCurrentTime();
}
