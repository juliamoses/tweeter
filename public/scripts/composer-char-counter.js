const maxValue = 140;
function updateCharacterCounter() {
	const counter = $("#btn").val().length;

	$('.counter').text(maxValue - counter);
	$('.counter').text() < 0 ? $('.counter').addClass('invalid') : 
	$('.counter').removeClass('invalid');
	$('.errorMessage').slideUp('slow');
}

$(document).ready(function() {
  $("#btn").on('input', updateCharacterCounter);
});