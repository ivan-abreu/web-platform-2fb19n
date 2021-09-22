$(document).ready(function() {
  $('#circulo').mouseenter(function() {
    $(this).addClass('animacirculo');
  });
  $('#circulo').mouseleave(function() {
    $(this).removeClass('animacirculo');
  });
});
