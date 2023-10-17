var startbutton = document.querySelector("#startbutton")
var startcontainer = document.querySelector(".container")
var questionone = document.querySelector(".question1")
var firstoption = document.querySelector("#option1")
var secondoption = document.querySelector("#option2")
var thirdoption = document.querySelector("#option3")
var fouroption = document.querySelector("#option4")
var questiontext = document.querySelector("#questiontext")

var currentIndex = 0;

var questions = [
    {
        text: "Which METHOD selects all elements?",
        choices: ["querySelector", "append", "querySelectorAll", "appendParent"],
        correct: "2"
    },
    {
        text: "Which one of these is CamelCase?",
        choices: ["Method", "VARIABLE", "ke-bab", "textContent"],
        correct: "3"
    },
    {
        text: "How do you querySelect an ID?",
        choices: ["$", "#", "&&", "."],
        correct: "1"
    }
]



function start(event){
    questionone.style.display= "block"
    startcontainer.style.display= "none"

    showQuestion()
    //show choices
}

startbutton.addEventListener("click" , start)


// function for changing the values on the question container
function showQuestion() {
    questiontext.textContent = questions[currentIndex].text
    firstoption.textContent = questions[currentIndex].choices[0]
    secondoption.textContent = questions[currentIndex].choices[1]
    thirdoption.textContent = questions[currentIndex].choices[2]
    fouroption.textContent = questions[currentIndex].choices[3]
}

function clickanswer(event){
    //  functionality for checking the answer
if (questions[currentIndex].choices[questions[currentIndex].correct]== event.target.textContent){

}else{

    secondsLeft-= 3;
}

//let answer = event.target.textContent;


//

// else deduct time move onto next question



    //  move to next question
    currentIndex++;
    showQuestion();
    
}

firstoption.addEventListener("click", clickanswer)
secondoption.addEventListener("click", clickanswer)
thirdoption.addEventListener("click", clickanswer)
fouroption.addEventListener("click", clickanswer)

var secondsLeft = 20;
var timeEl = document.querySelector("#time");

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time =" + secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        return leaderBoardend;
      }
    }, 1000);
}

function leaderboard(event){
    startcontainer.style.display= "none"
    questionone.style.display= "none"
    leaderboardend.style.display= "block"


}