const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const imageElement = document.getElementById("question-image"); // New element for image
let currentQuestionIndex = 0;
let score = 0;
let questions = []; // Initialize questions as an empty array

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

  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image; // Set the image source
    imageElement.style.display = "block"; // Show the image
  } else {
    imageElement.style.display = "none"; // Hide the image
  }

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
}

function resetState() {
  nextButton.style.display = "none";
  feedbackElement.innerHTML = "";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  imageElement.src = ""; // Clear the image
  imageElement.style.display = "none"; // Hide the image by default
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
    nextButton.innerHTML = "Finish";
    nextButton.addEventListener("click", () => {
      window.location.href = "/";
    });
  }
});

function loadQuestions(newQuestions) {
  questions = newQuestions;
  startQuiz();
}
