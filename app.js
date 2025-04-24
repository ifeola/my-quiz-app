const questions = [
	{
		question: "What does HTML stand for?",
		options: [
			"Hyper Text Markup Language",
			"High Tech Modern Language",
			"Hyperlink and Text Markup Language",
			"Home Tool Markup Language",
		],
		correctAnswer: "Hyper Text Markup Language",
		category: "HTML",
	},
	{
		question: "Which HTML tag is used to define an unordered list?",
		options: ["<ol>", "<li>", "<ul>", "<list>"],
		correctAnswer: "<ul>",
		category: "HTML",
	},
	{
		question: "What is the correct HTML element for inserting a line break?",
		options: ["<break>", "<lb>", "<br>", "<newline>"],
		correctAnswer: "<br>",
		category: "HTML",
	},
	{
		question:
			"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
		options: ["title", "src", "alt", "href"],
		correctAnswer: "alt",
		category: "HTML",
	},
	{
		question:
			"Which HTML tag is used to define the structure of an HTML document, including the head and body?",
		options: ["<body>", "<html>", "<head>", "<meta>"],
		correctAnswer: "<html>",
		category: "HTML",
	},
	{
		question: "What does CSS stand for?",
		options: [
			"Creative Style Sheets",
			"Cascading Style Sheets",
			"Computer Style Sheets",
			"Colorful Style Sheets",
		],
		correctAnswer: "Cascading Style Sheets",
		category: "CSS",
	},
	{
		question:
			"Which CSS property is used to change the text color of an element?",
		options: ["text-color", "font-color", "color", "fgcolor"],
		correctAnswer: "color",
		category: "CSS",
	},
	{
		question: "How do you select an element with id 'header' in CSS?",
		options: [".header", "#header", "header", "*header"],
		correctAnswer: "#header",
		category: "CSS",
	},
	{
		question: "Which CSS property controls the spacing between elements?",
		options: ["padding", "margin", "border", "spacing"],
		correctAnswer: "margin",
		category: "CSS",
	},
	{
		question: "How do you apply CSS styles externally to an HTML document?",
		options: [
			"Using the `<style>` tag in the `<head>`",
			"Using the `style` attribute on HTML elements",
			"Using the `<link>` tag in the `<head>` to link a .css file",
			"Using the `<script>` tag",
		],
		correctAnswer: "Using the `<link>` tag in the `<head>` to link a .css file",
		category: "CSS",
	},
	{
		question:
			"Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
		options: ["var", "let", "const", "static"],
		correctAnswer: "const",
		category: "JavaScript",
	},
	{
		question:
			"How do you write 'Hello World' in an alert box using JavaScript?",
		options: [
			"msgBox('Hello World');",
			"alertBox('Hello World');",
			"alert('Hello World');",
			"msg('Hello World');",
		],
		correctAnswer: "alert('Hello World');",
		category: "JavaScript",
	},
	{
		question:
			"Which operator is used for strict equality comparison (checks value and type) in JavaScript?",
		options: ["==", "=", "===", "!="],
		correctAnswer: "===",
		category: "JavaScript",
	},
	{
		question: "How do you call a function named 'myFunction' in JavaScript?",
		options: [
			"call function myFunction();",
			"myFunction();",
			"call myFunction();",
			"execute myFunction();",
		],
		correctAnswer: "myFunction();",
		category: "JavaScript",
	},
	{
		question:
			"Which JavaScript method is used to select an HTML element by its ID?",
		options: [
			"document.querySelector()",
			"document.getElementByClass()",
			"document.getElementById()",
			"document.getElement()",
		],
		correctAnswer: "document.getElementById()",
		category: "JavaScript",
	},
	{
		question: "What is the purpose of a 'for' loop in programming?",
		options: [
			"To declare a variable",
			"To execute a block of code repeatedly",
			"To make a decision based on a condition",
			"To define a function",
		],
		correctAnswer: "To execute a block of code repeatedly",
		category: "Programming",
	},
	{
		question: "In programming, what is an 'algorithm'?",
		options: [
			"A syntax error",
			"A data type",
			"A step-by-step procedure for solving a problem",
			"A reserved keyword",
		],
		correctAnswer: "A step-by-step procedure for solving a problem",
		category: "Programming",
	},
	{
		question: "Which data type would you use to store a whole number like 42?",
		options: ["String", "Boolean", "Float", "Integer"],
		correctAnswer: "Integer",
		category: "Programming",
	},
	{
		question: "What does the 'if' statement allow a program to do?",
		options: [
			"Repeat a block of code",
			"Store multiple values",
			"Perform an action only if a condition is true",
			"Define a reusable block of code",
		],
		correctAnswer: "Perform an action only if a condition is true",
		category: "Programming",
	},
	{
		question: "What is 'debugging' in programming?",
		options: [
			"Writing code faster",
			"The process of finding and fixing errors in code",
			"Adding comments to code",
			"Compiling the code",
		],
		correctAnswer: "The process of finding and fixing errors in code",
		category: "Programming",
	},
];

