

var startPage = document.querySelector("#start-page");
var startBtn = document.querySelector("#start-button");
var questionBody = document.querySelector("#question-body");
var questionText = document.querySelector("#question-text")
var answerBody = document.querySelector("#answer-body");
var correctAnswer = document.querySelector("#correct-answer");
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var scorePage = document.querySelector("#score-page")
var timer = document.querySelector("#time")

var gameTimer;
var questionCount = 0;
var score = 0;
var wrongAns = 0;

// create five questions with four possible answers and correct answer
var questionAndAnswerOb = [
   {
      question: `Who said “I’m trying very hard not to connect with people right now.”`,
      answer: ["Alexis", "David", "Moira", "Stevie"],
      correct: "David"
   },
   {
      question: `Who said “Oh, I’d kill for a good coma right now.”`,
      answer: ["David", "Moira", "Stevie", "Johnny"],
      correct: "Moira"
   },
   {
      question: `Who said "But people love extreme vanity! And they love puppies!"`,
      answer: ["Alexis", "David", "Moira", "Johnny"],
      correct: "Alexis"
   },
   {
       question: `Who said "Hashtag, is that two words?"`,
       answer: ["Moira", "Stevie", "Johnny", "Alexis"],
       correct: "Johnny"
    },
    {
        question: `Who said "I'm incapable of faking sincerity."`,
        answer: ["Alexis", "David", "Moira", "Stevie"],
        correct: "Stevie"
    }
];

startBtn.addEventListener("click", beginQuiz);

function beginQuiz() {

   //hide start page
   startPage.style.display = "none";

   // display question page
   questionBody.style.display = "block";

};