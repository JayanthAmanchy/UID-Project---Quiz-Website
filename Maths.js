const quizData = [

{
    question:"What is 90-35?",
    options:["55","45","40","50"],
    answer:"55"
},

{
    question:"How many sides does a decagon have?",
    options:["6","8","12","10"],
    answer:"10"
},

{
    question:"What is the square root of 64?",
    options:["64","12","8","3"],
    answer:"8"
},

{
    question:"What is 9x7?",
    options:["33","53","63","103"],
    answer:"63"
},

{
    question:"What is value of pi(in decimals)?",
    options:["22.7","2.33","22/7","3.14"],
    answer:"3.14"
}

];

let currentQuestion = 0;
let score = 0;

let wrongAnswers = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");


// Timer

let timeLeft = 30;

const timer = document.getElementById("timer");

let countdown = setInterval(function(){

    timeLeft--;

    timer.innerHTML = "Time Left: " + timeLeft + "s";

    if(timeLeft <= 0){
        clearInterval(countdown);
        showResult();
    }

},1000);


// Load Question

function loadQuestion(){

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerHTML = currentQuiz.question;

    optionsElement.innerHTML = "";

    currentQuiz.options.forEach(function(option){

        const optionDiv = document.createElement("div");

        optionDiv.classList.add("option");

        optionDiv.innerHTML = `
        <input type="radio" name="quiz" id="${option}" value="${option}">
        <label for="${option}">${option}</label>
        `;

        // Click event

        optionDiv.addEventListener("click", function(){
            checkAnswer(option);
        });

        optionsElement.appendChild(optionDiv);

    });

}


// Check Answer

function checkAnswer(selectedOption){

    const correctAnswer = quizData[currentQuestion].answer;

    if(selectedOption === correctAnswer){

        score++;

    }else{

        wrongAnswers.push({

            question:quizData[currentQuestion].question,

            yourAnswer:selectedOption,

            correctAnswer:correctAnswer

        });

    }

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();

    }else{

        showResult();

    }

}


// Show Result

function showResult(){

    // Stop timer
    clearInterval(countdown);

    // Hide timer
    timer.style.display = "none";

    questionElement.innerHTML = "Quiz Completed!";

    optionsElement.innerHTML = "";

    resultElement.innerHTML = `

    <h2>Your Score: ${score}/${quizData.length}</h2>

    `;

    if(wrongAnswers.length > 0){

        resultElement.innerHTML += "<h3>Wrong Answers:</h3>";

        wrongAnswers.forEach(function(item){

            resultElement.innerHTML += `

            <p>
            <span class="wrong">Question:</span>
            ${item.question}
            </p>

            <p>
            Your Answer: ${item.yourAnswer}
            </p>

            <p class="correct">
            Correct Answer: ${item.correctAnswer}
            </p>

            <hr>

            `;

        });

    }else{

        resultElement.innerHTML += `

        <p class="correct">
        Excellent! All answers are correct 🎉
        </p>

        `;
    }
}


// Start Quiz

loadQuestion();