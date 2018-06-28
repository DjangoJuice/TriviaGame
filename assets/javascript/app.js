// The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {
$("#startButton").on("click", game)


// This object's format makes it easy to display to the screen
var triviaQuestions = {
    "question1":"thing1",
    "question2":"thing2",
    "question3":"thing3",
    "question4":"thing4",
    "question5":"thing5",
    "question6":"thing6",
    "question7":"thing7",
    "question8":"thing8",
    "question9":"thing9",
    "question10":"thing10",
}

// Multiple choice selections should be objects for adding to the DOM
var trivQuesAnswers1 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers2 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers3 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers4 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers5 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers6 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers7 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers8 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers9 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}

var trivQuesAnswers10 = {
    "answer1":"ansmwer1",
    "answer2":"ansmwer2",
    "answer3":"ansmwer3",
    "answer4":"ansmwer4",
}


function game () {
// Tracking the correct, incorrect and unanswered questions to show the player at end game
    var answeredCorrect = 0;

    var answeredIncorrect = 0;

    var answeredFalse = 10;


// Hide the start button from the screen
    $("#buttonHide").html("");


// Make a giant title display at the header of the page
    $("#triviaTitle").html("<h1>Super Duper Trivia Game</h1>");


// When the game starts, question(s) will appear, and the timer should begin
    // The timer between rounds should be 2 minutes, then the game ends
    var gameTimer = setTimeout(endGame, 120 * 1000);

//     <form >
// <input type="radio" name="choice" value="Scripting"> Scripting
// <input type="radio" name="choice" value="Programming"> Programming
// <input type="radio" name="choice" value="Application"> Application
// <input type="radio" name="choice" value="None of These"> None of These
// </form>

// for (choiceNum = 1; choiceNum <= 4; choiceNum++) {
//     ques1Choices.append(`<input type="radio" name="choice" value="` + )
// }


    // Add the trivia questions
    var question1 = $("<p>");
    question1.attr("id", "question1");
    question1.text(triviaQuestions.question1)

    var ques1Choices = $("<form>");
    //ques1Choices.attr("id", "ques1Choices");
    // Object.values(trivQuesAnswers1).forEach(function(choice) {
    //     ques1Choices.append(`<input type="radio" name="choice" value="` + choice + `"> ` + choice)
    // });
    console.log(Object.values(trivQuesAnswers1))
    console.log(ques1Choices)

    var question2 = $("<p>");
    question2.attr("id", "question2");
    question2.text(triviaQuestions.question2)

    var question3 = $("<p>");
    question3.attr("id", "question3");
    question3.text(triviaQuestions.question3)

    var question4 = $("<p>");
    question4.attr("id", "question4");
    question4.text(triviaQuestions.question4)

    var question5 = $("<p>");
    question5.attr("id", "question5");
    question5.text(triviaQuestions.question5)

    var question6 = $("<p>");
    question6.attr("id", "question6");
    question6.text(triviaQuestions.question6)

    var question7 = $("<p>");
    question7.attr("id", "question7");
    question7.text(triviaQuestions.question7)

    var question8 = $("<p>");
    question8.attr("id", "question8");
    question8.text(triviaQuestions.question8)

    var question9 = $("<p>");
    question9.attr("id", "question9");
    question9.text(triviaQuestions.question9)

    var question10 = $("<p>");
    question10.attr("id", "question10");
    question10.text(triviaQuestions.question10)


Object.keys(triviaQuestions).forEach(function(trivQuesKey) {
    $("#questionSection").append(eval(trivQuesKey))
})



// Create a button for finishing the game to allow players to finish early
    var doneButton = $("<button>");
    doneButton.text("Done");
    doneButton.attr("id", "doneButton");
    $("#pageFooter").append(doneButton)
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