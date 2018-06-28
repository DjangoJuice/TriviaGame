// The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {
$("#startButton").on("click", game)

var questionNum = [];

var triviaQuestions = {
    "one":"thing",
    "two":"thing",
    "three":"thing",
    "four":"thing",
    "five":"thing",
    "six":"thing",
    "seven":"thing",
    "eight":"thing",
    "nine":"thing",
    "ten":"thing",
}


function game () {
// Hide the start button from the screen
    $("#buttonHide").html("");
// Make a giant title display at the header of the page
    $("#triviaTitle").html("<h1>Super Duper Trivia Game</h1>");


// When the game starts, question(s) will appear, and the timer should begin
    // The timer between rounds should be 2 minutes, then the game ends
    var gameTimer = setTimeout(endGame, 120 * 1000);


    // Add the trivia questions
    var question1 = $("<p>");
    question1.attr("id", "question1");
    question1.text(triviaQuestions.one)

    var question2 = $("<p>");
    question2.attr("id", "question2");
    question2.text(triviaQuestions.two)

    var question3 = $("<p>");
    question3.attr("id", "question3");
    question3.text(triviaQuestions.three)

    var question4 = $("<p>");
    question4.attr("id", "question4");
    question4.text(triviaQuestions.four)

    var question5 = $("<p>");
    question5.attr("id", "question5");
    question5.text(triviaQuestions.five)

    var question6 = $("<p>");
    question6.attr("id", "question6");
    question6.text(triviaQuestions.six)

    var question7 = $("<p>");
    question7.attr("id", "question7");
    question7.text(triviaQuestions.seven)

    var question8 = $("<p>");
    question8.attr("id", "question8");
    question8.text(triviaQuestions.eight)

    var question9 = $("<p>");
    question9.attr("id", "question9");
    question9.text(triviaQuestions.nine)

    var question10 = $("<p>");
    question10.attr("id", "question10");
    question10.text(triviaQuestions.ten)


// Append the questions to the section div, #questionSection
for (a = 1; a <= 10; a++) {
    questionNum.push("question" + a);
    $("#questionSection").append(eval(questionNum[a-1]))
};



// Create a button for finishing the game, titles 'Done'
    var doneButton = $("<button>");
    doneButton.text("Done");
    doneButton.attr("id", "doneButton");
    $("#doneButton").on("click", endGame)
}

function endGame () {
    console.log("time ran out")
};

// To allow the plaYer to select answers, each question should have bubbles to click to choose his/her answer
    // Only one answer per question

// To make the game challenging, the player is limited by the remaining time
    // To show the player's results, automatically reveal their scores after the timer ends
    // Let them know in a message that the game ended
    // Provide the statistics
        // Correct Answers
        // Incorrect Answers
        // Unanswered questions

});