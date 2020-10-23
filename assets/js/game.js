


//// Node

  const question = document.getElementById("question");
  const choices = Array.from(document.getElementsByClassName("choice-text"));
  const questionCounterText = document.getElementById('questionCounter');
  const scoreText = document.getElementById('score');


  var answer_array = [];
  let currentQuestion = {};
  let acceptingAnswers = false;
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];

  const CORRECT_BONUS = 10;




// this variable stores the array extracted from the Session object    
var jsarray = JSON.parse(sessionStorage.getItem("jsArray"));

const MAX_QUESTIONS = jsarray.results.length;



// from here it starts building the object of Questions, Answer, and Choices

let question_array = [];

question_array = jsarray.results.map( arr => {
    const formattedQuestion = {
        question : arr.question
    };
    const answerChoices = [... arr.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
    answerChoices.splice(formattedQuestion.answer - 1, 0, arr.correct_answer);
    
    answerChoices.forEach((choice,index) => {
        formattedQuestion['choice'+(index + 1)] = choice;
    })
    
    return formattedQuestion;
       
    
        
})
    

// This function starts the quiz
  startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [... question_array];
      getNewQuestion();
  }

 

  //fill new questions from the questionsArray into the page;
  getNewQuestion = () => {

        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            return window.location.assign('end.html');
        }
        questionCounter++;

        questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS;

       const questionIndex = Math.floor(Math.random()*availableQuestions.length);
       currentQuestion = availableQuestions[questionIndex];
       question.innerText = currentQuestion.question;

       choices.forEach( Element => {
           const number = Element.dataset['number']; 
           Element.innerText = currentQuestion['choice'+number];
       })


       availableQuestions.splice(questionIndex,1);

       acceptingAnswers = true;

       const final_score = document.getElementById('score');
       sessionStorage.setItem("score", final_score.innerText);


       setInterval(5000);

 }

// check for the correct choice

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }



        

        const final_score = document.getElementById('score');
        sessionStorage.setItem("score", final_score.innerText);

        setTimeout(() => {
            
            getNewQuestion();
        }, 1000);


    })
})

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};



    



 startGame();













