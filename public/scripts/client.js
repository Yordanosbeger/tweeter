
$(document).ready(() =>{

  const renderTweets = function(tweets) {
   const $tweetsContainer = $('#tweets-container');
   $tweetsContainer.empty(); 

  for (const tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
     $tweetsContainer.prepend($tweetElement);
   }
 };

const createTweetElement = function(tweet) {
  const $tweet = $(`
    <article class="tweet">
      <header>
        <div class="avatar">
          <img src="${tweet.user.avatars}" alt="Profile Image">
        </div>
        <div class="name-handle">
          <h2 class="user-name">${tweet.user.name}</h2>
          <p class="handle">${tweet.user.handle}</p>
        </div>
      </header>
      <div class="tweet-content">
        <p>${tweet.content.text}</p>
      </div>
      <footer>
        <div class="icon">
          <i class="far fa-comment"></i>
          <span class="timeago">${timeago.format(tweet.created_at)}</span>
        </div>
        <div class="icon">
          <i class="fas fa-retweet"></i>
          <span></span>
        </div>
        <div class="icon">
          <i class="far fa-heart"></i>
          <span></span>
        </div>
        <div class="icon">
          <i class="fas fa-share"></i>
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

$('form').on('submit', function(event) {
   event.preventDefault();

   // Get the tweet content from the form
   const tweetText = $('#tweet-text').val();

   // Check if the tweet content is empty or exceeds 140 characters
   if (!tweetText) {
     alert("Tweet content is empty. Please enter your tweet.");
     return; // Do not submit the form
   }

   if (tweetText.length > 140) {
     alert("Tweet is too long. Please keep it within 140 characters.");
     return; // Do not submit the form
   }
   const data = $(this).serialize();
  
//   // Send an AJAX POST request
   $.ajax({
    method: "POST",
    url: "/tweets",
    data: data,
    success: function() {
      // After successfully creating the tweet, load and render tweets.
      $('#tweet-text').val('');
      loadTweets();
     }
        })
         
      const loadTweets = function() {
        $.ajax({
          method: "GET",
          url: "/tweets",
          dataType: "json",
          success: function(tweets) {
            renderTweets(tweets);
          },
           });
      };
      
      loadTweets();
        
       });
       
       setInterval(function() {
        loadTweets();
      }, 30000); 
    });
  
      
