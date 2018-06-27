//The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {
$("#startButton").on("click", game)

function game () {
//Hide the start button from the screen
    $("#buttonHide").html("")
//Make a giant title display at the header of the page
    $("#triviaTitle").html("<h1>Super Duper Trivia Game</h1>")

//When the game starts, question(s) will appear, and the timer should begin

}



//To allow the plaYer to select answers, each question should have bubbles to click to choose his/her answer
    //Only one answer per question

//To make the game challenging, the player is limited by the remaining time
    //To show the player's results, automatically reveal their scores after the timer ends
    //Let them know in a message that the game ended
    //Provide the statistics
        //Correct Answers
        //Incorrect Answers
        //Unanswered questions

});