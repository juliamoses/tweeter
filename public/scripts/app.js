$(document).ready(function() {
	$('textarea').focus();



//hardcoded user data
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];




//takes in tweet object, appends to the tweet container
function renderTweets(tweets) {
  for(tweet of tweets) {
  	let $tweet = createTweetElement(tweet)
  	console.log($tweet);
  	$('#tweet-container').prepend($tweet);
  }
}



function createTweetElement(tweet) {
  const {user, content, created_at} = tweet;
  const {name, avatars, handle} = user;
  const {text} = content;
  const src = avatars.regular;
  const $tweet = $('<article>').addClass('tweet');


  //DOM structure creation
  $header = $('<header>');
  $avatar = $('<img class="avatar">').attr('src', src);
  $name = $('<h2>').text(name);
  $handle = $('<p>').text(handle);
  $tweetContent = $('<p>').text(text);
  $footer = $('<footer>');
  $date = $('<p>').text(moment().calendar());
  $likes = $('<div>').addClass('likes');
  $explore = $('<img>').attr('src', "/images/explore.png");
  $favorite= $('<img>').attr('src', "/images/favorite.png");
  $language = $('<img>').attr('src', "/images/language.png");


  //appending DOM elements
  $header.append($avatar);
  $header.append($name);
  $header.append($handle);
  $footer.append($likes);
  $footer.append($date);
  $likes.append($explore);
  $likes.append($favorite);
  $likes.append($language);
  $tweet.append($header);
  $tweet.append($tweetContent);
  $tweet.append($footer);

  return $tweet;

}


function postRequest(){
  $("form").on("submit", function(event) {
  	const textarea = $("textarea");
    event.preventDefault()
  
    if(!textarea.val()) {
    	alert("no words");
    } else if(textarea.val().length > 140) {
    	alert("too much")
    } else{

      //ajax post request to submit form
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $(this).serialize(),
        // success: success,
        // dataType: dataType
      }).done(function() {
	    console.log("post request");
      })
    }
  })
}

postRequest();



//ajax get request to submit form
const loadTweets = () => $.ajax({
	type: 'GET',
	url: '/tweets',
	dataType: 'json'
}).done(function (response) {
  renderTweets(response);
})

loadTweets();







renderTweets(data);

});







