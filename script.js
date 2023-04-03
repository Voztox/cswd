// DOM elements
const nameForm = document.querySelector("#nameF");
const quizContainer = document.querySelector("#quiz");
const questionBank = document.querySelector("#questionBank");
const answerForm = document.querySelector("#answerForm");
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
const scoreContainer = document.querySelector("#scoreContainer");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");
const restartButton = document.querySelector("#restartBtn");

// Quiz state variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let questions = [
  {
    question: "Which team is the winner of World Cup 2022",
    type: "radio",
    options: [
      { value: "Por", label: "Portugal" },
      { value: "Fra", label: "France" },
      { value: "Arg", label: "Argentina" },
      { value: "Eng", label: "England" },
    ],
    answer: "Arg",
  },
  {
    question:
      "Which one of the lectures are not included in stage 1 of the computer science?",
    type: "select",
    options: [
      { value: "cswd", label: "Client Side Web Development" },
      { value: "cp", label: "Computer Programming" },
      { value: "sd", label: "System Development" },
      { value: "da", label: "Data & Algorithms" },
    ],
    answer: "da",
  },
  {
    question: "What is the first name of the president of Ireland",
    type: "text",
    answer: "Michael",
  },
];

// Hide the quiz and score container initially
quizContainer.style.display = "none";
scoreContainer.style.display = "none";

// Handle name form submission
nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("#name");
  const playerName = nameInput.value.trim();
  if (playerName !== "") {
    nameForm.style.display = "none";
    quizContainer.style.display = "block";
    // Set the header text with the player's name
    const headerText = `Hello ${playerName}! Please answer the following questions:`;
    const header = document.querySelector("header h1");
    header.textContent = headerText;
    // Display the first question
    showQuestion(currentQuestionIndex);
  }
});

// Handle answer form submission
answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
 
