let randomQuestion = questions.sort((a, b) => {
  return 0.5 - Math.random();
});

function buildQuiz() {
  const output = [];
  let currentNumber = 1;

  randomQuestion.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    output.push(
      `
        <div class="slide">
          <div class="question">${currentQuestion.question}</div>
          <div class="answers">
            <input type="text" name="question${questionNumber}" id="question${questionNumber}" placeholder="...." data="${currentNumber}" class="form-control text-center answer my-2">
          </div>
          <div class="messages"><span class="message-${questionNumber}"></span></div>
        </div>
      `
    );

    currentNumber++;
  });
  questionContainer.innerHTML = output.join("");
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
  nextButton.style.display = "none";
}

const questionContainer = document.querySelector("#quiz");
const nextButton = document.querySelector("#next");
const checkAnswer = document.querySelector("#check");

buildQuiz();

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
nextButton.addEventListener("click", nextSlide);
nextButton.style.display = "none";

checkAnswer.addEventListener("click", () => {
  const answerContainers = questionContainer.querySelectorAll(".answers");
  const answerContainer = answerContainers[currentSlide];
  const selector = `input[id=question${currentSlide}]`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  const messageContainers = questionContainer.querySelectorAll(".messages");
  const messageContainer = messageContainers[currentSlide];

  const correctAnswer = results(currentSlide);

  if (userAnswer == correctAnswer) {
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar, Silahkan lanjut ke materi berikutnya.</h5>`;
    } else {
      nextButton.style.display = "inline-block";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar</h5>`;
    }
    answerContainer.querySelector(selector).style.border = "2px solid green";
  } else {
    answerContainer.querySelector(selector).style.border = "2px solid red";
    messageContainer.innerHTML = `<h5 class="text-danger">Jawaban Salah</h5>`;
  }
});

function results(n) {
  return randomQuestion[n].answer;
}

// Pahami-1
const answerDefault = ["100", "10", "100", "10", "10"];
const pahami1 = document.querySelectorAll(".pahami-1");
const checkPahami1 = document.getElementById("check-pahami-1");
const messagePahami1 = document.getElementById("message-pahami-1");

checkPahami1.addEventListener("click", () => {
  let wrong = 0;
  answerDefault.forEach((item, index) => {
    if (pahami1[index].value !== item) {
      pahami1[index].style.border = "2px solid red";
      wrong++;
    } else {
      pahami1[index].style.border = "2px solid green";
    }

    if (wrong === 5) {
      messagePahami1.innerText = "Semua Jawaban Salah";
      messagePahami1.style.color = `#cc372f`;
      messagePahami1.style.textAlign = `center`;
    } else if (wrong > 0) {
      messagePahami1.innerText = "Masih Ada Jawaban yang Salah";
      messagePahami1.style.color = `#cc372f`;
      messagePahami1.style.textAlign = `center`;
    } else {
      messagePahami1.innerText = `Jadi, besarnya beda potensial adalah 10 volt.`;
      messagePahami1.style.color = `#2fcc71`;
      messagePahami1.style.textAlign = `center`;
    }
  });
});
