// Saving questions and answers to an object
const DATA = [
  {
    question: "Name the song and band that was the first music video played on MTV on August 1, 1981.",
    answers: [
      "'Video Killed the Radio Star' by The Buggle",
      "'Macarena' by Los Del Rio",
      "'Sultans of Swing' by Dire Straits",
      "'Call Me' by Blondie"
    ],
    correctAnswer: "On August 1, 1981 'Video Killed the Radio Star' by The Buggle had the honor of being the inaugural video of Music Television's first day on the air.",
    image: "images/b-and-b-livingroom-dance.gif",
    alt: "Beavis and Butthead doing a victory dance"
  },
  {
    question: "Name the album that was the first CD pressed in the United States.",
    answers: [
      "'Like a Virgin' by Madonna",
      "'A Kind of Magic' by Queen",
      "'Have a Nice Day' by Bon Jovi",
      "'Born in the USA' by Bruce Springsteen"
    ],
    correctAnswer: "In 1984 'Born in the USA' by Bruce Springsteen was the first CD made in the U.S. pressed at the opening of CBS Records CD production plant in Indiana.",
    image: "images/beavis-butthead-colored.gif",
    alt: "Beavis and Butthead headbanging"
  },
  {
    question: "What was the last US Number 1 hit by a Beatle?",
    answers: [
      "'Say Say Say' by George Harrison",
      "'I Got My Mind Set On You' by George Harrison",
      "'Long and Winding Road' by Paul McCartney",
      "'Photograph' by Ringo Starr"
    ],
    correctAnswer: "In January 1988 'I Got My Mind Set On You' by George Harrison topped the Billboard Chart featuring Ringo Starr on the drums.",
    image: "images/beavis-butthead-noshirt.gif",
    alt: "Beavis and Butthead headbanging with no shirts on"
  },
  {
    question: "What was the first band to have an album advertised on a billboard?",
    answers: [
      "The Doors",
      "Sex Pistols",
      "Rolling Stones",
      "Black Sabbath"
    ],
    correctAnswer: "In 1967, organized by Jac Holzman of Elektra Records, 'The Doors' was the first band ever to be marketed on a billboard sign for $1,200 a month.",
    image: "images/beavis-butthead-shower.gif",
    alt: "Beavis and Butthead showing off muscles in the shower"
  },
  {
    question: "Name the first artist to release an album exclusively on the internet.",
    answers: [
      "Prince",
      "Beyonce",
      "Michael Jackson",
      "Janet Jackson"
    ],
    correctAnswer: "In 1997 visionary Prince was the first major artist to release an album exclusively on the internet called 'Crystal Ball'.",
    image: "images/beavis-butthead-colored-2.gif",
    alt: "Beavis and Butthead headbanging in school"
  },
  {
    question: "What was the first rock ’n’ roll song to sell over one million copies?",
    answers: [
      "'Can’t Help Falling in Love' by Elvis Presley",
      "'The Fat Man' by Fats Domino",
      "'Great Balls Of Fire' by Jerry Lee Lewis",
      "'Blue Suede Shoes' by Carl Perkins"
    ],
    correctAnswer: "'The Fat Man' by Fats Domino was the first rock ‘n’ roll song to sell one million copies and is also believed to be the first rock ‘n’ roll song ever.",
    image: "images/beavis-butthead-bootyquake.gif",
    alt: "Beavis and Butthead doing a victory dance"
  },
  {
    question: "Name the only recording artist in history to have a Number 1 album in each of six consecutive decades.",
    answers: [
      "Frank Sinatra",
      "Nat King Cole",
      "Barbra Streisand",
      "Tony Bennett"
    ],
    correctAnswer: "Known as the best-selling female recording artist in history, Barbra Streisand has managed to have a Number 1 album in six consecutive decades.",
    image: "images/b-and-b-cashmachine.gif",
    alt: "Beavis and Butthead watching money pour out of cash-machine"
  },
  {
    question: "Name the only rock ’n’ roll song to reach US chart Number 1 spot twice.",
    answers: [
      "'Stand By Me' by Ben E. King",
      "'Unchained melody' by the Righteous Brothers",
      "'The Twist' by Chubby Checker",
      "'I Will Always Love You' by Whitney Houston"
    ],
    correctAnswer: "After holding the No. 1 spot in September 1960, 'The Twist' by Chubby Checker fell off the charts a few months later. Only to climb to No. 1 again in January 1962.",
    image: "images/b-and-b-livingroom-dance.gif",
    alt: "Beavis and Butthead doing a victory dance"
  },
  {
    question: "Name the band that has had the same original line-up of members for over 45 years.",
    answers: [
      "Rolling Stones",
      "Black Sabbath",
      "The Jackson Family",
      "ZZ Top",
    ],
    correctAnswer: "From 1970 to present, the original trio William F. Gibbons, Joe Michael Hill and Frank Beard still remain in ZZ Top - one of the most recognizable bands in the world.",
    image: "images/beavis-butthead-colored-2.gif",
    alt: "Beavis and Butthead headbanging"
  },
  {
    question: "What is the most downloaded song recorded in the 20th century?",
    answers: [
      "'Black or White' by Michael Jackson",
      "'Don’t Let The Sun Go Down On Me' by Elton John",
      "'Firestarter' by The Prodigy",
      "'Don’t Stop Believin’' by Journey"
    ],
    correctAnswer: "'Don’t Stop Believin’' by Journey has digital sales nearing four and a half million and thus making it officially the most downloaded song ever recorded in the 20th century.",
    image: "images/beavis-butthead-noshirt.gif",
    alt: "Beavis and Butthead headbanging with no shirts on"
  }
];

