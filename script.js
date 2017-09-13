$("#submit-form").on('click',function({
  
}));

$("#button").on('click', function({
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
