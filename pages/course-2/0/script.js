// Pahami-1
const answerDefault = [
  "alternating current",
  "primer",
  "gerak",
  "polarisasi",
  "akumulator",
];
const berlatih1 = document.querySelectorAll(".berlatih-1");
const checkBerlatih1 = document.getElementById("check-berlatih-1");
const messageBerlatih1 = document.getElementById("message-berlatih-1");

checkBerlatih1.addEventListener("click", () => {
  let wrong = 0;
  answerDefault.forEach((item, index) => {
    if (berlatih1[index].value.toLowerCase() !== item) {
      berlatih1[index].style.border = "2px solid red";
      wrong++;
    } else {
      berlatih1[index].style.border = "2px solid green";
    }

    if (wrong === answerDefault.length) {
      messageBerlatih1.innerText = "Semua Jawaban Salah";
      messageBerlatih1.style.color = `#cc372f`;
      messageBerlatih1.style.textAlign = `center`;
    } else if (wrong > 0) {
      messageBerlatih1.innerText = "Masih Ada Jawaban yang Salah";
      messageBerlatih1.style.color = `#cc372f`;
      messageBerlatih1.style.textAlign = `center`;
    } else {
      messageBerlatih1.innerHTML = `Jawaban Benar Semua`;
      messageBerlatih1.style.color = `#2fcc71`;
      messageBerlatih1.style.textAlign = `center`;
    }
  });
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
    videoId: 'awWwP7MsxEM',
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

  if (getCurrentTime() == 226.361) {
    hide.style.display = 'block';
    stopVideo()
  }
  console.log(getCurrentTime());
}
function stopVideo() {
  player.stopVideo(226.361);
}

function getCurrentTime() {
  return player.getCurrentTime();
}