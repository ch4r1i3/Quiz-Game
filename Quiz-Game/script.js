var strCard = document.querySelector(".intro");
var strBtn = document.getElementById("strBtn");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var score = 0
var endpart = document.getElementById("endpart");
var finalScore = document.getElementById("score");
var timeLeft = 90;
var newScore = document.getElementById("olhs");
var questions =  [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: ['<script>','<scripting>','<js>','<javascript>'],
		correctAnswer: '<script>'
	},
	{
		question: "Where is the correct place to insert a JavaScript?",
		answers: [ 'The <body> section.', 'The <head> section.', 'Both the <head> and <body> section are correct.', 'None of those two'],
		correctAnswer: 'Both the <head> and <body> section are correct.'
	},
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ['<srcript name = xxx.js>', '<script href = xxx.js>', '<script src = xxx.js.>','None of the above'],
        correctAnswer:'<script src = xxx.js>'
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ['alert("HelloWorld)', 'msg("HelloWorld)','alertBox("HelloWorld)','msgBox("HelloWorld)'],
        correctAnswer:'alert("HelloWorld)'
    },
];


//  Here is the start button function//
strBtn.addEventListener("click", countDown);

strBtn.addEventListener("click", function() {
    strCard.style.display = "none";
    question.style.display = "flex";
    optionsBtn.style.display = "flex";
})


function endGame() {
    if (timeLeft === 0) {
    document.getElementById(quiz).style.display = "none"

} else {
    console.log("gameover")
}
}

//   This funtion sets the timer //
function countDown() {

    var timeInterval = setInterval(function () {
    timer.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 1 || indexQuestion >= questions.length) {
    timer.textContent = "0";
    clearInterval(timeInterval);
    quiz.style.display = "none";
    endpart.style.display = "block";
    }
    }, 1000);
}

// Questions Section //
let indexQuestion = 0

loadQuestion(indexQuestion)

function loadQuestion(index) {
    objectQuestion = questions[index];
    console.log(objectQuestion) 
    let options = objectQuestion.answers
    console.log(options)
    document.getElementById("question").innerHTML = objectQuestion.question
    document.getElementById("response1").innerHTML = options[0];
    document.getElementById("response2").innerHTML = options[1];
    document.getElementById("response3").innerHTML = options[2];
    document.getElementById("response4").innerHTML = options[3];
}

async function selectOption(index) {
let validation = options[index] === objectQuestion.answer
if (validation) {

    document.getElementById("answer").innerHTML = "Correct answer!"
    score++
} else {
    document.getElementById("answer").innerHTML = "Wrong answer!"
    score--
    timeLeft -= 10;
    timer.textContent = timeLeft;
}

indexQuestion++;

document.getElementById("points").innerHTML = score;
if (indexQuestion < questions.length) {
    loadQuestion(indexQuestion);
}

}


// This section corresponds to the submit button functionality
var submitbtn = document.getElementById("submit");

function saveToLocalStorage() {

    var userInput = document.getElementById("initials").value + ": " + score;
    var highScore = []
    if (localStorage.getItem("highScore")) {
    highScore = JSON.parse(localStorage.getItem("highScore"))
    }
    highScore.push(userInput)
    localStorage.setItem("highScore", JSON.stringify(highScore))
}

submitbtn.addEventListener("click", saveToLocalStorage)


// This functions adds info to the local storage
function addScores() {
        // newScore.innerHTML = ""
    var highScore = JSON.parse(localStorage.getItem("highScore"))
    for (i = 0; i < highScore.length; i++) {
    var newLi = document.createElement("li");
        newLi.textContent = highScore[i];
        newScore.append(newLi);
        newLi.style.backgroundColor = "grey";
        newLi.style.color = "white";
        newLi.style.marginBottom = "5px";
        newLi.style.width = "200px";

    var clearBtn = document.getElementById("clear");
        clearBtn.addEventListener("click", function () {
        newScore.remove(newLi[0])
    })
    }
}
// addScores()

//  This section sets the functionality of the finish button
var goBackBtn = document.getElementById("goback");
var hScore = document.getElementById("highScores")
var clearBtn = document.getElementById("clear");

// Highscore to record users performance
var viewHSbtn = document.getElementById("highScores");

