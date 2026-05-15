const quizData = [

{
    question:"Which force pulls objects towards the center of the Earth?",
    options:["Magnets","Sun","Gravitational Force","Electromagnetic Force"],
    answer:"Gravitational Force"
},

{
    question:"What is the largest organ in the human body?",
    options:["Legs","Skin","Hands","Tongue"],
    answer:"Skin"
},

{
    question:"What is the Symbol representing? 'C'",
    options:["Iron","Carbon","Sulphur","Oxygen"],
    answer:"Carbon"
},

{
    question:"What is the only metal that is liquid at room temperature?",
    options:["Mercury","Iron","Potassium","Carbon"],
    answer:"Mercury"
},

{
    question:"What is the smallest unit of Matter?",
    options:["Particle","Atom","Silver","Oxygen"],
    answer:"Atom"
}

];

let currentQuestion = 0;
let score = 0;

let wrongAnswers = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");


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




function loadQuestion(){

    const currentQuiz = quizData[currentQuestion];

    questionElement.innerHTML = currentQuiz.question;

    optionsElement.innerHTML = "";

    currentQuiz.options.forEach(function(option){

        const optionDiv = document.createElement("div");

        optionDiv.classList.add("option");

        optionDiv.innerHTML = `
        
        <input type="radio" name="quiz" id="${option}">
        <label for="${option}">${option}</label>
        
        `;


        optionDiv.addEventListener("click", function(){

            checkAnswer(option);

        });

        optionsElement.appendChild(optionDiv);

    });

}




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




function showResult(){


    clearInterval(countdown);


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

loadQuestion();