// store question number
let questionNumber = 0;

// store score
let score = 0;

//generate question form
function generateQuestion () {
  if (questionNumber < DATA.length) {
    return `<form><fieldset><legend id="quiz-question"><h2>${DATA[questionNumber].question}</h2></legend>
    <label for="answer1">
      <input type="radio" id="answer1" aria-labelledby="quiz-question" 
      value="${DATA[questionNumber].answers[0]}" name="answer" required>
      <span>${DATA[questionNumber].answers[0]}</span>
    </label>
    <label for="answer2">
      <input type="radio"  id="answer2" aria-labelledby="quiz-question" 
      value="${DATA[questionNumber].answers[1]}" name="answer" required>
      <span>${DATA[questionNumber].answers[1]}</span>
    </label>
    <label for="answer3">
      <input type="radio"  id="answer3" aria-labelledby="quiz-question" 
      value="${DATA[questionNumber].answers[2]}" name="answer" required>
      <span>${DATA[questionNumber].answers[2]}</span>
    </label>
    <label for="answer4">
      <input type="radio" id="answer4" aria-labelledby="quiz-question" 
      value="${DATA[questionNumber].answers[3]}" name="answer" required>
      <span>${DATA[questionNumber].answers[3]}</span>
    </label>
    <button class="submitButton">SUBMIT</button>
    </fieldset></form>`;
  } else {
      renderResults();
      restartQuiz();
      $('.keepingScore').addClass('hidden');
    }
}

// generate correct answer html
function generateCorrectView() {
  return `<img src="${DATA[questionNumber].image}" alt="Beavis and Butt-Head no-shirt headbanging">
        <h2>YOU NAILED IT!</h2>
        <p> 
          ${DATA[questionNumber].correctAnswer}</p>
          <button role="button" class="nextQuestionBtn">NEXT QUESTION</button>`;
}

// generate wrong answer html
function generateWrongView() {
  return `<img src="images/beavis-butthead-electrified.gif" alt="Beavis and Butt-Head are getting fried">
        <h2>WRONG ANSWER!</h2>
        <p> 
          ${DATA[questionNumber].correctAnswer}</p>
          <button role="button" class="nextQuestionBtn">NEXT QUESTION</button>`;
}

//update the score
function addToScore() {
  score++;
}

function updateScore() {
  addToScore();
  $('.score').text(score);
}

// increment the question number
function incrementQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

