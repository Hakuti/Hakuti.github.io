var movies = ["The Great Gatsby", "The Greasers", "Lord of the Flys", "The Hobbit"];

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#button-div").empty();

    // Looping through the array of movies
    for (var i = 0; i < movies.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button style='margin-right: 5px; color: white;'>");

        // Adding a class
        a.addClass("gif btn bg-danger");

        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", movies[i]);

        // Providing the button's text with a value of the movie at index i
        a.text(movies[i]);

        // Adding the button to the HTML
        $("#button-div").append(a);


    }
}


// // This function handles events where one button is clicked
$("#add-gif").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();


    // This line will grab the text from the input box
    var movie = $("#gif-input").val().trim();

    if (movie != "") {
        // The movie from the textbox is then added to our array
        movies.push(movie);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
    }

    $("#gif-input").val("");

});

// Adding click event listen listener to all buttons
$(document).on("click", ".gif", function () {
    event.preventDefault();
    console.log("HERE");
    $("#gifs-view").empty();
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-name");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var gifDiv = $("<div class='col-4'>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating.toUpperCase());

                // Creating and storing an image tag
                var gifImage = $("<img class='gifImage border rounded-circle' style='height:80%; width: 80%;'>");
                // Setting the src attribute of the image to a property pulled off the result item
                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
                gifImage.attr("data-state", "still");
                



                // Appending the paragraph and image tag to the animalDiv
                gifDiv.append(p);
                gifDiv.append(gifImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-view").append(gifDiv);
            }
        });
});

$(document).on("click", ".gifImage", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});


// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();