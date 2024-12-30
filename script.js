/*Add your JavaScript here*/
var proScore = 0; //protagonist score
var antScore = 0; //antagonist score

var questionCount= 0 /* number of answers clicked on*/

//Store HTML elements using the DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");
var displayResult = document.getElementById("displayResult");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//Listen for click on answer buttons and call function if clicked

q1a1.addEventListener("click", pro);
q1a2.addEventListener("click", ant);

q2a1.addEventListener("click", ant);
q2a2.addEventListener("click", pro);

q3a1.addEventListener("click", pro);
q3a2.addEventListener("click", ant);

q4a1.addEventListener("click", ant);
q4a2.addEventListener("click", pro);

q5a1.addEventListener("click", pro);
q5a2.addEventListener("click", ant);

//Restart the quiz using the restart button
restart.addEventListener("click", restartQuiz);

//functions

function pro() {
  proScore += 1;
  questionCount += 1;

  console.log("questionCount = " +questionCount + "proScore =" + proScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function ant() {
  antScore += 1;
  questionCount += 1;

  console.log("questionCount = " +questionCount + "antScore =" +antScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }
}

//return the result

function updateResult() {
  //click button to update result
  displayResult.addEventListener("click", display);
}

function display() {
   if (proScore >= 3) {
    result.innerHTML = "You are a Protagonist!";
    console.log("You are a protagonist!");
  } else if (antScore >= 3) {
    result.innerHTML = "You are an Antagonist!"
    console.log("You are an antagonist!");
  }
}

//restart quiz
function restartQuiz() {
  proScore = 0;
  antScore = 0;
  questionCount = 0;
  result.innerHTML = "You are ...";

  console.log("antScore = 0");
  console.log("proScore = 0");
  console.log("questionCount = 0");
  enableButton();
}

//Disable buttons
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

//change button color when clicked
function changeButtonQ1(){
  q1a1.style.backgroundColor = "grey";
  q1a2.style.backgroundColor = "grey";
}

function changeButtonQ2(){
  q2a1.style.backgroundColor = "grey";
    q2a2.style.backgroundColor = "grey";
}

function changeButtonQ3(){
  q3a1.style.backgroundColor = "grey";
  q3a2.style.backgroundColor = "grey";
}

function changeButtonQ4(){
  q4a1.style.backgroundColor = "grey";
  q4a2.style.backgroundColor = "grey";
}

function changeButtonQ5(){
  q5a1.style.backgroundColor = "grey";
  q5a2.style.backgroundColor = "grey";
}

//change button color back to goldenrod

function buttonColorQ1(){
  q1a1.style.backgroundColor = "goldenrod";
  q1a2.style.backgroundColor = "goldenrod";
}

function buttonColorQ2(){
  q2a1.style.backgroundColor = "goldenrod";
  q2a2.style.backgroundColor = "goldenrod";
}

function buttonColorQ3(){
  q3a1.style.backgroundColor = "goldenrod";
  q3a2.style.backgroundColor = "goldenrod";
}

function buttonColorQ4(){
  q4a1.style.backgroundColor = "goldenrod";
  q4a2.style.backgroundColor = "goldenrod";
}

function buttonColorQ5(){
  q5a1.style.backgroundColor = "goldenrod";
  q5a2.style.backgroundColor = "goldenrod";
}

//disable question functions
function disableQ1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  changeButtonQ1();
}

function disableQ2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
  changeButtonQ2();
}

function disableQ3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
  changeButtonQ3();
}

function disableQ4(){
  q4a1.disabled = true;
  q4a2.disabled = true;
  changeButtonQ4();
}

function disableQ5(){
  q5a1.disabled = true;
  q5a2.disabled = true;
  changeButtonQ5();
}

function enableButton (){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;

  buttonColorQ1();
  buttonColorQ2();
  buttonColorQ3();
  buttonColorQ4();
  buttonColorQ5();
}

