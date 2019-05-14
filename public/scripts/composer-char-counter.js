$(document).ready(function() {
  const maxValue = $('.counter').text();

  $("#btn").on('input', function() {
    const counter = $(this).val().length;
    $('.counter').text(maxValue - counter);

    $('.counter').text() < 0 ? $('.counter').addClass('invalid') : 
    $('.counter').removeClass('invalid');
});
});