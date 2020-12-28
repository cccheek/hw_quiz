

//create opening screen welcoming user to quiz
//create button to start quiz
//TODO: create function that presents question and answers when "start quiz" button is pushed
var startBtn = document.querySelector("#start")

startBtn.addEventListener("click", function(){
   console.log("start!")

})






// function startQuiz()

// create five questions with four possible answers and correct answer
var questionsAndAnswerOb = [
   {

      question1: `Who said “I’m trying very hard not to connect with people right now.”`,
      answers1: ["Alexis", "David", "Moira", "Stevie"],
      correct1: "David"
   },
   {

      question2: `Who said “Oh, I’d kill for a good coma right now.”`,
      answers2: ["David", "Moira", "Stevie", "Johnny"],
      correct2: "Moira"
   },
   {

      question3: `Who said "But people love extreme vanity! And they love puppies!"`,
      answers3: ["Alexis", "David", "Moira", "Johnny"],
      correct3: "Alexis"
   },
   {

      question4: `Who said "Hashtag, is that two words?"`,
      answers4: ["Moira", "Stevie", "Johnny", "Alexis"],
      correct4: "Johnny"
   },
   {


      question5: `Who said "I'm incapable of faking sincerity."`,
      answers5: ["Alexis", "David", "Moira", "Stevie"],
      correct5: "Stevie"
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