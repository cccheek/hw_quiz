

//create opening screen welcoming user to quiz with start button
//create button to start quiz in html
//TODO: create function that presents question and answers when "start quiz" button is pushed
var startBtn = document.querySelector("#start-button")
var startQuiz = document.querySelector("#start-quiz")

startBtn.addEventListener("click", function(event){
  
   // console.log("start!")


// function startQuiz()

// create five questions with four possible answers and correct answer
var questionsAndAnswerOb = [
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


var quizBodyDiv = document.getElementById("")



//TODO: create a timer set to start when user starts quiz

// var timeEl = document.body.children[5]
// var secondsLeft = 60;

// function setTimer() {
//    //create countdown timer
//    var countDown = setInterval(function (){
//       //countdown
//       secondsLeft--;
//       //display on page
//       // timeEl.textContent = secondsLeft;
//       //stops timer at 0
//       if (secondsLeft === 0) {
//          clearInterval(countDown);
         
//       }
//       //counts by 1 second
//    }, 1000);

// }
// //calls the setTimer function
// setTimer();

    //TODO: when user gets question wrong take 5 seconds from timer
        //TODO:when user gets question right give 5 seconds to timer


//TODO:create scoreboard
        //TODO: log users score to local and post to scoreboard