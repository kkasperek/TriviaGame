// Global variables
var startButton = $("#startButton");
var questionSlide = $("#questionSlide");
var startSlide = $("#startSlide");
var winSlide = $("#winSlide");
var loseSlide = $("#loseSlide");

var questionText = $("#questionText");

var options;        //form options to choose from
var guess;          //which option user chooses 
var correctGuess;
var wrongGuess;


// Questions
// function survivalQuestions() 
    var q1 = {
        Question: "red",
        PossibleAnswers: ['answer A', 'answer B', 'answer C'],
        flags: [true, false, false],
        Answer: ' '
    };
    var q2 = {
        Question: "blue",
        PossibleAnswers: ['answer A', 'answer B', 'answer C'],
        flags: [false, true, false],
        Answer: ' '
    };
    var q3 = {
        Question: "yellow",
        PossibleAnswers: ['answer A', 'answer B', 'answer C'],
        flags: [false, false, true],
        Answer: ' '
    };
    var q4 = {
        Question: "green",
        PossibleAnswers: ['answer A', 'answer B', 'answer C'],
        flags: [false, false, true],
        Answer: ' '
    };
    var q5 = {
        Question: "purple",
        PossibleAnswers: ['answer A', 'answer B', 'answer C'],
        flags: [false, false, true],
        Answer: ' '
    };

    // $.each(questionArray, function (index, value) {
    //         console.log($(this).Question);
    //         return;
    //     });

// run after document is loaded
$('document').ready(function () {

     var questionArray = [q1,q2,q3,q4,q5];
    // // create fuction to load questions onto page
    function loadQuestion() {

        for (let i = 0; i < questionArray.length; i++){
            var q = questionArray[i];
            console.log(q.Question);
        }
        
        //questionText.html("<h4>" + questionArray[q].Question + "</h4>");
    }


    function setup() {
        var index = 0;
        questionSlide.hide();
        winSlide.hide();
        loseSlide.hide();

        startButton.on("click", function () {
            startSlide.hide();
            questionSlide.show();
            //countdownTimer.start();
            loadQuestion(index);
        });
    }
    setup();


    //SETUP uncomment here ---------------------------------------------------------



    //prevents submit button from trying to send a form.
    $("#guess").on("click", function (event) {
        event.preventDefault();

        // save users guess from radio button in variable
        options = $("input[name=option]");
        for (let i = 0; i < options.length; i++) {
            guess = options[i].value;

            if (options[i].checked) {
                // do whatever you want with the checked radio
                console.log(options[i].value);

                break;
            }
        }

        //check guess against right answer
        var checkAnswer = function () {
            if (guess === correctGuess) {
                winSlide.show();
            }
            else {
                loseSlide.show();
            }

        }
        checkAnswer();

    });






});