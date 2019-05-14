$(document).ready(function() {
  const maxValue = $('.counter').text();

  $("#btn").on('input', function() {
    const counter = $(this).val().length;
     $('.counter').text(maxValue - counter);
});
});