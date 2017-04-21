$(document).ready(function() {
    var timer = 15;
    var currentQuestion = 0;
    var score = 0;
    var intervalId;
    var questionsObj = [{
        questionNumber: 1,
        question: "At age 36, who is the youngest Dodger to ever be inducted to the Baseball Hall of Fame?",
        possibleAnswers: ["Mike Piazza", "Jackie Robinson", "Sandy Koufax", "Corey Seager"],
        rightAnswers: "Sandy Koufax",
    }, {
        questionNumber: 2,
        question: "Which Dodger's jersey number is retired in the ENTIRE league (the only player in any major sport to have such a feat)?",
        possibleAnswers: ["Sandy Koufax", "Jackie Robinson", "Duke Snider", "Tommy Lasorda"],
        rightAnswers: "Jackie Robinson",
    }, {
        questionNumber: 3,
        question: "How many World Series Championships do the Dodgers have under their belt?",
        possibleAnswers: ["6", "10", "4", "7"],
        rightAnswers: "6",
    }, {
        questionNumber: 4,
        question: "Who holds the club's single-season record for most saves, 55?",
        possibleAnswers: ["Sandy Koufax", "Eric Gagne", "Clayton Kershaw", "Pedro Baez"],
        rightAnswers: "Eric Gagne",
    }, {
        questionNumber: 5,
        question: "Who holds the club's career record for most saves?",
        possibleAnswers: ["Eric Gagne", "Pedro Baez", "Kenley Jansen", "Julio Urias"],
        rightAnswers: "Kenley Jansen",
    }, {
        questionNumber: 6,
        question: "How many fist pumps did Kirk Gibson unleash as he was rounding second base after his walk-off homerun in Game One of the 1988 World Series?",
        possibleAnswers: ["1", "0", "42", "2"],
        rightAnswers: "2",
    }]

    $("#start-button").click(run);

    function run() {
        $("#score").html(score)
        timer = 15;
        $("#countdown").html(timer);
        intervalId = setInterval(decrement, 1000);
        $("#start-button").hide()
        $("h2").hide();
        nextQuestion();
    }

    function decrement() {
        timer--;
        $("#countdown").html(timer);
        if (timer === 0) {
            stop();
            $("#answers").html(`<br>Times Up! The correct answer was ${questionsObj[currentQuestion].rightAnswers}.`);
            currentQuestion++;
            setTimeout(function() {
                run();
            }, 2000);
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function nextQuestion() {

        if (currentQuestion !== questionsObj.length) {
            $("#questions").html(questionsObj[currentQuestion].question);
            game();
        } else {
            stop();
            $("#answers").html("<br>Game Over! You Scored " + score + " of " + questionsObj.length + " correct! <p>Click to play again!<br><br><br>");
            currentQuestion = 0;
            score = 0;
            $("#questions").empty();
            $("#start-button").show();
            $("h2").show();;
        }
    }

    function game() {
        $("#answers").html("<br>");
        for (i = 0; i < questionsObj[currentQuestion].possibleAnswers.length; i++) {
            $("#answers").append(`<ul><li class="options" id="${questionsObj[currentQuestion].rightAnswers}">${questionsObj[currentQuestion].possibleAnswers[i]}</li><ul>`);
        }
        $(".options").on("click", function() {
            if (this.innerHTML === this.id) {
                score++;
                $("#score").html(score);
                $("#answers").html(`<br>That is correct! The answer is ${questionsObj[currentQuestion].rightAnswers}.<br><br><br>`);
                currentQuestion++;
                timer = 15;
                stop();
                setTimeout(function() {
                    run();
                }, 2000);
            } else {
                $("#answers").html(`<br>Incorrect! The answer is ${questionsObj[currentQuestion].rightAnswers}.<br><br><br>`);
                currentQuestion++;
                timer = 15;
                stop();
                setTimeout(function() {
                    run();
                }, 2000);
            }
        });
    }
})



// {
//         questionNumber: 7,
//         question: "Who holds the club's career record for most saves?",
//         possibleAnswers: ["Eric Gagne", "Pedro Baez", "Kenley Jansen", "Julio Urias"],
//         rightAnswers: "Kenley Jansen",
//     }, {
//         questionNumber: 8,
//         question: "How many fist pumps did Kirk Gibson unleash as he was rounding second base after his walk-off homerun in Game One of the 1988 World Series?",
//         possibleAnswers: ["1", "0", "42", "2"],
//         rightAnswers: "2",
//     }, {
    //     questionNumber: 9,
    //     question: "Who holds the club's career record for most saves?",
    //     possibleAnswers: ["Eric Gagne", "Pedro Baez", "Kenley Jansen", "Julio Urias"],
    //     rightAnswers: "Kenley Jansen",
    // }, {
    //     questionNumber: 10,
    //     question: "How many fist pumps did Kirk Gibson unleash as he was rounding second base after his walk-off homerun in Game One of the 1988 World Series?",
    //     possibleAnswers: ["1", "0", "42", "2"],
    //     rightAnswers: "2",
    // }
