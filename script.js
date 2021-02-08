var startPage = document.querySelector("#start-page");
var startBtn = document.querySelector("#start-button");
var questionBody = document.querySelector("#question-body");
var qNum = document.querySelector("#question-number");
var qText = document.querySelector("#question-text");
var answerBody = document.querySelector("#answer-body");
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var scorePage = document.querySelector("#score-page")
var timer = document.querySelector("#countdown")
var bebeInfo = document.querySelector("#score-page")
var bebeNameBtn = document.querySelector("#submit-btn")
var bebeNameInput = document.querySelector("#bebe-name-input")

var secondsLeft = 30;
var questionNext = 0;
var score = 0;
var wrongAns = 0;

var bebeVal = JSON.parse(localStorage.getItem("bebeVal") || "[]");

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
    },
    {
        question: `Who said "Ahhhh EAT GLASS!"`,
        answer: ["Stevie", "David", "Johnny", "Moira"],
        correct: "David"
    },
    {
        question: `Who said "You are my Mariah"`,
        answer: ["David", "Alexis", "Patrick", "Moira"],
        correct: "Patrick"
    },
    {
        question: `Who said "Like Beyonce, I excel as a solo artist."`,
        answer: ["David", "Stevie", "Patrick", "Moira"],
        correct: "David"
    },
    {
        question: `Who said "I won't wear anything with an adhesive backing."`,
        answer: ["Alexis", "David", "Moira", "Johnny"],
        correct: "Moira"
    },
    {
        question: `Who said "Do I wear my fringed vest? Or, more importantly, do I wear anything under it?"`,
        answer: ["Moira", "Patrick", "Alexis", "Johnny"],
        correct: "Partick"
    }
];


// timer
function setTimer() {
   //create countdown timer
   var countDown = setInterval(function (){
      if (secondsLeft <0){
         secondsLeft = 0
      } else if (secondsLeft >0) {
         document.getElementById("countdown").innerHTML = secondsLeft+ " seconds left bebe!";
         secondsLeft--;
      } else {
         clearInterval(countDown);
         document.getElementById("score").innerHTML = "You got " +score+ " right!"
         //show score input
         bebeInfo.style.display = "block";
         //hide everything else
         questionBody.style.display = "none";
         qText.style.display = "none";
         answerBody.style.display = "none";
         timer.style.display = "none";

      }
      //take time for wrong answer
      if (wrongAns === 1) {
         secondsLeft -= 5;
         wrongAns--;
     }

      //counts by 1 second
   }, 1000);

   
}

//start timer and hides start page when quiz has begun
function beginQuiz() {
   
   //hide start page
   startPage.style.display = "none";
   
   // display question page
   questionBody.style.display = "block";
   qText.style.display = "block";

   //start timer
   setTimer();
   
   //populate questions
   askQuestion();
   
   //listen for clicks
   answerListen();
   
};

//listening to start quiz button
startBtn.addEventListener("click", beginQuiz);


// listen for answer buttons and update score accordingly
function answerListen() {
   // event listener for answer button
   answer1.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         score++;
         askQuestion();
      } else {
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer2.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         score++;
         askQuestion();
      } else {
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer3.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      //check if user choice is correct
      if (userChoice === correctA) {
         score++;
         askQuestion();
      } else {
         wrongAns++;
         askQuestion();
      }
      
   });
   
   answer4.addEventListener("click", function () {
      var userChoice = this.innerHTML;
      var correctA = qAndA[questionNext - 1].correct;
      ///check if user choice is correct
      if (userChoice === correctA) {
         askQuestion();
      } else {
         wrongAns++;
         askQuestion();
      }
      
   });
   
};

// move to next question
function askQuestion() {
   
   //present question text
   qText.textContent = qAndA[questionNext].question;
   //presents question number above q
   qNum.textContent = (questionNext + 1);

   //loop to update answer buttons
   for (i = 0; i < 4; i++) {
       //target button
       var button = document.querySelector("#answer" + (i + 1));
       //update text
       button.textContent = qAndA[questionNext].answer[i];
   }

   questionNext++;

}

bebeNameBtn.addEventListener("click", function(){
   event.preventDefault();

var bebeObject ={
   bebeName: bebeNameInput.value,
   bebeScore: score
};
//push user obj to user val array
bebeVal.push(bebeObject);

//save user obj to local storage
localStorage.setItem("bebeVal", JSON.stringify(bebeVal));

// i++

})
