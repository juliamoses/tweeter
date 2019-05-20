$(document).ready(function() {


//to hide and show compose button
$( '.compose' ).click(function() {
  $( '.new-tweet' ).slideToggle( 'slow', function() {
    $('textarea').focus();
  });
});


//takes in tweet object, appends to the tweet container
function renderTweets(tweets) {
  for (tweet of tweets) {
  	let $tweet = createTweetElement(tweet);
  	$('#tweet-container').prepend($tweet);
  }
}


function createTweetElement(tweet) {
  const {user, content, created_at} = tweet;
  const {name, avatars, handle} = user;
  const {text} = content;
  const src = typeof(avatars) !== "undefined" ? avatars.regular : "";
  const $tweet = $('<article>').addClass('tweet');

  //DOM structure creation
  $header = $('<header>');
  $avatar = $('<img class="avatar">').attr('src', src);
  $name = $('<h2>').text(name);
  $handle = $('<p>').text(handle);
  $tweetContent = $('<p>').text(text);
  $footer = $('<footer>');
  $date = $('<p>').text(moment(created_at).calendar());
  $likes = $('<div>').addClass('likes');
  $favorite = $('<img>').attr('src', '/images/favorite.png');
  $explore= $('<img>').attr('src', '/images/explore.png');
  $language = $('<img>').attr('src', '/images/language.png');

  //appending DOM elements
  $header.append($avatar, $name, $handle);
  $footer.append($likes, $date);
  $likes.append($favorite, $explore, $language);
  $tweet.append($header, $tweetContent, $footer);

  return $tweet;

}



const postRequest = () => {
  $('form').on('submit', function(event) {
    event.preventDefault()
  
		if(!$('textarea', this).val()){
			$('.errorMessage').slideDown('slow');
			$('.errorMessage').text('please create a tweet!');
			return;
		} else if($('textarea', this).val().length > 140) {
			$('.errorMessage').slideDown('slow');
			$('.errorMessage').text('whoa! too much tweet')
			return;
		} else{

      //ajax post request to submit form
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $(this).serialize(),
      }).done(function() {
		  $('textarea').val('');
		  updateCharacterCounter();
      $('#tweet-container').empty();
		  loadTweets();
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


});







