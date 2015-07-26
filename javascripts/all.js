
$(document).ready(function() {
  $('#project-nav-button').click(function() {
    $('html, body').animate({
      scrollTop: $('#projects-content').offset().top}, 1000);
  });

  $('#about-nav-button').click(function() {
    $('html, body').animate({
      scrollTop: $('#about-us-content').offset().top}, 1000);
  });

  $('#news-nav-button').click(function() {
    $('html, body').animate({
      scrollTop: $('#news-content').offset().top}, 1000);
  });

});

