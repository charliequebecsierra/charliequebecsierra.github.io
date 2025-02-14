$(document).ready(function() {
  $("#back-to-top").click(scrollToTop);
  $(window).scroll(toggleScrollToTopButton);
});

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
}

function toggleScrollToTopButton() {
  var threshold = 200;
  if ($(window).scrollTop() > threshold) {
    $("#back-to-top").fadeIn('slow');
  } else {
    $("#back-to-top").fadeOut('slow');
  }
}