const timer = document.querySelector(".timer");
const questionElement = document.querySelector(".quiz-question");
const options = document.querySelector(".quiz-options");
const questionsDoneEl = document.querySelector(".questions-done");
const totalQuestionsEl = document.querySelector(".total-questions");
const quizStartContainer = document.querySelector(".quiz-start");
const startBtn = document.querySelector(".start-btn");
const quiz = document.querySelector(".quiz");
const scoreCounter = document.querySelector("#quiz-score-counter");
const nextBtn = document.querySelector(".quiz-next");
const restartBtn = document.querySelector("#restart-btn");
const quizResult = document.querySelector(".quiz-result");

// --- Quiz State Variables ---
let firstQuestionIndex = 0;
let score = 0;
let timerInterval;
let totalQuestions = questions.length;
let questionsDone;
let timeLeft = 0; // Initial time in seconds

function startQuiz() {
	firstQuestionIndex = 0;
	score = 0;
	timeLeft = 120;

	showQuestion();
	startTimer();
}

function showQuestion() {
	const currentQuestion = questions[firstQuestionIndex];
	questionElement.textContent = currentQuestion.question;
	options.textContent = "";

	currentQuestion.options.forEach((option) => {
		const button = document.createElement("button");
		const span = document.createElement("span");

		// add classnames to the elements
		button.classList.add("option-btn");

		// Append elements
		span.textContent = option;
		button.appendChild(span);

		// Check if option === correct answer
		if (option === currentQuestion.correctAnswer) {
			button.dataset.correct = true;
		}

		// Add a click event-listener to the button and appends options to options list
		button.addEventListener("click", selectAnswer);
		options.appendChild(button);
		nextBtn.textContent = "Next Question";
	});
}
function startTimer() {
	clearInterval(timerInterval);
	timer.textContent = timeLeft;
	timerInterval = setInterval(() => {
		timeLeft--;
		timer.textContent = timeLeft;

		if (timeLeft <= 0) {
			clearInterval(timerInterval);
			handleTimeout();
		}
	}, 1000);
}

function handleTimeout() {
	showResult(); // Handle case when time runs out
}

function selectAnswer(e) {
	const targetedOption = e.target;
	const isCorrect = targetedOption.dataset.correct === "true";

	// Disable all buttons after selection
	Array.from(options.children).forEach((option) => {
		setButtonStatus(option, option.dataset.correct === "true");
		option.disabled = true; // Disable button
	});

	// Check conditions
	if (isCorrect) {
		score = score + 1;
		scoreCounter.textContent = score;
	} else {
		scoreCounter.textContent = score;
	}
}

function setButtonStatus(element, isCorrect) {
	clearStatusClass(element);
	const correct = document.createElement("span");
	correct.classList.add("btn-icon");
	correct.innerHTML = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  	<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
	</svg>
	`;

	const incorrect = document.createElement("span");
	incorrect.classList.add("btn-icon");
	incorrect.innerHTML = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  	<path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
	</svg>
`;

	if (isCorrect) {
		element.classList.add("is-correct"); // Highlight correct answer
		element.appendChild(correct);
	} else {
		element.classList.add("is-wrong"); // Highlight incorrect answers
		element.appendChild(incorrect);
	}
}

// Helper function to clear existing status classes
function clearStatusClass(element) {
	element.classList.remove("is-correct");
	element.classList.remove("is-wrong");
}

function showResult() {
	clearInterval(timerInterval);
	// quizStartContainer.classList.add("inactive");
	quiz.classList.add("inactive");
	quizResult.classList.remove("inactive");
	quizResult.classList.add("active");

	const totalQuestions = document.querySelector("#total-questions");
	const finalScore = document.querySelector("#final-score");

	totalQuestions.textContent = questions.length;
	finalScore.textContent = score;
}

// Event Listeners
// Start quiz Button event listener
startBtn.addEventListener("click", () => {
	// Start quiz on click
	startQuiz();

	// Hides the start button and shows the quiz on click
	quizStartContainer.classList.add("inactive");
	quiz.classList.add("active");
	firstQuestionIndex = firstQuestionIndex + 1;
	questionsDoneEl.textContent = firstQuestionIndex;
	totalQuestionsEl.textContent = totalQuestions;
});

restartBtn.addEventListener("click", () => {
	// Start quiz on click
	startQuiz();

	// Hides the start button and shows the quiz on click
	quiz.classList.remove("inactive");
	quizResult.classList.add("inactive");
	firstQuestionIndex = firstQuestionIndex + 1;
	questionsDoneEl.textContent = firstQuestionIndex;
	totalQuestionsEl.textContent = totalQuestions;
	scoreCounter.textContent = 0;
});

// Next Button event listener
nextBtn.addEventListener("click", () => {
	firstQuestionIndex = firstQuestionIndex + 1;
	questionsDoneEl.textContent = firstQuestionIndex;

	if (firstQuestionIndex < questions.length) {
		showQuestion();
	} else if (firstQuestionIndex === questions.length) {
		showQuestion();
		nextBtn.textContent = "Submit Test";
	} else {
		showResult();
	}
});
