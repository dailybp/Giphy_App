//Psuedocode
// create an array of topics
// create a function to turn those topics in the array into buttons
// create an funciton that take user input and adds the input to the array of topics
// make an ajax call to Giphy to make gifs of the topics in our array
//==============================================================================

//Global Variables
//==============================================================================
var topicArray = ["Carl Weathers", "Chow Yun-fat", "Chuck Norris", "Jean-Claude Van Damme"
,"Mel Gibson","Harrison Ford","Jackie Chan", "Sylvester Stallone", "Arnold Schwarzenegger",
"Bruce Willis", "Kurt Russel"];

//Functions
//==============================================================================

$('#topics-list').empty();

//a function to render all the buttons in the topicArray
function renderButtons(){
  for (var i = 0; i < topicArray.length; i++){
    var topicButton = $("<button>");
    topicButton.addClass("topic-btn");
    topicButton.attr("data-name", topicArray[i]);
    topicButton.text(topicArray[i]);
    $('#topics-list').append(topicButton);
  }
};

//turns the users input into a variable
//then adds the topic to the topicArray
$('#submit-form-btn').on('click',function(){
    var topic = $("#topic-input").val().trim();
    topicArray.push(topic);
  });

$(".gif").on("click", function() {
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

$(".topic-btn").on('click', function(){
  event.preventDefault();

  var topic = $(this).attr("topic-btn");//variable to use when making the queryURL

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=mFZAbwYtmyKGOidBCdB0q4Z8Ngdrqt3g";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response){
    console.log(response);
    var data = response.data;

    for (var i = 0; i < topicArray.length; i++){
      var gifDiv = $("<div class='item'");
      gifDiv.addClass("gif");
      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);
      var topicGif = $("<img>");
      topicGif.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(topicGif);
    }
  })
});

//Main Process
//==============================================================================
$(document).ready(function(){
  renderButtons();
});
