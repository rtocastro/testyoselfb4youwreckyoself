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
        correct: "3"
    },
    {
        text: "2 + 2?",
        choices: ["4", "3", "2", "1"],
        correct: "4"
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

function clickanswer(){
    //  functionality for checking the answer



    //  move to next question
    currentIndex++;
    showQuestion();
    
}

firstoption.addEventListener("click", clickanswer)
secondoption.addEventListener("click", clickanswer)
thirdoption.addEventListener("click", clickanswer)
fouroption.addEventListener("click", clickanswer)