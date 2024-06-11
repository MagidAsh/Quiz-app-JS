import formatData from "./helper.js";

const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-text");

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  //   console.log(json);
  formattedData = formatData(json.results);
  start();
  console.log(formattedData);
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
  showQuestion();
};

const showQuestion = () => {
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];

  correctAnswer = correctAnswerIndex;
  questionText.innerText = question;
  answerList.forEach((button, index) => {
    button.innerText = answers[index];
  });
};

const checkAnswer = () => {};

window.addEventListener("load", fetchData);

answerList.forEach((button, index) => {
  button.addEventListener("click", checkAnswer);
});
