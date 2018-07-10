// The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {


    $("#startButton").on("click", game);


    // on click for an answer in 1, i assign a 
    answerObj = {
        1: "Friedrich Nietzsche",
        2: "Alexander the Great", 
        3: "LeBron James",
        4: "Albert Einstein",
        5: "Aristotle",
        6: "Martin Luther King Jr",
        7: "Genghis Khan",
        8: "Steve Jobs",
        9: "Nelson Mandela",
        10: "Abraham Lincoln"
    };

    
    
    // This object's format makes it easy to display to the screen
    var triviaQuestions = {
        "quote1":"To live is to suffer, to survive is to find some meaning in the suffering.",
        "quote2":"I do not pilfer victory.",
        "quote3":"You have to be able to accept failure to get better.",
        "quote4":"Try not to become a man of success, but rather try to become a man of value.",
        "quote5":"There is no great genius without some touch of madness.",
        "quote6":"In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "quote7":"If you're afraid - don't do it, - if you're doing it - don't be afraid!",
        "quote8":"Sometimes life hits you in the head with a brick. Don't lose faith.",
        "quote9":"Education is the most powerful weapon which you can use to change the world.",
        "quote10":"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    };

   
    // Multiple choice selections should be objects for adding to the DOM
    var trivQuesAnswers1 = {
        "answer1":"Friedrich Nietzsche",
        "answer2":"Aristotle",
        "answer3":"Nelson Mandela",
        "answer4":"Alexander the Great",
    };
    
    var trivQuesAnswers2 = {
        "answer1":"LeBron James",
        "answer2":"Alexander the Great",
        "answer3":"Michael Jordan",
        "answer4":"Genghis Khan",
    };
    
    var trivQuesAnswers3 = {
        "answer1":"Michael Jordan",
        "answer2":"Kobe Bryant",
        "answer3":"LeBron James",
        "answer4":"Larry Bird",
    };
    
    var trivQuesAnswers4 = {
        "answer1":"Bill Gates",
        "answer2":"Albert Einstein",
        "answer3":"Martin Luther King Jr",
        "answer4":"George Washington",
    };
    
    var trivQuesAnswers5 = {
        "answer1":"Albert Einstein",
        "answer2":"Bill Nye",
        "answer3":"Galileo",
        "answer4":"Aristotle",
    };
    
    var trivQuesAnswers6 = {
        "answer1":"Abraham Lincoln",
        "answer2":"Tupac Shakur",
        "answer3":"Martin Luther King Jr",
        "answer4":"Harry S. Truman",
    };
    
    var trivQuesAnswers7 = {
        "answer1":"Genghis Khan",
        "answer2":"Steve Jobs",
        "answer3":"Michael Jackson",
        "answer4":"Abraham Lincoln",
    };
    
    var trivQuesAnswers8 = {
        "answer1":"Steve Jobs",
        "answer2":"Bill Gates",
        "answer3":"LeBron James",
        "answer4":"Bill Nye",
    };
    
    var trivQuesAnswers9 = {
        "answer1":"Bill Gates",
        "answer2":"Barack Obama",
        "answer3":"Nelson Mandela",
        "answer4":"Galileo",
    };
    
    var trivQuesAnswers10 = {
        "answer1":"Albert Einstein",
        "answer2":"Aristotle",
        "answer3":"Arnold Schwarzenegger",
        "answer4":"Abraham Lincoln",
    };


    // Hide the end game section
    $("#postGame").attr("class", "hidden")
    
    
    
    function game () {

        // Game state for ending the game, either by timer or button
    var endGameStatus = false;


    // When the game starts, question(s) will appear, and the timer should begin
        // The timer between rounds should be 2 minutes, then the game ends
        var gameTimeout = setTimeout(endGame, 120 * 1000);


        // The game should last 2 minutes (120 seconds)
        var remainingTime = 120;

    // Tracking the correct, incorrect and unanswered questions to show the player at end game
        var answeredCorrect = 0;
    
        var answeredIncorrect = 0;
    
        var answerUndefined = 0;

        // The players answers from game() need to be stored for tallying in the endgame()
        var playerAnswers = [];

        var numOfQuestions = Object.keys(triviaQuestions).length;


    
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
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[0].toUpperCase() + "</h3>").append(question1.text(triviaQuestions.quote1));
        var ques1Choices = $("<form>");
        ques1Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[0]);
        Object.values(trivQuesAnswers1).forEach(function(choice) {
            ques1Choices.append(`<input type="radio" class="choices" id="question1-choice` + (Object.values(trivQuesAnswers1).indexOf(choice) + 1) + `" name="question1-choices" value="` + choice + `">` + choice);
        });
        $("#question1").append(ques1Choices);
        // $("#choices-1 input").on("change", function () {
        //     console.log($("input[name=choice1]:checked", "#choices-1").val());
            //https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery#596369
            //https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button#23053203
        //})

        
    
        var question2 = $("<p>");
        question2.attr("id", "question2");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[1].toUpperCase() + "</h3>").append(question2.text(triviaQuestions.quote2));
        var ques2Choices = $("<form>");
        ques2Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[1]);
        Object.values(trivQuesAnswers2).forEach(function(choice) {
            ques2Choices.append(`<input type="radio" class="choices" id="question2-choice` + (Object.values(trivQuesAnswers2).indexOf(choice) + 1) + `" name="question2-choices" value="` + choice + `">` + choice);
        });
        $("#question2").append(ques2Choices);

    
        var question3 = $("<p>");
        question3.attr("id", "question3");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[2].toUpperCase() + "</h3>").append(question3.text(triviaQuestions.quote3));
        var ques3Choices = $("<form>");
        ques3Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[2]);
        Object.values(trivQuesAnswers3).forEach(function(choice) {
            ques3Choices.append(`<input type="radio" class="choices" id="question3-choice` + (Object.values(trivQuesAnswers3).indexOf(choice) + 1) + `" name="question3-choices" value="` + choice + `">` + choice);
        });
        $("#question3").append(ques3Choices);

    
        var question4 = $("<p>");
        question4.attr("id", "question4");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[3].toUpperCase() + "</h3>").append(question4.text(triviaQuestions.quote4));
        var ques4Choices = $("<form>");
        ques4Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[3]);
        Object.values(trivQuesAnswers4).forEach(function(choice) {
            ques4Choices.append(`<input type="radio" class="choices" id="question4-choice` + (Object.values(trivQuesAnswers4).indexOf(choice) + 1) + `" name="question4-choices" value="` + choice + `">` + choice);
        });
        $("#question4").append(ques4Choices);

    
        var question5 = $("<p>");
        question5.attr("id", "question5");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[4].toUpperCase() + "</h3>").append(question5.text(triviaQuestions.quote5));
        var ques5Choices = $("<form>");
        ques5Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[4]);
        Object.values(trivQuesAnswers5).forEach(function(choice) {
            ques5Choices.append(`<input type="radio" class="choices" id="question5-choice` + (Object.values(trivQuesAnswers5).indexOf(choice) + 1) + `" name="question5-choices" value="` + choice + `">` + choice);
        });
        $("#question5").append(ques5Choices);

    
        var question6 = $("<p>");
        question6.attr("id", "question6");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[5].toUpperCase() + "</h3>").append(question6.text(triviaQuestions.quote6));
        var ques6Choices = $("<form>");
        ques6Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[5]);
        Object.values(trivQuesAnswers6).forEach(function(choice) {
            ques6Choices.append(`<input type="radio" class="choices" id="question6-choice` + (Object.values(trivQuesAnswers6).indexOf(choice) + 1) + `" name="question6-choices" value="` + choice + `">` + choice);
        });
        $("#question6").append(ques6Choices);

    
        var question7 = $("<p>");
        question7.attr("id", "question7");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[6].toUpperCase() + "</h3>").append(question7.text(triviaQuestions.quote7));
        var ques7Choices = $("<form>");
        ques7Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[6]);
        Object.values(trivQuesAnswers7).forEach(function(choice) {
            ques7Choices.append(`<input type="radio" class="choices" id="question7-choice` + (Object.values(trivQuesAnswers7).indexOf(choice) + 1) + `" name="question7-choices" value="` + choice + `">` + choice);
        });
        $("#question7").append(ques7Choices);

    
        var question8 = $("<p>");
        question8.attr("id", "question8");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[7].toUpperCase() + "</h3>").append(question8.text(triviaQuestions.quote8));
        var ques8Choices = $("<form>");
        ques8Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[7]);
        Object.values(trivQuesAnswers8).forEach(function(choice) {
            ques8Choices.append(`<input type="radio" class="choices" id="question8-choice` + (Object.values(trivQuesAnswers8).indexOf(choice) + 1) + `" name="question8-choices" value="` + choice + `">` + choice);
        });
        $("#question8").append(ques8Choices);

    
        var question9 = $("<p>");
        question9.attr("id", "question9");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[8].toUpperCase() + "</h3>").append(question9.text(triviaQuestions.quote9));
        var ques9Choices = $("<form>");
        ques9Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[8]);
        Object.values(trivQuesAnswers9).forEach(function(choice) {
            ques9Choices.append(`<input type="radio" class="choices" id="question9-choice` + (Object.values(trivQuesAnswers9).indexOf(choice) + 1) + `" name="question9-choices" value="` + choice + `">` + choice);
        });
        $("#question9").append(ques9Choices);

    
        var question10 = $("<p>");
        question10.attr("id", "question10");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[9].toUpperCase() + "</h3>").append(question10.text(triviaQuestions.quote10));
        var ques10Choices = $("<form>");
        ques10Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[9]);
        Object.values(trivQuesAnswers10).forEach(function(choice) {
            ques10Choices.append(`<input type="radio" class="choices" id="question10-choice` + (Object.values(trivQuesAnswers10).indexOf(choice) + 1) + `" name="question10-choices" value="` + choice + `">` + choice);
        });
        $("#question10").append(ques10Choices);
        

    
    // Create a button for finishing the game to allow players to finish early
        var doneButton = $("<button>");
        doneButton.text("Done").attr("id", "doneButton").attr("class", "btn btn-outline-light btn-lg");
        $("#pageFooter").append(doneButton);
        $("#doneButton").on("click", endGame);
        
        //console.log()

        function endGame () {
            // Just confirming in the console if the time ran out rather than the user pressing the button
            if (remainingTime === 0) {console.log("time ran out")};


            // Remove the game objects from the DOM and only show end game results
            $("#timerDisplay").html("");
            $("#questionSection").attr("class", "hidden");


            // This stops the game timer from continuing 
            endGameStatus = true;
            clearTimeout(gameTimeout);


            // Hide the end game section
            $("#postGame").attr("class", "")
            

            // Populate the player's choices to compare to correct answers and tally scores    
            for (i=1; i <= 10; i++) {
                playerAnswers.push($("input[name=question" + i + "-choices]:checked").val())
            };
            

            for (a=0; a < Object.values(answerObj).length; a++) {
                // Record the player's scores to display them on screen
                if (Object.values(answerObj)[a] === playerAnswers[a]) {
                    // Tally up correct answers
                    answeredCorrect++;
                }
                else if (playerAnswers[a] === undefined) {
                    // Tally up unanswered questions
                    answerUndefined++
                }
                else {
                    // Tally up incorrect answers
                    answeredIncorrect++
                }
            };


            // Display the player's results to the screen after the game ends
            $("#endGameResults").append("<p> Correct answers: " + answeredCorrect + "</p>");
            $("#endGameResults").append("<p> Incorrect answers: " + answeredIncorrect + "</p>");
            $("#endGameResults").append("<p> Unanswered: " + answerUndefined + "</p>");
            
            //Confirm if the scores tally and the player's choices record into an array
            console.log("player's answers array: ", playerAnswers);
            console.log("Correct-", answeredCorrect, " Incorrect-", answeredIncorrect, " Undefined=", answerUndefined);

    
        }; // End of function endGame()

    }; // End of function game()
    

    
}); // End of the $(document).ready function()