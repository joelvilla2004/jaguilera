const questions = [
    {
        image: "1.png",
        question: "Què mostrarà? -NaN, 15, 105",
        answers: ["NaN", "15", "105"],
        correctAnswer: 0
    },
    {
        image: "2.png",
        question: "Aquest codi funciona? -Sí i mostra 10, Sí i mostra 25, No",
        answers: ["Sí i mostra 10", "Sí i mostra 25", "No"],
        correctAnswer: 1
    },
    {
        image: "3.png",
        question: " Aquest codi funciona? -No, Sí i mostra: 7, Sí i mostra  57",
        answers: ["No", "Sí i mostra 7", "Sí i mostra 57"],
        correctAnswer: 2
    },
    {
        image: "4.png",
        question: "Quin valor mostrarà alert? -1,5,0",
        answers: ["1", "5", "0"],
        correctAnswer: 2
    },
    {
        image: "5.png",
        question: "Aquest codi funciona? -No, Sí i mostra  0, Sí i mostra 12",
        answers: ["No", "Sí i mostra 0", "Sí i mostra 12"],
        correctAnswer: 3
    },
    {
        image: "6.png",
        question: "Quin valor mostra? -true, 2 €, 10 €",
        answers: ["true", "2€", "10€"],
        correctAnswer: 1
    },
    {
        image: "7.png",
        question: "Quin valor mostra alert? -8, 6, 5",
        answers: ["8", "6", "5"],
        correctAnswer: 1
    },
    {
        image: "8.png",
        question: "Què mostrarà per pantalla? -Volvo Saab Ford, Saab Ford, Ford",
        answers: ["Volvo Saab Ford", "Saab Ford", "Ford"],
        correctAnswer: 3
    },
    {
        image: "9.png",
        question: "Què mostrarà a la pantalla? -Juanito, Maria, Juanito Maria",
        answers: ["Juanito", "Maria", "Juanito Maria"],
        correctAnswer: 2
    },
    {
        image: "10.png",
        question: "Què mostrarà l’alert? -L1, L2, demo2",
        answers: ["L1", "L2", "demo2"],
        correctAnswer: 3
    },
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const timerContainer = document.getElementById('timer-container');
const timer = document.getElementById('timer');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const restartBtn = document.getElementById('restart-btn');

let currentQuestion = 0;
let score = 0;
let timeLeft = 80; 

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startBtn.style.display = 'none'; 
    timerContainer.style.display = 'block';
    questionContainer.style.display = 'block';
    optionsContainer.style.display = 'block';
    showQuestion();
    timerId = setInterval(updateTimer, 1000);
    document.getElementById('welcome-text').style.display = 'none';
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timer.textContent = timeLeft;
    } else {
        clearInterval(timerId);
        showResult();
    }
}

function showQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = questions[currentQuestion].image;
    imageContainer.appendChild(image);
    questionContainer.appendChild(imageContainer);

    optionsContainer.innerHTML = '';
    const answers = questions[currentQuestion].answers;
    for (let i = 0; i < answers.length; i++) {
        const option = document.createElement('button');
        option.textContent = answers[i];
        option.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(option);
    }
}



function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.textContent;
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;
    const correctAnswer = questions[currentQuestion].answers[correctAnswerIndex];

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        clearInterval(timerId);
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.style.display = 'block';
    resultContainer.textContent = `Preguntes fetes: ${currentQuestion} / Correctes: ${score} / Puntuació: ${score}`;
    restartBtn.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 80; 
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    restartBtn.style.display = 'none';
    startQuiz();
}

document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome-text');
    const startText = document.getElementById('start-text');
    
    welcomeText.style.display = 'none';
    startText.style.display = 'none';
  });

