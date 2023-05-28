// Pertanyaan
const checkPertanyaan = document.getElementById("check-pertanyaan");
const responsePertanyaan = document.getElementById("response-pertanyaan");

checkPertanyaan.addEventListener("click", () => {
  const pertanyaanSatu = document.querySelector(
    "input[name=pertanyaan-1]:checked"
  ).value;
  const pertanyaanDua = document.querySelector(
    "input[name=pertanyaan-2]:checked"
  ).value;
  const pertanyaanTiga = document.querySelector(
    "input[name=pertanyaan-3]:checked"
  ).value;

  if (pertanyaanSatu == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-1]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (pertanyaanDua == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-2]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (pertanyaanTiga == "true") {
    // responsePertanyaan.innerHTML = `<p>Benar</p>`;
  } else {
    document.querySelector(
      ".form .plan input[name=pertanyaan-3]:checked + label"
    ).style.backgroundColor = `#cc372f`;
  }

  if (
    pertanyaanSatu == "true" &&
    pertanyaanDua == "true" &&
    pertanyaanTiga == "true"
  ) {
    responsePertanyaan.innerText = `Jawaban Benar Semua`;
    responsePertanyaan.style.color = `#2fcc71`;
    responsePertanyaan.style.textAlign = `center`;
  } else {
    responsePertanyaan.innerText = `Masih Ada Jawaban Salah`;
    responsePertanyaan.style.color = `#cc372f`;
    responsePertanyaan.style.textAlign = `center`;
  }
});


// YT Video
var tag = document.createElement('script');
const hide = document.querySelector(".hide");
hide.style.display = 'none';

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '500',
    width: '100%',
    videoId: 'jJuIkUDfDl8',
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

  if (getCurrentTime() == 209.701) {
    hide.style.display = 'block';
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