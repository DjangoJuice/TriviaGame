// The game should not start automatically, we want the player starting the game with a Start Button
$( document ).ready(function() {
    $("#startButton").on("click", game)
    
    
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
    }
    
    // Multiple choice selections should be objects for adding to the DOM
    var trivQuesAnswers1 = {
        "answer1":"Friedrich Nietzsche",
        "answer2":"Aristotle",
        "answer3":"Nelson Mandela",
        "answer4":"Alexander the Great",
    }
    
    var trivQuesAnswers2 = {
        "answer1":"LeBron James",
        "answer2":"Alexander the Great",
        "answer3":"Michael Jordan",
        "answer4":"Genghis Khan",
    }
    
    var trivQuesAnswers3 = {
        "answer1":"Michael Jordan",
        "answer2":"Kobe Bryant",
        "answer3":"LeBron James",
        "answer4":"Larry Bird",
    }
    
    var trivQuesAnswers4 = {
        "answer1":"Bill Gates",
        "answer2":"Albert Einstein",
        "answer3":"Martin Luther King Jr",
        "answer4":"George Washington",
    }
    
    var trivQuesAnswers5 = {
        "answer1":"Albert Einstein",
        "answer2":"Bill Nye",
        "answer3":"Galileo",
        "answer4":"Aristotle",
    }
    
    var trivQuesAnswers6 = {
        "answer1":"Abraham Lincoln",
        "answer2":"Tupac Shakur",
        "answer3":"Martin Luther King Jr",
        "answer4":"Harry S. Truman",
    }
    
    var trivQuesAnswers7 = {
        "answer1":"Genghis Khan",
        "answer2":"Steve Jobs",
        "answer3":"Michael Jackson",
        "answer4":"Abraham Lincoln",
    }
    
    var trivQuesAnswers8 = {
        "answer1":"Steve Jobs",
        "answer2":"Bill Gates",
        "answer3":"LeBron James",
        "answer4":"Bill Nye",
    }
    
    var trivQuesAnswers9 = {
        "answer1":"Bill Gates",
        "answer2":"Barack Obama",
        "answer3":"Nelson Mandela",
        "answer4":"Galileo",
    }
    
    var trivQuesAnswers10 = {
        "answer1":"Albert Einstein",
        "answer2":"Aristotle",
        "answer3":"Arnold Schwarzenegger",
        "answer4":"Abraham Lincoln",
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
            ques1Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question1").append(ques1Choices);
        
    
        var question2 = $("<p>");
        question2.attr("id", "question2");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[1].toUpperCase() + "</h3>").append(question2.text(triviaQuestions.quote2));
        var ques2Choices = $("<form>");
        ques2Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[1]);
        Object.values(trivQuesAnswers2).forEach(function(choice) {
            ques2Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question2").append(ques2Choices);

    
        var question3 = $("<p>");
        question3.attr("id", "question3");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[2].toUpperCase() + "</h3>").append(question3.text(triviaQuestions.quote3));
        var ques3Choices = $("<form>");
        ques3Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[2]);
        Object.values(trivQuesAnswers3).forEach(function(choice) {
            ques3Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question3").append(ques3Choices);

    
        var question4 = $("<p>");
        question4.attr("id", "question4");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[3].toUpperCase() + "</h3>").append(question4.text(triviaQuestions.quote4));
        var ques4Choices = $("<form>");
        ques4Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[3]);
        Object.values(trivQuesAnswers4).forEach(function(choice) {
            ques4Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question4").append(ques4Choices);

    
        var question5 = $("<p>");
        question5.attr("id", "question5");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[4].toUpperCase() + "</h3>").append(question5.text(triviaQuestions.quote5));
        var ques5Choices = $("<form>");
        ques5Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[4]);
        Object.values(trivQuesAnswers5).forEach(function(choice) {
            ques5Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question5").append(ques5Choices);

    
        var question6 = $("<p>");
        question6.attr("id", "question6");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[5].toUpperCase() + "</h3>").append(question6.text(triviaQuestions.quote6));
        var ques6Choices = $("<form>");
        ques6Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[5]);
        Object.values(trivQuesAnswers6).forEach(function(choice) {
            ques6Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question6").append(ques6Choices);

    
        var question7 = $("<p>");
        question7.attr("id", "question7");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[6].toUpperCase() + "</h3>").append(question7.text(triviaQuestions.quote7));
        var ques7Choices = $("<form>");
        ques7Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[6]);
        Object.values(trivQuesAnswers7).forEach(function(choice) {
            ques7Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question7").append(ques7Choices);

    
        var question8 = $("<p>");
        question8.attr("id", "question8");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[7].toUpperCase() + "</h3>").append(question8.text(triviaQuestions.quote8));
        var ques8Choices = $("<form>");
        ques8Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[7]);
        Object.values(trivQuesAnswers8).forEach(function(choice) {
            ques8Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question8").append(ques8Choices);

    
        var question9 = $("<p>");
        question9.attr("id", "question9");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[8].toUpperCase() + "</h3>").append(question9.text(triviaQuestions.quote9));
        var ques9Choices = $("<form>");
        ques9Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[8]);
        Object.values(trivQuesAnswers9).forEach(function(choice) {
            ques9Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question9").append(ques9Choices);

    
        var question10 = $("<p>");
        question10.attr("id", "question10");
        $("#questionSection").append("<h3>" + Object.keys(triviaQuestions)[9].toUpperCase() + "</h3>").append(question10.text(triviaQuestions.quote10));
        var ques10Choices = $("<form>");
        ques10Choices.attr("id", "choices-" + Object.keys(triviaQuestions)[9]);
        Object.values(trivQuesAnswers10).forEach(function(choice) {
            ques10Choices.append(`<input type="radio" name="choice" value="` + choice + `">` + choice);
        });
        $("#question10").append(ques10Choices);
        

    
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
        console.log()
        
        //Tally up incorrect answers
            //Display to the screen

        //Tally up unanswered questions
            //Display to the screen

    }; // End of function endGame()
    

    
}); // End of the $(document).ready function()