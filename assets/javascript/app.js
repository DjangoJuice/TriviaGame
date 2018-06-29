// The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {
    $("#startButton").on("click", game)
    
    
    // This object's format makes it easy to display to the screen
    var triviaQuestions = {
        "question1":"To live is to suffer, to survive is to find some meaning in the suffering.",
        "question2":"This is Question 2",
        "question3":"This is Question 3",
        "question4":"This is Question 4",
        "question5":"This is Question 5",
        "question6":"This is Question 6",
        "question7":"This is Question 7",
        "question8":"This is Question 8",
        "question9":"This is Question 9",
        "question10":"This is Question 10",
    }
    
    // Multiple choice selections should be objects for adding to the DOM
    var trivQuesAnswers1 = {
        "answer1":"Friedrich Nietzsche",
        "answer2":"Aristotle",
        "answer3":"Nelson Mandela",
        "answer4":"Alexander the Great",
    }
    
    var trivQuesAnswers2 = {
        "answer1":"Q2 A1",
        "answer2":"Q2 A2",
        "answer3":"Q2 A3",
        "answer4":"Q2 A4",
    }
    
    var trivQuesAnswers3 = {
        "answer1":"Q3 A1",
        "answer2":"Q3 A2",
        "answer3":"Q3 A3",
        "answer4":"Q3 A4",
    }
    
    var trivQuesAnswers4 = {
        "answer1":"Q4 A1",
        "answer2":"Q4 A2",
        "answer3":"Q4 A3",
        "answer4":"Q4 A4",
    }
    
    var trivQuesAnswers5 = {
        "answer1":"Q5 A1",
        "answer2":"Q5 A2",
        "answer3":"Q5 A3",
        "answer4":"Q5 A4",
    }
    
    var trivQuesAnswers6 = {
        "answer1":"Q6 A1",
        "answer2":"Q6 A2",
        "answer3":"Q6 A3",
        "answer4":"Q6 A4",
    }
    
    var trivQuesAnswers7 = {
        "answer1":"Q7 A1",
        "answer2":"Q7 A2",
        "answer3":"Q7 A3",
        "answer4":"Q7 A4",
    }
    
    var trivQuesAnswers8 = {
        "answer1":"Q8 A1",
        "answer2":"Q8 A2",
        "answer3":"Q8 A3",
        "answer4":"Q8 A4",
    }
    
    var trivQuesAnswers9 = {
        "answer1":"Q9 A1",
        "answer2":"Q9 A2",
        "answer3":"Q9 A3",
        "answer4":"Q9 A4",
    }
    
    var trivQuesAnswers10 = {
        "answer1":"Q10 A1",
        "answer2":"Q10 A2",
        "answer3":"Q10 A3",
        "answer4":"Q10 A4",
    }


    // Game state for ending the game, either by timer or button
    var endGameStatus = false;


    // When the game starts, question(s) will appear, and the timer should begin
        // The timer between rounds should be 2 minutes, then the game ends
        var gameTimeout = setTimeout(endGame, 120 * 1000);


        // The game should last 2 minutes (120 seconds)
        var remainingTime = 120;
    
    
    function game () {
    // Tracking the correct, incorrect and unanswered questions to show the player at end game
        var answeredCorrect = 0;
    
        var answeredIncorrect = 0;
    
        var answeredFalse = 10;


    
    // Hide the start button from the screen
        $("#buttonHide").html("");
    
    
    // Make a giant title display at the header of the page
        $("#triviaTitle").html("<h1>Super Trivia Game</h1>");
    
    
    
        // Decrease the timer for the game 
        var intervalId = setInterval(function() {
            if (remainingTime >= 1 && endGameStatus === false) {
                remainingTime--;
                // Show the remaining time to the player
                $("#timerDisplay").html("Remaining Time: " + remainingTime);
            };
        }, 1000);
    
    
        // Add the trivia questions
        var question1 = $("<p>");
        question1.attr("id", "question1");
        question1.text(triviaQuestions.question1)
    
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

    
    // All the questions & choices should programmatically display for the player
        //Pull each one from the object of Trivia Questions
        Object.keys(triviaQuestions).forEach(function(trivQuesKey) {
        // Build the HTML form for the radio buttons and each one should have unique ID assigned
            var quesChoices = $("<form>");
            quesChoices.attr("id", "choices-" + trivQuesKey);
            // Display the radio buttons with answers directly below the question
                // Only allow the player to choose one answer per question
            Object.values(trivQuesAnswers1).forEach(function(choice) {
                quesChoices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
            });
            // Display each Trivia Question to the DOM for the player to see
            $("#questionSection").append(eval(trivQuesKey));
            // Match the answers to the corresponding question
            $("#" + trivQuesKey).append(quesChoices)
        });
    
    
    
    // Create a button for finishing the game to allow players to finish early
        var doneButton = $("<button>");
        doneButton.text("Done");
        doneButton.attr("id", "doneButton");
        $("#pageFooter").append(doneButton)
        $("#doneButton").on("click", endGame)

    } // End of function game()
    
    function endGame () {
        // Just confirming in the console if the time ran out rather than the user pressing the button
        if (remainingTime === 0) {console.log("time ran out")};
        // Remove the game objects from the DOM and only show end game results
        $("#timerDisplay").html("");
        $("#questionSection").html("");
        // This stops the game timer from continuing 
        endGameStatus = true;

        //Tally up correct answers
            //Display to the screen
        
        //Tally up incorrect answers
            //Display to the screen

        //Tally up unanswered questions
            //Display to the screen

    }; // End of function endGame()
    

    
    }); // End of the $(document).ready function()