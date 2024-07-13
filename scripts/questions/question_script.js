const questions = [
  {
    question: "What amino acid is this?",
    image: "images/question_images/biochemistry/aminoAcids/arginine_pubchem.png", // Path to the image
    answers: [
      { text: "Arginine", correct: true },
      { text: "Glutamine", correct: false },
      { text: "Tryptophan", correct: false },
      { text: "Tyrosine", correct: false },
    ]
  },
  {
    question: "What nitrogenous base is this?",
    image: "images/question_images/biochemistry/aminoAcids/uracil_pubchem.png", // Path to the image
    answers: [
      { text: "Uracil", correct: true },
      { text: "Thymine", correct: false },
      { text: "Guanine", correct: false },
      { text: "Cytosine", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const imageElement = document.getElementById("question-image"); // New element for image
const progressBar = document.getElementById("myprogress")
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
  feedbackElement.innerHTML = "";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  imageElement.src = currentQuestion.image; // Set the image source
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtonsElement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  const progressValue = (currentQuestionIndex + 1) / questions.length * 100; //daniel added change 
  progressBar.value = progressValue; // Update progress bar
}

function resetState() {
  nextButton.style.display = "none";
  feedbackElement.innerHTML = "";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  imageElement.src = ""; // Clear the image
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    feedbackElement.innerHTML = "Correct!";
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    feedbackElement.innerHTML = "Incorrect.";
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    feedbackElement.innerHTML = `Quiz finished! Your score is ${score}/${questions.length}.`;
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener("click", startQuiz);
  }
});
/*function updateProgress(e) {
  if (selectAnswer(e)) {
    currentQuestion++;
  }
  scoreText.textContent = `Progress: ${currentQuestion}/${totalQuestions}`;
  const progressValue = (currentQuestion / totalQuestions) * 100;
  progressBar.value = progressValue;
}
totalQuestions = 2; 
updateProgress(false); */

startQuiz();
