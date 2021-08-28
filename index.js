var readlinesync = require("readline-sync");

var score = 0;
var username = readlinesync.question('May I have your name please: ')
console.log("Welcome " + username + " to DO YOU KNOW Nakul");

function play(question , answer) {

  var userAnswer = readlinesync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    score++;
    console.log("Correct Answer")
  }

  else
  console.log("WRONG ANSWER");

  console.log("Your current score is: "+ score);
  console.log("-----------------")

}

var questions = [{
  question: "Where do I live? ",
  answer: "Delhi"
},
{
  question: "Who is my favourite superhero? ",
  answer: "IronMan"
},
{
  question: "What is my favourite sport? ",
  answer: "Cricket"
},
{
  question: "Where do I study? ",
  answer: "GGSIPU"
},
{
  question: "Who is my favourite mentor? ",
  answer: "Tanay Pratap"
}]

for(var i = 0 ; i < questions.length ; i ++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("Thanks for participating! Your Final Score is: " + score);