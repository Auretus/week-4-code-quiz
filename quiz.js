"use strict"; // complain when I use undeclared variables by mistake
// global variable declaration
var questionsLeft;
var timeLeft = 60;
var pointsRight = 5;
var score;

class quizQuestion {
  /* This class creates an object that contains a single question and multiple-choice answers, along with whether each answer is right or wrong
   */
  constructor(question) {
    /* argument: string
     * return: void
     * purpose: create an object of type quizQuestion
     */
    // assume the argument is the text of the question
    this.questionText = question;
    // make an array to store answer objects in
    this.answers = [];
  }
  addAnswer(answerText, isRight) {
    /* arguments: string, boolean
     * return: void
     * purpose: create and populate an answer object, and push it to the this.answers array
     */
    var thisAnswer = {
      // create the answer object with some dummy values
      text: "",
      rightAnswer: false
    };
    // store the answer text and whether it's a right answer in the appropriate object keys
    thisAnswer.text = answerText;
    thisAnswer.rightAnswer = isRight;
    // and push the answer object to the answers array
    this.answers.push(thisAnswer);
  }

  printQuestion() {
    /* argument: none
     * return value: string
     * purpose: return the text of the question
     */
    return this.questionText;
  }
  printAnswer(index) {
    /* argument: integer from 0 to (answers.length - 1)
     * return value: string
     * purpose: return the text of the selected answer
     */
    index = parseInt(index);
    return this.answers[index].text;
  }
  checkAnswer(index) {
    /* argument: integer from 0 to (answers.length - 1)
     * return value: boolean
     * purpose: check whether the answer is correct, and return the answer as a true/false value
     */
    index = parseInt(index);
    return this.answers[index].rightAnswer;
  }
}

// Now that we have a class constructor defined for quizQuestion, let's make some questions and store them in an array
var questionList = [];

// question 1
questionList.push(
  new quizQuestion("What character terminates a statement in JavaScript?")
);
questionList[questionList.length - 1].addAnswer(". (period)", false);
questionList[questionList.length - 1].addAnswer("; (semicolon)", true);
questionList[questionList.length - 1].addAnswer(": (colon)", false);
questionList[questionList.length - 1].addAnswer("/ (slash)", false);

// question 2
questionList.push(
  new quizQuestion(
    "Which array method calls a function once for each element in array?"
  )
);
questionList[questionList.length - 1].addAnswer("forEach()", true);
questionList[questionList.length - 1].addAnswer("for()", false);
questionList[questionList.length - 1].addAnswer("while()", false);
questionList[questionList.length - 1].addAnswer("every()", false);

// question 3
questionList.push(
  new quizQuestion("What functions does the '+' operator perform?")
);
questionList[questionList.length - 1].addAnswer(
  "addition (int) and concatenation (float, string)",
  false
);
questionList[questionList.length - 1].addAnswer(
  "addition (float) and concatenation (int, array)",
  false
);
questionList[questionList.length - 1].addAnswer(
  "addition (int, float) and concatenation (array)",
  false
);
questionList[questionList.length - 1].addAnswer(
  "addition (int, float) and concatenation (string)",
  true
);

// question 4
questionList.push(
  new quizQuestion("Which operator tests for <em>strict</em> equality?")
);
questionList[questionList.length - 1].addAnswer("=", false);
questionList[questionList.length - 1].addAnswer("==", false);
questionList[questionList.length - 1].addAnswer("===", true);
questionList[questionList.length - 1].addAnswer("!==", false);

// question 5
questionList.push(
  new quizQuestion(
    "Which loop statement should be used when you want to guarantee that the enclosed code block executes at least once?"
  )
);
questionList[questionList.length - 1].addAnswer("for()", false);
questionList[questionList.length - 1].addAnswer("while()", false);
questionList[questionList.length - 1].addAnswer("if() ... else", false);
questionList[questionList.length - 1].addAnswer("do ... while()", true);

// question 6
questionList.push(
  new quizQuestion(
    "Which of these values of x <em>does not</em> evaluate to <pre>false</pre>?"
  )
);
questionList[questionList.length - 1].addAnswer("x = 0", false);
questionList[questionList.length - 1].addAnswer('x = "0"', true);
questionList[questionList.length - 1].addAnswer("x = -0", false);
questionList[questionList.length - 1].addAnswer("x = null", false);

// question 7
questionList.push(
  new quizQuestion(
    'Does JavaScript support associative arrays (arrays with "named" indices)?'
  )
);
questionList[questionList.length - 1].addAnswer("No", true);
questionList[questionList.length - 1].addAnswer("Yes", false);
questionList[questionList.length - 1].addAnswer(
  "Only when the array is declared with the <pre>new Array()</pre> constructor",
  false
);
questionList[questionList.length - 1].addAnswer(
  "Yes, but not all browsers support this feature yet",
  false
);

// question 8
questionList.push(
  new quizQuestion(
    'Given the expression: <pre>var x = "5" + 5.0;</pre>, what value is stored in x?'
  )
);
questionList[questionList.length - 1].addAnswer("10", false);
questionList[questionList.length - 1].addAnswer("10.0", false);
questionList[questionList.length - 1].addAnswer('"55.0"', true);
questionList[questionList.length - 1].addAnswer('"55"', false);

// console.log(questionList);

// // question 9
// questionList.push(new quizQuestion(""));
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);

// // question 10
// questionList.push(new quizQuestion(""));
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);
// questionList[questionList.length - 1].addAnswer("",false);

