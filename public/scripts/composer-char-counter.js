const maxValue = 140;
function updateCharacterCounter() {
	const counter = $("#composeText").val().length;

	$('.counter').text(maxValue - counter);
	$('.counter').text() < 0 ? $('.counter').addClass('invalid') : 
	$('.counter').removeClass('invalid');
	$('.errorMessage').slideUp('slow');
}

$(document).ready(function() {
  $("#composeText").on('input', updateCharacterCounter);
});