//start quiz
function startQuiz() {
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').addClass('hidden');
    $('.headerImage').addClass('hidden');
    $('.questionForm').removeClass('hidden');
    $('.keepingScore').removeClass('hidden');
    $('.questionNumber').text(1);
  });
}

// render the first question
function renderQuestion() {
  $('.questionForm').html(generateQuestion());
}

// correct answer view
function renderCorrectView() {
  $('.notifyCorrectAnswer').html(generateCorrectView());
}

function correctAnswerConfirmation() {
  $('.questionForm').addClass('hidden');
  renderCorrectView();
  $('.notifyCorrectAnswer').removeClass('hidden');
}

// wrong answer view
function renderWrongView() {
  $('.notifyWrongAnswer').html(generateWrongView());
}

function wrongAnswerConfirmation() {
  $('.questionForm').addClass('hidden');
  renderWrongView();
  $('.notifyWrongAnswer').removeClass('hidden');
}

// change view depending on the submitted answer and question number
function selectedAnswer() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${DATA[questionNumber].correctAnswer}`;

    if (correctAnswer.includes(answer)) {
      if (questionNumber === 9) {
        correctAnswerConfirmation();
        $('.keepingScore').addClass('hidden');
        $('.notifyCorrectAnswer img').css('margin-top', '15px');
        updateScore();
        $('.notifyCorrectAnswer button').replaceWith(`<button role="button" class="nextQuestionBtn">VIEW THE RESULTS</button>`);
      } else if (questionNumber < 9) {
        correctAnswerConfirmation();
        updateScore();
      }
    } else if (!correctAnswer.includes(answer)) {
      if (questionNumber === 9) {
        wrongAnswerConfirmation();
        $('.keepingScore').addClass('hidden');
        $('.notifyWrongAnswer img').css('margin-top', '15px');
        $('.notifyWrongAnswer button').replaceWith(`<button role="button" class="nextQuestionBtn">VIEW THE RESULTS</button>`);
      } else if (questionNumber < 9) {
        wrongAnswerConfirmation();
      }
    } 
  });
}

// moving over to next question
function renderNextQuestion() {
  $('.feedbackView').on('click', '.nextQuestionBtn', function (event) {
    incrementQuestionNumber();
    renderQuestion();
    $('.notifyCorrectAnswer').addClass('hidden');
    $('.notifyWrongAnswer').addClass('hidden');
    $('.questionForm').removeClass('hidden');
    selectedAnswer();
  });
}

// show the results
function renderResults() {
  if (score >= 8) {
    $('.questionForm form').replaceWith(`<div class="results center">
        <img src="images/beavis-butthead-colored.gif" alt="Beavis and ButtHead heavy headbanging">
        <h2>HELL YEAH!</h2>
        <p><span>Your result:</span> ${score} out of 10.<br>You rocked! Get ready to fight off the hords of groupies that follow.</p>
      </div>`);
  } else if (score < 8 && score >= 4) {
    $('.questionForm form').replaceWith(`<div class="results center">
        <img src="images/beavis-butthead-colored-trumming.gif" alt="Beavis and Butt-Head trumming">
        <h2>WARMING UP</h2>
        <p><span>Your result:</span> ${score} out of 10.<br>Better than the last guy but still a bit early for to go professional.</p>
      </div>`);
  } else {
    $('.questionForm form').replaceWith(`<div class="results center">
        <img src="images/beavis-butthead-old.gif" alt="Old Beavis and Butthead looking static">
        <h2>NOT SO GOOD</h2>
        <p><span>Your result:</span> ${score} out of 10.<br>Don't feel stressed, but we were not impressed. Give up or try again?</p>
      </div>`);
  }
  $('.results').append(`<button role="button" class="restartQuiz">PLAY AGAIN</button>`)
}

// reload page 
function restartQuiz() {
  $('.restartQuiz').on('click', function (event) {
    location.reload();
  });
}


//iniate quiz 
function initQuiz() {
  startQuiz();
  renderQuestion();
  selectedAnswer();
  renderNextQuestion();
}

$(initQuiz);
