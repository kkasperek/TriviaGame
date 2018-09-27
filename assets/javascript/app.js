// Global variables
var startButton = $("#startButton");
var questionSlide = $("#questionSlide");

//var questionNumber;
//var question;

var options;        //form options to choose from
var num1;           //option 1
var num2;
var num3;
var guess;          //which option user chooses 

// Questions
var survivalQuestions = {
    q1: {question: "this is question #1", answer: 'A'},
    q2: {question: "this is question #2", answer: 'B'},
    q3: {question: "this is question #3", answer: 'C'},
};
console.log(survivalQuestions);

// setup
//questionSlide.hide();


// run after document is loaded
$('document').ready(function () {

    // show question slide when start button is clicked    
    // startButton.on("click", function () {
    //    questionSlide.show();
    //    startButton.hide();
    // });

    
    //prevents submit button from trying to send a form.
    $("#guess").on("click", function (event) {
        event.preventDefault();

        var guess = $(".form-check-input");
        console.log(guess);

        var e = guess.val();    //test
        console.log(e);

        //check guess against right answer
        if(guess === true){

        }

    });


        



});