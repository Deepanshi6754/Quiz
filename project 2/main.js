const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: 1,
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: 1,
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionText = document.getElementById("question-text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const progressBar = document.getElementById("progress-bar");
const resultDiv = document.getElementById("result");
const scoreText = document.getElementById("score");
const correctFeedback = document.getElementById("correct-answers");
const incorrectFeedback = document.getElementById("incorrect-answers");
const feedbackDiv = document.getElementById("feedback");
const answerFeedback = document.getElementById("answer-feedback");

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        option1.textContent = question.options[0];
        option2.textContent = question.options[1];
        option3.textContent = question.options[2];
        option4.textContent = question.options[3];

        // Set up the event listener with animation
        [option1, option2, option3, option4].forEach((btn, index) => {
            btn.onclick = () => checkAnswer(index);
            btn.classList.add('fade-in');
        });

    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correctIndex = question.correct;

    if (selectedIndex === correctIndex) {
        score++;
        correctAnswers++;
        answerFeedback.textContent = "Correct!";
    } else {
        incorrectAnswers++;
        answerFeedback.textContent = "Incorrect!";
    }

    feedbackDiv.style.display = "block";
    feedbackDiv.classList.add('fade-in');
    progressBar.value = ((currentQuestionIndex + 1) / questions.length) * 100;
}

function nextQuestion() {
    currentQuestionIndex++;
    feedbackDiv.style.display = "none";
    loadQuestion();
}

function showResult() {
    resultDiv.style.display = "block";
    resultDiv.classList.add('fade-in');
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
    correctFeedback.textContent = `Correct Answers: ${correctAnswers}`;
    incorrectFeedback.textContent = `Incorrect Answers: ${incorrectAnswers}`;
}

loadQuestion();
