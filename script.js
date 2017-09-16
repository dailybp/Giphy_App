//Psuedocode

//==============================================================================

//Global Variables
//==============================================================================
var topicArray = ["Carl Weathers", "Chow Yun-fat", "Chuck Norris", "Jean-Claude Van Damme"
,"Mel Gibson","Harrison Ford","Jackie Chan", "Sylvester Stallone", "Arnold Schwarzenegger",
"Bruce Willis", "Kurt Russel"];

var topic = $(this).attr(".topic-btn",".submit-form-btn");

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  topic + "&api_key=dc6zaTOxFJmzC&limit=10";

//Functions
//==============================================================================

$('.topics-list').empty();

function renderButtons(){
  for (var i = 0; i < topicArray.length; i++){
    var topicButton = $("<button>");
    topicButton.addClass("topic-btn");
    topicButton.attr("data-name", topicArray[i]);
    topicButton.text(topicArray[i]);
    $('.topics-list').append(topicButton);
  }
}


function submitForm(){
  $('.submit-form-btn').on('click',function({

  }));
};

$(".topic-btn").on('click', function({
  event.preventDefault();

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .done(function(response){
    console.log(response);
    var data = response.data;

    for (var i = 0; i < topicArray.length; i++){
      var gifDiv = $("<div class='item'");
      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);
      var topicGif = $("<img>");
      topicGif.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(topicGif);
    }
  })
}));
//Main Process
//==============================================================================
