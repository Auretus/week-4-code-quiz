"use strict"; // complain when I use undeclared variables by mistake
// global variable declaration
var questionsLeft;
var timeLeft = 120;
var pointsRight = 5;

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
    return this.answers[index].text;
  }
  checkAnswer(index) {
    /* argument: integer from 0 to (answers.length - 1)
     * return value: boolean
     * purpose: check whether the answer is correct, and return the answer as a true/false value
     */
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
questionList[questionList.length - 1].addAnswer("\\ (backslash)", false);

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

// // question 9
// questionList.push(new quizQuestion(""));
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");

// // question 10
// questionList.push(new quizQuestion(""));
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");
// questionList[questionList.length - 1].addAnswer("");

// Document manipulation variables below
var spanQuestionsLeft = document.querySelectorAll(".questions-left");
var spanTimeLeft = document.querySelectorAll(".quiz-timer");
var spanPointsRight = document.querySelector(".right-answer");
var index;
questionsLeft = parseInt(questionList.length);

// landing page prep
for (index = 0; index < spanQuestionsLeft.length; index++) {
  spanQuestionsLeft[index].textContent = questionsLeft;
}
for (index = 0; index < spanTimeLeft.length; index++) {
  spanTimeLeft[index].textContent = timeLeft + " seconds";
}
spanPointsRight.textContent = pointsRight;

$(document).ready(function() {
  // Once the prep is done, here's where the main game loop gets going
  $(".start-quiz").on("click", function() {
    // start the game
  });
  // Or, here's a shortcut to the high scores
  $(".view-highscores").on("click", function() {
    // go to the high scores display
  });
});
