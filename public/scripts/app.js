/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweet) {
  const {user, content, created_at} = tweetData;
  const {name, avatars, handle} = user;
  const {text} = content;
  const src = avatars.regular;
  const $tweet = $('<article>').addClass('tweet');


  //DOM structure creation
  $header = $('<header>');
  $avatar = $('img class="avatar"').attr('src', src);;
  $name = $('<h2>').text(name);
  $handle = $('<p>').text(handle);
  $tweetContent = $('<p>').text(text);
  $footer = $('<footer>');
  $date = $('<p>').text(moment().subtract(1, 'days').calendar());
  $likes = $('<div> class="likes"')
  $explore = $('img').attr('src', "/images/explore.png");
  $favorite= $('img').attr('src', "/images/favorite.png");
  $language = $('img').attr('src', "/images/language.png");


  //appending DOM elements
  $header.append($avatar);
  $header.append($name);
  $header.append($handle);
  $footer.append($likes);
  $likes.append($explore);
  $likes.append($favorite);
  $likes.append($language);
  $tweet.append($header);
  $tweet.append($tweetContent);
  $tweet.append($footer);

  return $tweet;

}





// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so
//we can make sure it's got all the right elements, classes, etc.





