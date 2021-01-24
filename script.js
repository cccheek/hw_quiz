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
var questionNext = 0;
var score = 0;
var wrongAns = 0;

// create five questions with four possible answers and correct answer
var qAndA = [
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

//listening to start quiz button
startBtn.addEventListener("click", beginQuiz);

//start timer and hides start page when quiz has begun
function beginQuiz() {

   //hide start page
   startPage.style.display = "none";

   // display question page
   questionBody.style.display = "block";
   questionText.style.display = "block";

   //start timer
      setTimer();

      //populate questions
      askQuestion();

      //listen for clicks
      answerListen();
};

//timer
var timeEl = document.body.children[5]
var secondsLeft = 60;

function setTimer() {
   //create countdown timer
   var countDown = setInterval(function (){
      //countdown
      secondsLeft--;
      //display on page
      timeEl.textContent = secondsLeft;
      //stops timer at 0
      if (secondsLeft === 0) {
         clearInterval(countDown);

      }
      //counts by 1 second
   }, 1000);

}




// listen for answer buttons and update score accordingly
function answerListen() {
   // event listener for answer button
   answer1.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         //   console.log(userChoice, typeof userChoice);
         //   console.log(correctA, typeof correctA);
         score++;
         askQuestion();
      } else {
         //   console.log(userClick);
         //   console.log(correctA);
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer2.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         //   console.log(userChoice);
         //   console.log(correctA);
         score++;
         askQuestion();
      } else {
         //   console.log(userChoice);
         //   console.log(correctA);
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer3.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         //   console.log(userClick);
         //   console.log(correctA);
         score++;
         askQuestion();
      } else {
         //   console.log(userClick);
         //   console.log(correctA);
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer4.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      ///check if user choice is correct
      if (userChoice === correctA) {
         //   console.log(userChoice);
         //   console.log(correctA);
         score++;
         askQuestion();
      } else {
         //   console.log(userChoice);
         //   console.log(correctA);
         wrongAns++;
         askQuestion();
      }
      
   });
   
};


// move to next question
function askQuestion() {
   //target elements to update
   var qNum = document.querySelector("#question-number");
   // var text = document.querySelector("#question-text");

   //SHOULD present question text
   questionText.textContent = qAndA[questionNext.question];
   //presents question number above q
   qNum.textContent = (questionNext + 1);

   //loop to update answer buttons
   for (i = 0; i < 4; i++) {
       //target the button
       var button = document.querySelector("#answer" + (i + 1));
       //update the text
       button.textContent = qAndA[questionNext].answer[i];
   }

   questionNext++;

}

