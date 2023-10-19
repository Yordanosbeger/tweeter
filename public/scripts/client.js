
$(document).ready(() =>{
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense, donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  const $tweetsContainer = $('#tweets-container');
  $tweetsContainer.empty(); // Empty the container before rendering new tweets

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
          <span></span>
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
// Render the tweets
renderTweets(data);
})