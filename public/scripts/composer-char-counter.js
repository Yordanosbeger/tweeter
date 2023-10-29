$(document).ready(function() {
  // --- our code goes here ---

//console.log("tThe composer-char-counter  file  has been loaded")

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


// const $newTweetSection = $('.new-tweet');
//   const $composeButton = $('.compose-button');

//   // Hide the new-tweet section initially
//   $newTweetSection.slideUp(0);

//   // Toggle the new-tweet section on button click
//   $composeButton.click(() => {
//     $newTweetSection.slideToggle(200, function () {
//       // Automatically focus on the tweet text area when the section slides down
//       if ($newTweetSection.is(':visible')) {
//         $('#tweet-text').focus();
//       }
//     });
//   });

  
  const $scrollToTopButton = $('#scroll-to-top');
  const $navButton = $('.compose-button');

  // Initially hide the scroll-to-top button
  $scrollToTopButton.hide();

  // Show the scroll-to-top button when the user starts scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $scrollToTopButton.show();
      $navButton.hide();
    } else {
      $scrollToTopButton.hide();
      $navButton.show();
    }
  });

  // Scroll to the top and enable the textarea on button click
  $scrollToTopButton.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, function () {
    
    });
  });


});

