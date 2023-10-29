$(document).ready(() => {

  const renderTweets = function(tweets) {
    const $tweetsContainer = $('#tweets-container');
    $tweetsContainer.empty();

    for (const tweet of tweets) {
      const $tweetElement = createTweetElement(tweet);
      $tweetsContainer.prepend($tweetElement);
    }
  };

  const createTweetElement = function(tweet) {
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
     console.log('text');
    const $tweet = `
      <article class="tweet-container">
        <header class="tweet-header">

          <div class="tweet-avator-box">
            <img class="tweet-avator" src="${tweet.user.avatars}" alt="User Avatar">
            <h5 class="tweet-username">${tweet.user.name}</h5>
          </div>
          <span class="handle">${tweet.user.handle}</span>
          </header>
        <div class="tweet-content">
          <!-- Apply XSS-escaped content to the <p> element -->
          <p>${escape(tweet.content.text)}</p>
        </div>
        <footer class=" tweet-footer">
          <span class="timeago">${timeago.format(tweet.created_at)}</span>
           <div class=" tweet-icons">
           <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fas fa-retweet"></i>
            <i class="fa-solid fas fa-heart"></i>
          </div>
          </footer>
      </article>
    `;
    
    return $tweet;
  };

  $('form').on('submit', function(event) {
    event.preventDefault();

    // Get the tweet content from the form
    const tweetText = $('#tweet-text').val();
    const $errorMessage = $('.error-message');
    $errorMessage.hide();
    console.log(tweetText);

    // Check if the tweet content is empty or exceeds 140 characters
    if (!tweetText || tweetText.trim() === "") {
      $errorMessage.text("Tweet content cannot be empty.").slideDown();
      return; // Stop further execution
    }

    if (tweetText.length > 140) {
      $errorMessage.text("Tweet content is too long. Maximum 140 characters allowed.").slideDown();
      return; // Stop further execution
    }

     // Send an AJAX POST request
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize(),}).then(loadTweets);
       $(this)[0].reset();
       //reset counter
       $(this).find(".counter").text("140");
    });
  

  const loadTweets = function() {
    $("tweet-text").val("");
    $.ajax('/tweets',{method:'GET'}).then(renderTweets);
  };
     
  loadTweets();
});