// Document manipulation variables below
var spanQuestionsLeft = document.querySelectorAll(".questions-left");
var spanTimeLeft = document.querySelectorAll(".quiz-timer");
var spanPointsRight = document.querySelector(".right-answer");
var index;
questionsLeft = parseInt(questionList.length);
var questionNumber;
var questionDisplayed;
var questionsAnswered;
var answerChosen;
var answersRight;

// high score table
var highScoreTable;
var highScoreTable_stored;

// landing page prep
for (index = 0; index < spanQuestionsLeft.length; index++) {
  spanQuestionsLeft[index].textContent = questionsLeft;
}
for (index = 0; index < spanTimeLeft.length; index++) {
  spanTimeLeft[index].textContent = timeLeft + "s";
}
spanPointsRight.textContent = pointsRight;

$(document).ready(function() {
  // Once the prep is done, here's where the main game loop gets going
  $(".start-quiz").on("click", function() {
    // start the game
    $("#sub-head").empty();
    $("#question-block").empty();
    setTimer();
    questionNumber = 0;
    questionDisplayed = false;
    answerChosen = false;
    score = 0;
    questionsAnswered = 0;
    answersRight = 0;
    // console.log(questionList[questionNumber]);

    function setTimer() {
      //start the timer
      var timerInterval = setInterval(function() {
        timeLeft--;
        $(".quiz-timer").text(timeLeft + "s");
        if (!questionDisplayed && questionsLeft > 0) {
          displayQuestion(questionNumber);
          answerChosen = false;

          // event handler for the answer button
          $(".quiz-button").on("click", function() {
            if (answerChosen) return;
            // console.log("Button clicked!");
            var questionRight = $("<p>");
            if ($(this).attr("isRight")) {
              score += pointsRight;
              answersRight++;
              questionRight.text("Correct!");
            } else {
              if (timeLeft < 10) timeLeft = 0;
              timeLeft -= 10;
              questionRight.text("Wrong!");
            }
            answerChosen = true;
            questionsAnswered++;
            $("#question-block").append(questionRight);
            questionNumber++;
            questionsLeft--;
            // setTimeout(function() {
              questionDisplayed = false;
            // }, 1000);
          });
        }

        if (timeLeft <= 0 || questionsLeft <= 0) {
          clearInterval(timerInterval);
          $(".questions-left").text("n/a");
          
          $(".quiz-timer").text("n/a");
          processGameResults();
        }
      }, 1000);
    }
  });
  // Or, here's a shortcut to the high scores
  $(".view-highscores").on("click", function() {
    // go to the high scores display
  });

  function displayQuestion(questionNumber) {
    $("#sub-head").empty();
    $("#question-block").empty();
    $(".questions-left").text(questionsLeft);
    var h4 = $("<h4>");
    h4.text("Question " + (questionNumber + 1));
    $("#sub-head").append(h4);
    var questionBlock = $("#question-block");
    var thisQuestion = questionList[questionNumber];
    // console.log(thisQuestion);
    var p = $("<p>");
    // console.log(p);
    p.text(thisQuestion.printQuestion());
    questionBlock.append(p);
    for (var i = 0; i < thisQuestion.answers.length; i++) {
      var b = $("<button>");
      b.addClass("btn btn-light btn-block quiz-button");
      b.append(thisQuestion.printAnswer(i));
      if (thisQuestion.checkAnswer(i)) b.attr("isRight", "true");
      questionBlock.append(b);
    }
    questionDisplayed = true;
  }

  function processGameResults() {
    /* arguments: none
     * return: none
     * purpose: Display user's score, give them an opportunity to enter their name for the highscore table
     */

    // Clear the board
    $("#sub-head").empty();
    $("#question-block").empty();
    if (timeLeft < 0) timeLeft = 0;

    // Display results
    var h4 = $("<h4>");
    h4.text("Results");
    $("#sub-head").append(h4);
    var ul = $("<ul>");
    ul.addClass("list-unstyled");
    var li1 = $("<li>");
    li1.text(
      "Questions answered: " + questionsAnswered + "/" + questionList.length
    );
    var li2 = $("<li>");
    li2.text("Correct answers: " + answersRight);
    var li3 = $("<li>");
    li3.text("Points earned: " + score);
    ul.append(li1, li2, li3);
    $("#question-block").append(ul);

    // Provide user name input for highscore table
    var inDiv = $("<div>");
    inDiv.addClass("input-group mb-3");
    var input = $("<input>");
    input.attr({id:"playerName", type:"text", maxlength:"15", placeholder:"Enter your name here"});
    input.addClass("form-control");
    var submitDiv = $("<div>");
    submitDiv.addClass("input-group-append");
    var submitBtn = $("<button>");
    submitBtn.addClass("btn btn-outline-secondary");
    submitBtn.attr({type:"button", id:"submit-button"});
    submitBtn.text("Submit");
    submitDiv.append(input, submitBtn);
    inDiv.append(submitDiv);
    $("#question-block").append(inDiv);

    // Fetch highscore table from local storage...
    highScoreTable_stored = JSON.parse(
      localStorage.getItem("codeQuiz_highScoreTable")
    );
    if (highScoreTable_stored != null) highScoreTable = highScoreTable_stored;
    storeHighScores();
    renderHighScores();
  }

  function storeHighScores() {
    /* arguments: none
     * return: none
     * purpose: store a copy of the high score table in memory to localstorage
     */
    console.log("storeHighScores() called");
  }

  function renderHighScores() {
    /* arguments: none
     * return: none
     * purpose: display the high score table on screen
     */
    console.log("renderHighScores() called");
  }
});
