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

export default questions;
