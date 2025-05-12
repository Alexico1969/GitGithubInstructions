const quizQuestions = [
    {
        question: "What command is used to initialize a Git repository?",
        options: ["git init", "git start", "git create", "git begin"],
        answer: "git init"
    },
    {
        question: "What is the purpose of a .gitignore file?",
        options: ["To ignore certain files from being tracked", "To track all files", "To store Git commands", "To initialize a repository"],
        answer: "To ignore certain files from being tracked"
    },
    {
        question: "How do you create a new private repository on GitHub?",
        options: ["Select 'Private' when creating a new repository", "Use the command line", "You cannot create private repositories", "Select 'Public' when creating a new repository"],
        answer: "Select 'Private' when creating a new repository"
    },
    {
        question: "What is a personal access token used for?",
        options: ["To authenticate with GitHub", "To create a repository", "To push code", "To clone a repository"],
        answer: "To authenticate with GitHub"
    },
    {
        question: "What command is used to push changes to a remote repository?",
        options: ["git push", "git upload", "git send", "git transfer"],
        answer: "git push"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = quizQuestions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.options.map((option, index) => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h2>Your Score: ${score} out of ${quizQuestions.length}</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);