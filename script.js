const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Mars",
            b: "Jupiter",
            c: "Earth"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>
            );
        }

        output.push(
            <div class="question">${currentQuestion.question}</div>
            <div class="options">${answers.join('')}</div>
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = input[name=question${questionNumber}]:checked;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultContainer.innerHTML = You got ${numCorrect} out of ${myQuestions.length} questions correct.;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
