$(document).ready(function() {
  
$(".new-tweet").find("textarea").on("input", function() {
  const maxLength = 140;
  const currentLength = $(this).val().length;
  const remainingChars = maxLength - currentLength;

  // Update the counter value
  $(this).closest(".new-tweet").find(".counter").text(remainingChars);

  // Change the counter color if the limit is exceeded
  if (remainingChars < 0) {
    $(this).closest(".new-tweet").find(".counter").addClass("invalid");
  } else {
    $(this).closest(".new-tweet").find(".counter").removeClass("invalid");
  }
});

});

