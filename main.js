let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestion = [
  {
    question: "2+2",
    correct: 4,
    answers: [4, 5, 10, 12],
  },
  {
    question: "4+4",
    correct: 8,
    answers: [1, 5, 8, 12],
  },
];

let currentQuestion = 0;
let countSuccess = 0;

start.addEventListener("click", startProgram);

function startProgram() {
  start.classList.add("none");
  main.classList.remove("none");
  result.classList.add("none");
  generateQuestion();
}

function generateQuestion() {
  let question = allQuestion[currentQuestion].question;
  main.innerHTML = `<h1 class="question">${question}</h1>`;
  let btn_block = "";
  let answers = allQuestion[currentQuestion].answers;
  for (let i of answers) {
    btn_block += `<button class="btn" onclick=' checkQustion(${i})'>${i}</button>`;
  }
  main.innerHTML += `<nav class="btn_block">${btn_block}</nav>`;
}

function checkQustion(num) {
  let correct = allQuestion[currentQuestion].correct;
  if (num == correct) {
    countSuccess += 1;
  }
  currentQuestion += 1;
  if (allQuestion.length > currentQuestion) {
    generateQuestion();
  } else {
    stopQuiz();
  }
}

function stopQuiz() {
  start.classList.remove("none");
  main.classList.add("none");
  result.classList.remove("none");

  result.innerHTML = `Решено ${countSuccess} из ${allQuestion.length}`;

  currentQuestion = 0;
  countSuccess = 0;
}
