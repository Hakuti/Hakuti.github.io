//This is not a complete project, it will run, but still has work
//In the end I ended up having to fix alot of logic issues and dug myself
//into some deep deep holes with my code
//needs a ton more CSS work, but the game works.
//Lastly I need to apply a regex for "&quot&" from the questions pulled from the API
//Questions sometimes come out with badly formmated quotes and semicolons
var queryURL = "https://opentdb.com/api.php?amount=10&type=multiple"
var intervalId;
var number = 10;
var counter = 0;
var answeredAmount = 0;
var answersRight = 0;
var answersWrong = 0;
var tempArray;
var tempArrayIncorrect;
var question;
var answer;
var newGameCount = 0;

//This game goes all the way to the end, but does not restart yet.
$(".start-game").on("click", function (event) {
    //console.log(tempArrayIncorrect);
    console.log("COUNTER outside: " + counter);
    $(".start-game").hide();
    $("#win-loss-div").empty();
    $.ajax({
        method: "GET",
        url: queryURL
    }).then(response => {
        console.log(response);
        //I need to assign the answer randomly so....
        console.log("COUNTER inside: " + counter);
        console.log(response.results[0].incorrect_answers);
        tempArray = response.results[counter];
        tempArrayIncorrect = response.results[counter].incorrect_answers
        answer = response.results[counter].correct_answer;
        question = response.results[counter].question;
        tempArrayIncorrect.push(answer);
        var guessAnswer = "";


        //  Variable that will hold our interval ID when we execute
        //  the "run" function




        run(response);
        var randomSubset = tempArrayIncorrect.shuffle().slice(0, 13);
        $("#question").text(question);
        if (newGameCount == 0) {
            for (var i = 0; i < tempArrayIncorrect.length; i++) {

                $("#p" + i).text(tempArrayIncorrect[i]);
            }
        } else {
            for (var i = 0; i < tempArrayIncorrect.length; i++) {
                var pTag = $("<p id='p" + i + "'>")
                pTag.addClass("p");
                pTag.text(tempArrayIncorrect[i]);
                $("#questions").append(pTag);
            }
            console.log("THIS LOOP");
        }





        
        //Click which determines if a guess was picked
        //unbind was used here for a bug where it keep repeating the click after
        //a game reset
        $(document).unbind().on("click", ".p", function (event) {
            event.preventDefault();
            stop();
            counter++;
            answeredAmount++;
            console.log(answeredAmount);
            console.log("Counter CLICK: " + counter);
            //Still working on this to display wins and losses
            if (answeredAmount == 10) {
                
                console.log("Counter if CLICK: " + counter);
                resetQuestions(counter, response);
                return;
                
            }
            if ($(this).text() != answer) {
                console.log("incorrect");
                //counter++
                answersWrong++;
                console.log($(this).text());
                displayPic();
                $("#questions").empty();
                $("#question").empty();
                resetQuestions(counter, response);

            } else {
                answersRight++;
                displayCorrectPic();
                $("#questions").empty();
                $("#question").empty();
                resetQuestions(counter, response);
            }


        });



    }).then({});
});

//resets the question, bad function name, it Resets the current question
//and its multiple choice options
//Also resets the timer
function resetQuestions(counter, response) {

    number = 10;

    setTimeout(() => {
        run(response);
        $("#wrong").empty();
        //tempArray of incorrect results
        if (counter == 10) {
            var rightTag = $("<p>");
            var wrongTag =$("<p>");
            rightTag.text("You got " + answersRight  + " right");
            wrongTag.text("You got " + answersWrong  + " wrong");
            answersRight = 0;
            answersWrong = 0;
            $("#win-loss-div").append(rightTag, wrongTag);

            answeredAmount = 0;
            stop();
            console.log("Here in TIMEOUT");
            number = 10;
            this.counter = 0;
            newGameCount++;
            console.log(newGameCount);
            console.log(counter);
            console.log("Here: " + this.counter);
            $("#questions").empty();
            $("#question").empty();
           
            $(".start-game").show();
            

        } else if (counter < 10) {
            console.log("HERE: " + counter);
            tempArrayIncorrect = response.results[counter].incorrect_answers

            //the answer
            answer = response.results[counter].correct_answer;
            //the question
            question = response.results[counter].question;

            //tempArray being appended the correct answer
            tempArrayIncorrect.push(answer);

            //assigning a question and its choices
            $("#question").text(question);
            for (var i = 0; i < tempArrayIncorrect.length; i++) {
                var pTag = $("<p id='p" + i + "'>")
                pTag.addClass("p");
                pTag.text(tempArrayIncorrect[i]);
                $("#questions").append(pTag);
            }
        }
    }, 3000);
}

//reset game and it's properties.
function resetGame(response) {
    counter = 0;
    number = 10;
    answeredAmount = 0;
    answersRight = 0;
    answersWrong = 0;

}

//displays a picture if wrong answer
function displayPic() {
    var divPic = $("#wrong");
    var correctPTag = $("<p>");
    correctPTag.text("The correct answer was: " + answer);
    var nope = $("<p>");
    nope.text("WRONG");
    var imgWrong = $("<img src='assets/wrong.png'>");
    divPic.append(correctPTag);
    divPic.append(nope);
    divPic.append(imgWrong);
    
}

//display a picture if right answer
function displayCorrectPic(){
    var divPic = $("#wrong");
    var correctPTag = $("<p>");
    correctPTag.text("The correct answer was: " + answer);
    var yes = $("<p>");
    yes.text("CORRECT");
    var imgWrong = $("<img src='assets/right.png'>");
    divPic.append(correctPTag);
    divPic.append(yes);
    divPic.append(imgWrong);

}

//run function with a response variable
function run(response) {
    var response = response;

    clearInterval(intervalId);
    //intervalID uses an anonymous function in order to allow 
    //decrement to take a parameter.
    intervalId = setInterval(function () {
        decrement(response)
    }, 1000);
}


function decrement(response) {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<p>" + number + "<p>");


    //  Once number hits zero...
    if (number === 0) {
        answersWrong++;
        answeredAmount++
        console.log(answeredAmount);
        if (answeredAmount == 10) {
            stop();
        }
        //  ...run the stop function.
        stop();

        counter++;
        //reset a question
        resetQuestions(counter, response);
        //empty out the divs
        $("#questions").empty();
        $("#question").empty();
        displayPic();

        //  Alert the user that time is up.
        //alert("Time Up!");
    }
    if (answeredAmount == 10) {
        stop();
    }
}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

//FISCHER shuffle, simply reshuffles an array.
//Utilizie by passing array.shuffle()
//usage tempArray = array.shuffle();
Array.prototype.shuffle = function () {
    var i = this.length;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this; // for convenience, in case we want a reference to the array
};