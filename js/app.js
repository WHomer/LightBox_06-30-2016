

var $overlay =$('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

 //add image to overlay
$overlay.append($image);
//add caption to overlay
$overlay.append($caption);
//add overlay
$("body").append($overlay);

//capture the click event on a link to an image.
$("#imageGallery a").click(function(event){
  event.preventDefault();
  //update the overlay with the image linked in the link
  var $imageLocation = $(this).attr("href");
  $image.attr("src", $imageLocation);
  //get childs alt attribute and set caption
  var $imageAlt = $(this).children("img").attr("alt");
  $caption.text($imageAlt);
  //show the overlay
  $overlay.show();

  
});

//when overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  //hide the overlay











